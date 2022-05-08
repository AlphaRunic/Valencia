-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Tweenable = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "Tweenable").Tweenable
local LoadWheel
do
	LoadWheel = Roact.Component:extend("LoadWheel")
	function LoadWheel:init()
		self.ref = Roact.createRef()
	end
	function LoadWheel:didMount()
		local img = self.ref:getValue()
		local wheel = Tweenable.new(img)
		local t = wheel:Tween(TweenInfo.new(.85, Enum.EasingStyle.Linear, Enum.EasingDirection.In, math.huge), {
			Rotation = img.Rotation + 360,
		})
		game:BindToClose(function()
			return t:Cancel()
		end)
	end
	function LoadWheel:render()
		return Roact.createFragment({
			Wheel = Roact.createElement("ImageLabel", {
				[Roact.Ref] = self.ref,
				BackgroundTransparency = 1,
				Image = "rbxassetid://" .. self.props.Img,
				Position = self.props.Pos,
				Size = self.props.Size,
				ZIndex = 1,
			}),
		})
	end
end
return {
	LoadWheel = LoadWheel,
}
