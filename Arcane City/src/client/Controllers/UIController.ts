import { KnitClient as Knit } from "@rbxts/knit";
import { UI } from "shared/Utility/Classes/UI";
import { Remotes } from "shared/Remotes";
import { Exception } from "shared/Internal/Exception";
import { Item } from "shared/Classes/Item";
import Input from "shared/Classes/Input";
import { Tweener } from "shared/Utility/Classes/Tweenable";

declare global {
    interface KnitControllers {
        UIController: typeof UIController;
    }
}

const main = UI.Main();
const DatabaseUpdate = Remotes.Client.Get("DataBaseUpdate");
const UIController = Knit.CreateController({
    Name: "UIController",
    State: {
        StatsOpen: false,
        InvOpen: false
    },

    BindKeys(): void {
        Input.OnPress("C", () => this.OpenStats())
            .OnPress("B", () => this.OpenInventory())
            .BindBegan();
    },

    OpenStats(): void {
        this.State.StatsOpen = !this.State.StatsOpen;
        const statFrame = main.Game.Stats;
        const closedPos = statFrame.GetAttribute<UDim2>("ClosedPos");
        const openPos = statFrame.GetAttribute<UDim2>("OpenPos");
        
        const stats = new Tweener(statFrame);
        const info = new TweenInfo(.4, Enum.EasingStyle.Sine);
        if (this.State.StatsOpen)
            stats.Tween(info, { Position: openPos });
        else
            stats.Tween(info, { Position: closedPos });
    },

    OpenInventory(): void {
        this.State.InvOpen = !this.State.InvOpen;
        print(`inventory ${this.State.InvOpen ? "open" : "closed"}`);
    },

    KnitStart(): void {
        const gold = main.Game.Gold;
        const crystals = main.Game.Crystals;
        DatabaseUpdate.Connect((name, value) => {
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

                default:
                    throw new Exception("Unhandled data update");
            }
        });
    }
});

export = UIController;