import { Element } from "../Element";
import Roact from "@rbxts/roact";
import { Tweenable } from "shared/Utility/Classes/Tweenable";

interface Props {
    Pos: UDim2;
    Size: UDim2;
    Img: string;
}

export class LoadWheel extends Roact.Component<Props> {
    private ref = Roact.createRef<ImageLabel>();

    protected didMount(): void {
        const img: ImageLabel = this.ref.getValue()!;
        const wheel = new Tweenable(img);
        const t = wheel.Tween(
            new TweenInfo(.85, Enum.EasingStyle.Linear, Enum.EasingDirection.In, math.huge),
            { Rotation: img.Rotation + 360 }
        );

        game.BindToClose(() => t.Cancel());
    }

    public render(): Element<ImageLabel> {
        return (
            <imagelabel
                Ref={this.ref}
                Key="Wheel"
                BackgroundTransparency={1}
                Image={"rbxassetid://" + this.props.Img}
                Position={this.props.Pos}
                Size={this.props.Size}
                ZIndex={1}
            />
        );
    }

}