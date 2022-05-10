import { KnitClient as Knit } from "@rbxts/knit";
import { ReplicatedFirst } from "@rbxts/services";
import { Store } from "shared/Classes/DataBase";
import { Item } from "shared/Classes/Item";
import { Tweener } from "shared/Utility/Classes/Tweenable";
import { UI } from "shared/Utility/Classes/UI";
import Clickable from "shared/Classes/Clickable";
import GetTweenPos from "shared/Utility/Functions/UI/GetTweenPos";

declare global {
    interface KnitControllers {
        ShopController: typeof ShopController;
    }
}

const main = UI.Main();
const shop = main.Interactions.Shop;
const assets = ReplicatedFirst.Assets
const items = assets.ShopItems;
let lastItem: Item;

const ShopController = Knit.CreateController({
    Name: "ShopController",
    Data: Knit.GetService("DataService"),
    Inv: Knit.GetService("InventoryService"),
    ItemDisplayed: false, 
    Items: [
        new Item("Sword", items.BasicSword, 350, "A sword to slay your first of monsters.")
    ],

    Toggle(value?: boolean): void {
        shop.Visible = value?? !shop.Visible;
    },

    Purchase<R extends Instance = Instance>(item: Item<R>): boolean {
        let success = false;
        try {
            const gold = <number>this.Data.Get("Gold", 350);
            if (gold >= item.Price) {
                this.Data.Set("Gold", gold - item.Price);
                this.Inv.Add(item);
                success = true;
            }
        } catch(e) {
            warn(e);
        } finally {
            item.Purchased = success;
            return success;
        }
    },

    OpenItem<R extends Instance = Instance>(i: Item<R>): void {
        if (!lastItem || lastItem === i)
            this.ItemDisplayed = !this.ItemDisplayed
        else
            this.ItemDisplayed = true;

        const shadow = shop.ItemDisplay.Shadow;
        const windowPos = GetTweenPos(shop.Window);
        const displayPos = GetTweenPos(shop.ItemDisplay);
        const displayBgPos = GetTweenPos(shadow);
        const info = new TweenInfo(.3, Enum.EasingStyle.Sine);
        const window = new Tweener(shop.Window);
        const display = new Tweener(shop.ItemDisplay);
        const displayBackground = new Tweener(shadow);
        window.Tween(info, { Position: this.ItemDisplayed ? windowPos.Open : windowPos.Closed });
        display.Tween(info, { Position: this.ItemDisplayed ? displayPos.Open : displayPos.Closed });
        displayBackground.Tween(info, { Position: this.ItemDisplayed ? displayBgPos.Open : displayBgPos.Closed });
        
        const displayViewport = shadow.ItemIcon;
        displayViewport.Price.Text = tostring(i.Price);
        shadow.Purchase.Text = i.Purchased ? "Purchased" : "Purchase";
        shadow.Description.Text = i.Description;
        shadow.Purchase.MouseButton1Click.Connect(async () => {
            if (i.Purchased) return;
            const success = await this.Purchase<R>(i);
            print(i);
            if (success)
                shadow.Purchase.Text = "Purchased";
        });
        
        const displayCam = new Instance("Camera", displayViewport);
        i.Reference.Clone().Parent = displayViewport;
        displayViewport.CurrentCamera = displayCam;
    },

    RenderItems(): void {
        const list = shop.Window.List;
        for (const i of this.Items) {
            const viewport = assets.UI.ShopItem.Clone();
            viewport.Title.Text = i.Name;

            const itemCam = new Instance("Camera", viewport);
            i.Reference.Clone().Parent = viewport;
            viewport.CurrentCamera = itemCam;

            const title = new Tweener(viewport.Title);
            const btn = new Clickable(viewport);
            const openPos = viewport.Title.GetAttribute<UDim2>("OpenPos");
            const closedPos = viewport.Title.GetAttribute<UDim2>("ClosedPos");
            const titleInfo = new TweenInfo(.3, Enum.EasingStyle.Sine);
            btn.OnLMBDown(() => this.OpenItem(i));
            btn.OnEnter(() => title.Tween(titleInfo, {
                Position: openPos,
                TextTransparency: 0,
                TextStrokeTransparency: .5
            }));
            btn.OnLeave(() => title.Tween(titleInfo, {
                Position: closedPos,
                TextTransparency: 1,
                TextStrokeTransparency: 1
            }));

            viewport.Parent = list;
        }
    },

    KnitStart(): void {
        this.RenderItems();
        shop.Window.Close.MouseButton1Click.Connect(() => this.Toggle(false));
    }
});

export = ShopController;