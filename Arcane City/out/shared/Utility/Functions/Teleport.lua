-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Player = TS.import(script, TS.getModule(script, "@rbxts", "knit").Knit.KnitClient).Player
local Find = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "Find").default
local function Teleport(cf)
	local _condition = Find(Player.Character, "UpperTorso")
	if _condition == nil then
		_condition = Find(Player.Character, "UpperTorso")
	end
	local torso = _condition
	local _condition_1 = cf
	if _condition_1 == nil then
		_condition_1 = torso.CFrame
	end
	local _vector3 = Vector3.new(0, 6, 0)
	torso.CFrame = _condition_1 + _vector3
end
return {
	default = Teleport,
}
