import { Player } from "@rbxts/knit/Knit/KnitClient";
import { UserInputService } from "@rbxts/services";

export default class Clickable<T extends GuiObject = GuiObject> {
    private readonly lmbDown: Callback[] = [];
    private readonly lmbUp: Callback[] = [];
    private readonly enterCallbacks: Callback[] = [];
    private readonly leaveCallbacks: Callback[] = [];
    private hovered = false;

    public constructor(
        public readonly Element: T
    ) {
        const connections: RBXScriptConnection[] = [];
        connections.push(Element.MouseEnter.Connect(() => {
            this.hovered = true
            this.CallAll(this.enterCallbacks);
        }));
        connections.push(Element.MouseLeave.Connect(() => {
            this.hovered = false
            this.CallAll(this.leaveCallbacks);
        }));
        connections.push(UserInputService.InputBegan.Connect(({ UserInputType: inputType }) => {
            if (inputType === Enum.UserInputType.MouseButton1)
                if (this.hovered)
                    this.CallAll(this.lmbDown);
        }));
        connections.push(UserInputService.InputEnded.Connect(({ UserInputType: inputType }) => {
            if (inputType === Enum.UserInputType.MouseButton1)
                if (this.hovered)
                    this.CallAll(this.lmbUp);
        }));

        Element.Destroying.Connect(() => connections.forEach(conn => conn.Disconnect()));
    }

    private CallAll(callbacks: Callback[]): void {
        for (const callback of callbacks)
            callback();
    }

    public OnLeave(callback: Callback): void {
        this.leaveCallbacks.push(callback);
    }

    public OnEnter(callback: Callback): void {
        this.enterCallbacks.push(callback);
    }

    public OnLMBDown(callback: Callback): void {
        this.lmbDown.push(callback);
    }

    public OnLMBUp(callback: Callback): void {
        this.lmbUp.push(callback);
    }
}