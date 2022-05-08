-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ClearFrame = TS.import(script, script.Parent, "Components", "ClearFrame").ClearFrame
local MenuButton = TS.import(script, script.Parent, "Components", "MenuButton").MenuButton
local BackButton = TS.import(script, script.Parent, "Components", "BackButton").BackButton
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local mainRef = Roact.createRef()
local Menu = (Roact.createFragment({
	Menu = Roact.createElement("ScreenGui", {
		ZIndexBehavior = Enum.ZIndexBehavior.Sibling,
	}, {
		Roact.createElement(ClearFrame, {
			Name = "Main",
			[Roact.Ref] = mainRef,
		}, {
			Roact.createElement(MenuButton, {
				Name = "Play",
				Img = "9572659972",
				Pos = UDim2.new(0.764, 0, 0.607, 0),
				Size = UDim2.new(0.155, 0, 0.1, 0),
			}),
			Roact.createElement(MenuButton, {
				Name = "Options",
				Img = "9572660307",
				Pos = UDim2.new(0.748, 0, 0.707, 0),
				Size = UDim2.new(0.187, 0, 0.12, 0),
			}),
			Roact.createElement(MenuButton, {
				Name = "Exit",
				Img = "9572660669",
				Pos = UDim2.new(0.764, 0, 0.8270000000000001, 0),
				Size = UDim2.new(0.155, 0, 0.1, 0),
			}),
			Title = Roact.createElement("ImageLabel", {
				AnchorPoint = Vector2.new(0.5, 0.5),
				BackgroundTransparency = 1,
				Image = "rbxassetid://8046178075",
				Position = UDim2.new(0.75, 0, 0.272, 0),
				Rotation = 1,
				Size = UDim2.new(0.337, 0, 0.544, 0),
			}),
			Dragon = Roact.createElement("ImageLabel", {
				AnchorPoint = Vector2.new(0.5, 0.5),
				BackgroundTransparency = 1,
				Image = "rbxassetid://8046258038",
				ImageColor3 = Color3.fromRGB(227, 227, 227),
				Position = UDim2.new(0.234, 0, 0.354, 0),
				Rotation = -3,
				Size = UDim2.new(0.437, 0, 0.707, 0),
			}),
		}),
		Roact.createElement(ClearFrame, {
			Name = "Options",
		}, {
			Roact.createElement(BackButton, {
				ToFrame = "Main",
			}),
		}),
	}),
}))
return {
	Menu = Menu,
}
