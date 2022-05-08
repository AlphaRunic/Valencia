-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Tween = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "Tween").Tween
local Tweenable
do
	Tweenable = setmetatable({}, {
		__tostring = function()
			return "Tweenable"
		end,
	})
	Tweenable.__index = Tweenable
	function Tweenable.new(...)
		local self = setmetatable({}, Tweenable)
		return self:constructor(...) or self
	end
	function Tweenable:constructor(Instance)
		self.Instance = Instance
	end
	function Tweenable:Tween(tweenInfo, goal)
		return Tween(self.Instance, tweenInfo, goal)
	end
end
return {
	Tweenable = Tweenable,
}
