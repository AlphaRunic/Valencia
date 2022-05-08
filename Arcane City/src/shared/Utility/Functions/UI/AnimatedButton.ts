import { Tweenable } from ".";
import { AnimatedButtonDefault as AnimatedButtonDefaults } from "./AnimatedButtonDefault";
import { ClickPop, ClickPopUp, ClickPopDown } from "./ClickPop";
import { HoverColor, HoverColorOn, HoverColorOff } from "./HoverColor";
import { HoverPop, HoverPopDown, HoverPopUp } from "./HoverPop";

export default class AnimatedButton<Base extends GuiButton = GuiButton> extends Tweenable<Base> {
    public constructor(button: Base) {
        super(button);
    }

    public ClickPop(pop: number, spd: number): AnimatedButton<Base> {
        ClickPop(this.Instance, pop, spd);
        return this;
    }

    public ClickPopOn(pop: number, spd: number, defaultGoal: AnimatedButtonDefaults): Tween {
        return ClickPopDown(this.Instance, pop, spd, defaultGoal);
    }

    public ClickPopOff(pop: number, spd: number, defaultGoal: AnimatedButtonDefaults): Tween {
        return ClickPopUp(this.Instance, pop, spd, defaultGoal);
    }

    public HoverColor(color: Color3, defaultColor: Color3, spd: number): AnimatedButton<Base> {
        HoverColor(this.Instance, color, defaultColor, spd);
        return this;
    }

    public HoverColorOn(color: Color3, spd: number): Tween {
        return HoverColorOn(this.Instance, color, spd);
    }

    public HoverColorOff(color: Color3, spd: number): Tween {
        return HoverColorOff(this.Instance, color, spd);
    }

    public HoverPop(pop: number, spd: number): AnimatedButton<Base> {
        HoverPop(this.Instance, pop, spd)
        return this;
    }

    public HoverPopOn(pop: number, spd: number, defaultGoal: AnimatedButtonDefaults): Tween {
        return HoverPopUp(this.Instance, pop, spd, defaultGoal);
    }

    public HoverPopOff(spd: number, defaultGoal: AnimatedButtonDefaults): Tween {
        return HoverPopDown(this.Instance, spd, defaultGoal);
    }
}