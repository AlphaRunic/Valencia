-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Knit = TS.import(script, TS.getModule(script, "@rbxts", "knit").Knit.KnitClient)
local UI = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "UI").UI
local AnimatedButton = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "AnimatedButton").default
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local spd = {
	menuButtons = .2,
}
local MenuButton
do
	MenuButton = Roact.Component:extend("MenuButton")
	function MenuButton:init(props)
		self.ref = Roact.createRef()
		self.gui = UI:Folder()
		self.ui = Knit.GetController("UIController")
		local brightness = 175
		self:setState({
			Pop = 7,
			Defaults = {
				Position = props.Pos,
				Size = props.Size,
			},
			ImgColor = Color3.fromRGB(brightness, brightness, brightness),
		})
	end
	function MenuButton:didMount()
		local b = self.ref:getValue()
		local btn = AnimatedButton.new(b)
		btn:ClickPop(self.state.Pop, spd.menuButtons):HoverColor(Color3.fromRGB(255, 255, 255), self.state.ImgColor, spd.menuButtons):HoverPop(self.state.Pop, spd.menuButtons)
	end
	function MenuButton:render()
		local _attributes = {
			[Roact.Ref] = self.ref,
			BackgroundTransparency = 1,
			Image = "rbxassetid://" .. self.props.Img,
			ImageColor3 = self.state.ImgColor,
			Position = self.props.Pos,
			Size = self.props.Size,
			[Roact.Event.MouseButton1Click] = function(b)
				return self.ui:HandleButton(b.Name, self.props.SwitchTo)
			end,
		}
		local _children = {}
		local _length = #_children
		local _child = self.props[Roact.Children]
		if _child then
			for _k, _v in pairs(_child) do
				if type(_k) == "number" then
					_children[_length + _k] = _v
				else
					_children[_k] = _v
				end
			end
		end
		return Roact.createFragment({
			[self.props.Name] = Roact.createElement("ImageButton", _attributes, _children),
		})
	end
end
return {
	MenuButton = MenuButton,
}
