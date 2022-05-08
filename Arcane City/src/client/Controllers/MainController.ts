import { KnitClient as Knit } from "@rbxts/knit";

declare global {
    interface KnitControllers {
        MainController: typeof MainController;
    }
}

const MainController = Knit.CreateController({
    Name: "MainController",

    KnitStart(): void {
        const ui = Knit.GetController("UIController");
        ui.BindKeys();
    }
});

export = MainController;