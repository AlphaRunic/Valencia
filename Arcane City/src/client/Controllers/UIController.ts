import { KnitClient as Knit } from "@rbxts/knit";
import { Tweener } from "shared/Utility/Classes/Tweenable";
import { UI } from "shared/Utility/Classes/UI";
import { Exception } from "shared/Internal/Exception";
import { Remotes } from "shared/Remotes";
import { Item } from "shared/Classes/Item";
import { GameStats } from "shared/Classes/Stats";
import Input from "shared/Classes/Input";

declare global {
    interface KnitControllers {
        UIController: typeof UIController;
    }
}

const DatabaseUpdate = Remotes.Client.Get("DataBaseUpdate");
const main = UI.Main();
const gameFrame = main.Game;
const gold = gameFrame.Gold;
const crystals = gameFrame.Crystals;

interface Required {
    Shop?: typeof Knit.Controllers["ShopController"];
    Stats?: typeof Knit.Controllers["StatsController"];
    Inv?: typeof Knit.Controllers["InventoryController"];
}

const req: Required = {};
const UIController = Knit.CreateController({
    Name: "UIController",
    State: {
        StatsOpen: false
    },

    KnitStart(): void {
        DatabaseUpdate.Connect((name, value) => this.Update(name, value));
        req.Shop = Knit.GetController("ShopController")
        req.Inv = Knit.GetController("InventoryController");
        req.Stats = Knit.GetController("StatsController");
    },

    BindKeys(): void {
        Input.OnPress("C", () => req.Stats?.Toggle())
            .OnPress("B", () => req.Inv?.Toggle())
            .OnPress("U", () => req.Shop?.Toggle())
            .BindBegan();
    },

    Update(name: string, value: unknown): void {
        switch(name) {
            case "gold":
                gold.Value.Text = tostring(value);
                break;
            case "crystals":
                crystals.Value.Text = tostring(value);
                break;
            case "inventory":
                const inv = <Item[]>value;
                if (!req.Inv)
                    task.delay(3, () => req.Inv!.Update(inv));
                else
                    req.Inv.Update(inv);
                break;
            case "stats":
                const stats = <GameStats>value;
                if (!req.Stats)
                    task.delay(3, () => req.Stats!.Update(stats));
                else
                    req.Stats!.Update(stats);
                break;

            default:
                throw new Exception("Unhandled data update for '" + name + "'");
        }
    }
});

export = UIController;