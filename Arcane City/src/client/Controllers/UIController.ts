import { KnitClient as Knit } from "@rbxts/knit";
import { UI } from "shared/Utility/Classes/UI";
import { Remotes } from "shared/Remotes";
import { Exception } from "shared/Internal/Exception";
import { Item } from "shared/Classes/Item";
import Input from "shared/Classes/Input";
import { Tweener } from "shared/Utility/Classes/Tweenable";
import { GameStats } from "shared/Classes/Stats";

declare global {
    interface KnitControllers {
        UIController: typeof UIController;
    }
}

function xpUntilNext(level: number, amt: number, spd: number) {
    return (level / amt) ^ spd
}

const main = UI.Main();
const DatabaseUpdate = Remotes.Client.Get("DataBaseUpdate");
const UIController = Knit.CreateController({
    Name: "UIController",
    State: {
        StatsOpen: false,
        InvOpen: false
    },

    Update(name: string, value: unknown): void {
        const gold = main.Game.Gold;
        const crystals = main.Game.Crystals;
        const statList = main.Game.Stats.List;
        const xpBar = new Tweener(main.Game.XP.Bar);
        const level = main.Game.Level;
        switch(name) {
            case "gold":
                gold.Value.Text = tostring(value);
                break;
            case "crystals":
                crystals.Value.Text = tostring(value);
                break;
            case "inventory":
                const inv = <Item[]>value;
                break;
            case "stats":
                const stats = <GameStats>value;
                statList.Resist.Text = `Resist: ${stats.Resist}`;
                statList.Damage.Text = `Damage: ${stats.Damage}`;
                statList.Health.Text = `Health: ${stats.Health}/${stats.MaxHealth}`;

                const percent = stats.XP / xpUntilNext(stats.Level, .15, 2);
                const size = new UDim2(percent * .93, 0, 1, 0);
                xpBar.Tween(new TweenInfo(.2, Enum.EasingStyle.Sine), { Size: size });
                level.Text = tostring(stats.Level);
                break;

            default:
                throw new Exception("Unhandled data update");
        }
    },

    BindKeys(): void {
        const shop = Knit.GetController("ShopController");
        Input.OnPress("C", () => this.OpenStats())
            .OnPress("I", () => this.OpenInventory())
            .OnPress("U", () => shop.Toggle())
            .BindBegan();
    },

    OpenStats(): void {
        this.State.StatsOpen = !this.State.StatsOpen;
        const statFrame = main.Game.Stats;
        const closedPos = statFrame.GetAttribute<UDim2>("ClosedPos");
        const openPos = statFrame.GetAttribute<UDim2>("OpenPos");
        
        const stats = new Tweener(statFrame);
        const info = new TweenInfo(.4, Enum.EasingStyle.Sine);
        stats.Tween(info, { Position: this.State.StatsOpen ? openPos : closedPos });
    },

    OpenInventory(): void {
        this.State.InvOpen = !this.State.InvOpen;
        print(`inventory ${this.State.InvOpen ? "open" : "closed"}`);
    },

    KnitStart(): void {
        DatabaseUpdate.Connect((name, value) => this.Update(name, value));
    }
});

export = UIController;