-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local MenuButton = TS.import(script, script.Parent, "MenuButton").MenuButton
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local BackButton
do
	BackButton = Roact.Component:extend("BackButton")
	function BackButton:init()
	end
	function BackButton:render()
		return Roact.createElement(MenuButton, {
			Name = "Back",
			Img = "9572660931",
			Pos = UDim2.new(0.764, 0, 0.8270000000000001, 0),
			Size = UDim2.new(0.155, 0, 0.1, 0),
			SwitchTo = self.props.ToFrame,
		})
	end
end
return {
	BackButton = BackButton,
}
