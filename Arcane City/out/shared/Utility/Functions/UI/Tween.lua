-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Tweens = TS.import(script, TS.getModule(script, "@rbxts", "services")).TweenService
local function Tween(i, ti, goal)
	local tween = Tweens:Create(i, ti, goal)
	tween:Play()
	return tween
end
return {
	Tween = Tween,
}
