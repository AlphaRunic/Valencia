import { UserInputService as UIS } from "@rbxts/services";

export default class Input {
    private static onDown = new Map<keyof Enum.EnumType<Enum.KeyCode>, Callback>();
    private static onUp = new Map<keyof Enum.EnumType<Enum.KeyCode>, Callback>();

    public static BindBegan(): RBXScriptConnection {
        return UIS.InputBegan.Connect(({ KeyCode: key }) => {
            if (this.onDown.has(key.Name))
                this.onDown.get(key.Name)!();
        });
    }

    public static BindEnded(): RBXScriptConnection {
        return UIS.InputEnded.Connect(({ KeyCode: key }) => {
            if (this.onUp.has(key.Name))
                this.onUp.get(key.Name)!();
        });
    }

    public static OnPress(key: keyof Enum.EnumType<Enum.KeyCode>, callback: Callback) {
        this.onDown.set(key, callback);
        return this;
    }

    public static OnRelease(key: keyof Enum.EnumType<Enum.KeyCode>, callback: Callback) {
        this.onUp.set(key, callback);
        return this;
    }
}