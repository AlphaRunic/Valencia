import { KnitClient as Knit } from "@rbxts/knit";
import { UI } from "shared/Utility/Classes/UI";
import { Item, ItemCategory } from "shared/Classes/Item";
import StrictMap from "shared/Utility/Classes/StrictMap";
import { ReplicatedFirst } from "@rbxts/services";
import { Tweener } from "shared/Utility/Classes/Tweenable";
import AnimatedButton from "shared/Utility/Classes/AnimatedButton";

declare global {
    interface KnitControllers {
        InventoryController: typeof InventoryController;
    }
}

interface Required {
    Blur?: typeof Knit.Controllers["BlurController"];
}

const req: Required = {};
const main = UI.Main();
const backpack = main.Interactions.Backpack;
const categoryStorage = backpack.ItemStorage;
const map = new StrictMap<ItemCategory, Item[]>([
    ["Weapon", []],
    ["Hat", []],
    ["Robe", []],
    ["Boots", []],
    ["Charm", []],
]);

const assets = ReplicatedFirst.Assets;
const InventoryController = Knit.CreateController({
    Name: "InventoryController",

    Update(inv: Item[]): void {
        this.Categorize(inv);
        this.CreateButtons(inv);
        
    },

    Toggle(): void {
        main.Game.Visible = !main.Game.Visible;
        backpack.Visible = !backpack.Visible;
        req.Blur!.Toggle();
    },

    Categorize(inv: Item[]): void {
        for (const i of inv) {
            const list = map.Get(i.Category);
            list.push(i);
            map.Set(i.Category, list);
        }
    },

    CreateButtons(items: Item[]): TextButton[] {
        const btns = items.map(i => {
            const b =  assets.UI.BackpackItem.Clone();
            const btn = new Tweener(b);
            b.Text = i.Name;

            const info = new TweenInfo(.15, Enum.EasingStyle.Quad);
            const defaultSize = b.Size;
            const inc = new UDim2(.1, 0, 0, 0);
            b.MouseEnter.Connect(() => btn.Tween(info, { Size: defaultSize.add(inc) }));
            b.MouseLeave.Connect(() => btn.Tween(info, { Size: defaultSize.sub(inc) }));
            return b;
        });

        map.ForEach((list, category) => {
            for (const btn of btns) {
                const correspondingItem = list.find(i => i.Name === btn.Name);
                if (correspondingItem?.Category === category)
                    btn.Parent = categoryStorage[category];
            }
        });

        return btns;
    },

    SwitchCategory(name: ItemCategory): void {
        const categoryBtns = <Folder>categoryStorage[name];
        backpack.Items.GetChildren()
            .filter(b => b.IsA("TextButton"))
            .forEach(b => b.Parent = <Folder>categoryStorage[b.Name]);

        for (const btn of categoryBtns.GetChildren())
            btn.Parent = backpack.Items;
    },

    KnitStart(): void {
        req.Blur = Knit.GetController("BlurController");
        const categories = <ImageButton[]>backpack.Categories.GetChildren().filter(b => b.IsA("ImageButton"));
        for (const categoryBtn of categories) {
            const folder = new Instance("Folder");
            folder.Name = categoryBtn.Name;
            folder.Parent = categoryStorage;

            const category = new AnimatedButton(categoryBtn);
            const pop = 4, spd = .15;
            category.HoverPop(pop, spd);
            category.ClickPop(pop, spd);
            categoryBtn.MouseButton1Click.Connect(() => this.SwitchCategory(<ItemCategory>categoryBtn.Name));
        }
    }
});

export = InventoryController;