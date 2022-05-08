-- Compiled with roblox-ts v1.2.7
local function Weld(p0, p1, constraint)
	if constraint == nil then
		constraint = true
	end
	local w = Instance.new(constraint and "WeldConstraint" or "Weld")
	w.Part0 = p0
	w.Part1 = p1
	w.Parent = p0
	return w
end
return {
	default = Weld,
}
