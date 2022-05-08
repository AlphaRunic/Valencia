-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local LoadWheel = TS.import(script, script.Parent, "Components", "LoadWheel").LoadWheel
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local LoadScreen = (Roact.createFragment({
	LoadScreen = Roact.createElement("ScreenGui", {
		DisplayOrder = 10,
		ZIndexBehavior = Enum.ZIndexBehavior.Sibling,
		Enabled = false,
	}, {
		Background = Roact.createElement("ImageLabel", {
			BackgroundTransparency = 1,
			Image = "rbxassetid://8003546721",
			Position = UDim2.new(0, 0, 0, -50),
			Size = UDim2.new(1, 0, 1, 50),
			ZIndex = 0,
		}),
		Loading = Roact.createElement("TextLabel", {
			BackgroundTransparency = 1,
			Font = Enum.Font.RobotoCondensed,
			Position = UDim2.new(0.125, 0, 0.8250000000000001, 0),
			Size = UDim2.new(0.25, 0, 0.1, 0),
			Text = "Loading...",
			TextColor3 = Color3.fromRGB(255, 255, 255),
			TextScaled = true,
			TextSize = 14,
			TextStrokeTransparency = 0.4,
			TextWrapped = true,
			TextXAlignment = Enum.TextXAlignment.Left,
			ZIndex = 1,
		}),
		Roact.createElement(LoadWheel, {
			Pos = UDim2.new(0.025, 0, 0.812, 0),
			Size = UDim2.new(0, 100, 0, 100),
			Img = "581563121",
		}),
	}),
}))
return {
	LoadScreen = LoadScreen,
}
