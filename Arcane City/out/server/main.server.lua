-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Knit = TS.import(script, TS.getModule(script, "@rbxts", "knit").Knit).KnitServer
local WaitFor = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "WaitFor").default
for _, v in ipairs(WaitFor(script.Parent, "Services"):GetDescendants()) do
	if v:IsA("ModuleScript") then
		require(v)
	end
end
Knit.Start():catch(warn)
