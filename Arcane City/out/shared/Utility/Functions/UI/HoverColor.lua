-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Tween = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "Tween").Tween
local HoverColorOn, HoverColorOff
local function HoverColor(button, color, defaultColor, spd)
	button.MouseEnter:Connect(function()
		return HoverColorOn(button, color, spd)
	end)
	button.MouseLeave:Connect(function()
		return HoverColorOff(button, defaultColor, spd)
	end)
end
function HoverColorOn(button, color, spd)
	local info = TweenInfo.new(spd, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut)
	return Tween(button, info, {
		ImageColor3 = color,
	})
end
function HoverColorOff(button, defaultColor, spd)
	local info = TweenInfo.new(spd, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut)
	return Tween(button, info, {
		ImageColor3 = defaultColor,
	})
end
return {
	HoverColor = HoverColor,
	HoverColorOn = HoverColorOn,
	HoverColorOff = HoverColorOff,
}
