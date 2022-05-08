import { KnitClient as Knit } from "@rbxts/knit";
import { UI } from "shared/Utility/Classes/UI";

declare global {
    interface KnitControllers {
        UIController: typeof UIController;
    }
}

const GUI = UI.Folder();
const UIController = Knit.CreateController({
    Name: "UIController",

    
});

export = UIController;