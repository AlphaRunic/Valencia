import { Tween } from "../../Utility/Functions/UI/Tween";

export class Tweenable<T extends Instance = Instance> {
    public constructor(
        public readonly Instance: T
    ) {}

    public Tween(tweenInfo: TweenInfo, goal: object): Tween {
        return Tween(this.Instance, tweenInfo, goal);
    }
}