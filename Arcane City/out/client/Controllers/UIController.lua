-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Knit = TS.import(script, TS.getModule(script, "@rbxts", "knit").Knit).KnitClient
local UI = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "UI").UI
local GUI = UI:Folder()
local UIController = Knit.CreateController({
	Name = "UIController",
})
return UIController
