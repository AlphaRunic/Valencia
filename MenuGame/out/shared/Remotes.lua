-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Definitions = TS.import(script, TS.getModule(script, "@rbxts", "net").out).Definitions
local Remotes = Definitions.Create({
	DataBaseUpdate = Definitions.ServerToClientEvent(),
})
return {
	Remotes = Remotes,
}
