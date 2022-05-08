-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Tween = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "Tween").Tween
local ClickPop = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "ClickPop").ClickPop
local HoverPop = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "HoverPop").HoverPop
local GetScaledUDim = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "GetScaledUDim").GetScaledUDim
local Tweenable = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "Tweenable").Tweenable
local LoadBar = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "UI", "LoadBar").LoadBar
return {
	Tweenable = Tweenable,
	LoadBar = LoadBar,
	Tween = Tween,
	ClickPop = ClickPop,
	HoverPop = HoverPop,
	GetScaledUDim = GetScaledUDim,
}
