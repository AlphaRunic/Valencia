import { KnitClient as Knit } from "@rbxts/knit";
import { Lighting } from "@rbxts/services";

declare global {
    interface KnitControllers {
        BlurController: typeof BlurController;
    }
}

let blur: BlurEffect;
const BlurController = Knit.CreateController({
    Name: "BlurController",

    Toggle(): void {
        blur.Enabled = !blur.Enabled;
    },

    KnitStart(): void {
        blur = new Instance("BlurEffect", Lighting);
        blur.Enabled = false;
    }
});

export = BlurController;