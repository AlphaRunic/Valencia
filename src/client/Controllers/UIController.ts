import { KnitClient as Knit } from "@rbxts/knit";
import { Workspace as World } from "@rbxts/services";
import { UI } from "shared/Utility/Classes/UI";
import { Menu } from "client/Roact/MenuMain";
import Roact from "@rbxts/roact";
import WaitFor from "shared/Utility/Functions/WaitFor";

declare global {
    interface KnitControllers {
        UIController: typeof UIController;
    }
}

let MenuHandle: Roact.Tree
const UIController = Knit.CreateController({
    Name: "UIController",

    Initiate(): void {
        let cam = World.CurrentCamera;
        while (cam === undefined)
            cam = World.CurrentCamera;
        
        cam.CameraType = Enum.CameraType.Custom;
        cam.CFrame = WaitFor<Part>(World, "Cam").CFrame;

        this.Mount();

    },

    Mount(): void {
        MenuHandle = Roact.mount(Menu, UI.Folder(), "Menu");
    }
});

export = UIController;