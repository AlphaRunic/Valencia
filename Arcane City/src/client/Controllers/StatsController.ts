import { KnitClient as Knit } from "@rbxts/knit";
import { UI } from "shared/Utility/Classes/UI";
import { GameStats } from "shared/Classes/Stats";
import { Tweener } from "shared/Utility/Classes/Tweenable";

declare global {
    interface KnitControllers {
        StatsController: typeof StatsController;
    }
}
// PLZZZZ change
function xpUntilNext(level: number, amt: number, spd: number) {
    return (level / amt) ^ spd
}

const main = UI.Main();
const gameFrame = main.Game;
const statList = gameFrame.Stats.List;
const level = gameFrame.Level;
const xp = gameFrame.XP.Bar;
const StatsController = Knit.CreateController({
    Name: "StatsController",
    Toggled: false,

    Toggle(): void {
        const statFrame = main.Game.Stats;
        const closedPos = statFrame.GetAttribute<UDim2>("ClosedPos");
        const openPos = statFrame.GetAttribute<UDim2>("OpenPos");
        
        const stats = new Tweener(statFrame);
        const info = new TweenInfo(.15, Enum.EasingStyle.Elastic);
        stats.Tween(info, { Position: this.Toggled ? openPos : closedPos });
        this.Toggled = !this.Toggled;
    },

    Update(stats: GameStats): void {
        statList.Resist.Text = `Resist: ${stats.Resist}`;
        statList.Damage.Text = `Damage: ${stats.Damage}`;
        statList.Health.Text = `Health: ${stats.Health}/${stats.MaxHealth}`;
        level.Text = tostring(stats.Level);

        const xpBar = new Tweener(xp);
        const percent = stats.XP / xpUntilNext(stats.Level, .15, 2);
        const size = new UDim2(percent * .93, 0, 1, 0);
        xpBar.Tween(new TweenInfo(.2, Enum.EasingStyle.Sine), { Size: size });
    }
});

export = StatsController;