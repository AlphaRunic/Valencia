import Roact from "@rbxts/roact"
type Element<T extends Instance> = JSX.IntrinsicElement<T> & Roact.Element

function MenuButton(props: { Name: string; Img: string; Pos: UDim2, Size: UDim2 }): Element<ImageButton> {
    return <imagebutton
            Key={props.Name}
            BackgroundTransparency={1}
            Image={"rbxassetid://" + props.Img}
            ImageColor3={Color3.fromRGB(175, 175, 175)}
            Position={props.Pos}
            Size={props.Size}
        >{props[Roact.Children]}</imagebutton>;
}

function ClearFrame(props: { Name: string; }): Element<Frame> {
    return <frame
            Key={props.Name}
            BackgroundTransparency={1}
            Position={new UDim2(0, 0, 0, -50)}
            Size={new UDim2(1, 0, 1, 50)}
        >{props[Roact.Children]}</frame>;
}

export const Menu = (
    <screengui Key="Menu" ZIndexBehavior={Enum.ZIndexBehavior.Sibling}>
        <ClearFrame Name="Main">
            <MenuButton
                Name="Options"
                Img="8046153623"
                Pos={new UDim2(0.748, 0, 0.707, 0)}
                Size={new UDim2(0.187, 0, 0.12, 0)}
            />
            <MenuButton
                Name="Exit"
                Img="8046154508"
                Pos={new UDim2(0.764, 0, 0.8270000000000001, 0)}
                Size={new UDim2(0.155, 0, 0.1, 0)}
            />
            <MenuButton
                Name="Play"
                Img="8046152154"
                Pos={new UDim2(0.764, 0, 0.607, 0)}
                Size={new UDim2(0.155, 0, 0.1, 0)}
            />
            <imagelabel
                Key="Title"
                AnchorPoint={new Vector2(0.5, 0.5)}
                BackgroundTransparency={1}
                Image="rbxassetid://8046178075"
                Position={new UDim2(0.75, 0, 0.272, 0)}
                Rotation={1}
                Size={new UDim2(0.337, 0, 0.544, 0)}
            />
            <imagelabel
                Key="Dragon"
                AnchorPoint={new Vector2(0.5, 0.5)}
                BackgroundTransparency={1}
                Image="rbxassetid://8046258038"
                ImageColor3={Color3.fromRGB(227, 227, 227)}
                Position={new UDim2(0.234, 0, 0.354, 0)}
                Rotation={-3}
                Size={new UDim2(0.437, 0, 0.707, 0)}
            />
        </ClearFrame>
        <ClearFrame Name="Options" />
    </screengui>
)