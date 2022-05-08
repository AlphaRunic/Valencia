-- Compiled with roblox-ts v1.2.7
local function NegateVector(vector)
	return Vector3.new(-vector.X, -vector.Y, -vector.Z)
end
return {
	default = NegateVector,
}
