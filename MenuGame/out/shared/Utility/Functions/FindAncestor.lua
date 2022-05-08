-- Compiled with roblox-ts v1.2.7
local function FindAncestor(instance, instanceName)
	return instance:FindFirstAncestor(instanceName)
end
return {
	default = FindAncestor,
}
