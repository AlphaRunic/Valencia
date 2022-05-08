-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Tweenable = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI").Tweenable
local _ClickPop = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "ClickPop")
local ClickPop = _ClickPop.ClickPop
local ClickPopUp = _ClickPop.ClickPopUp
local ClickPopDown = _ClickPop.ClickPopDown
local _HoverColor = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "HoverColor")
local HoverColor = _HoverColor.HoverColor
local HoverColorOn = _HoverColor.HoverColorOn
local HoverColorOff = _HoverColor.HoverColorOff
local _HoverPop = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "HoverPop")
local HoverPop = _HoverPop.HoverPop
local HoverPopDown = _HoverPop.HoverPopDown
local HoverPopUp = _HoverPop.HoverPopUp
local AnimatedButton
do
	local super = Tweenable
	AnimatedButton = setmetatable({}, {
		__tostring = function()
			return "AnimatedButton"
		end,
		__index = super,
	})
	AnimatedButton.__index = AnimatedButton
	function AnimatedButton.new(...)
		local self = setmetatable({}, AnimatedButton)
		return self:constructor(...) or self
	end
	function AnimatedButton:constructor(button)
		super.constructor(self, button)
	end
	function AnimatedButton:ClickPop(pop, spd)
		ClickPop(self.Instance, pop, spd)
		return self
	end
	function AnimatedButton:ClickPopOn(pop, spd, defaultGoal)
		return ClickPopDown(self.Instance, pop, spd, defaultGoal)
	end
	function AnimatedButton:ClickPopOff(pop, spd, defaultGoal)
		return ClickPopUp(self.Instance, pop, spd, defaultGoal)
	end
	function AnimatedButton:HoverColor(color, defaultColor, spd)
		HoverColor(self.Instance, color, defaultColor, spd)
		return self
	end
	function AnimatedButton:HoverColorOn(color, spd)
		return HoverColorOn(self.Instance, color, spd)
	end
	function AnimatedButton:HoverColorOff(color, spd)
		return HoverColorOff(self.Instance, color, spd)
	end
	function AnimatedButton:HoverPop(pop, spd)
		HoverPop(self.Instance, pop, spd)
		return self
	end
	function AnimatedButton:HoverPopOn(pop, spd, defaultGoal)
		return HoverPopUp(self.Instance, pop, spd, defaultGoal)
	end
	function AnimatedButton:HoverPopOff(spd, defaultGoal)
		return HoverPopDown(self.Instance, spd, defaultGoal)
	end
end
return {
	default = AnimatedButton,
}
