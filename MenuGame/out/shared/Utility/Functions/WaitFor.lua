-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Exception = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Internal", "Exception").Exception
local function WaitFor(instance, instanceName)
	if not instance then
		error(Exception.new("Instance is undefined"))
	end
	if not (instanceName ~= "" and instanceName) then
		error(Exception.new("Instance name is undefined"))
	end
	return instance:WaitForChild(instanceName)
end
return {
	default = WaitFor,
}
