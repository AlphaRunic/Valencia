import { KnitServer as Knit } from "@rbxts/knit";

declare global {
    interface KnitServices {
        MainService: typeof MainService;
    }
}

const MainService = Knit.CreateService({
    Name: "MainService",

    KnitStart(): void {
        
    }
});

export = MainService;