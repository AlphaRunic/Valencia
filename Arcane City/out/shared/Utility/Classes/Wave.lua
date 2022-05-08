-- Compiled with roblox-ts v1.2.7
local _class
do
	local Wave = setmetatable({}, {
		__tostring = function()
			return "Wave"
		end,
	})
	Wave.__index = Wave
	function Wave.new(...)
		local self = setmetatable({}, Wave)
		return self:constructor(...) or self
	end
	function Wave:constructor(amplitude, frequency, phaseShift, verticalShift)
		if amplitude == nil then
			amplitude = 1
		end
		if frequency == nil then
			frequency = 1
		end
		if phaseShift == nil then
			phaseShift = 0
		end
		if verticalShift == nil then
			verticalShift = 0
		end
		self.amplitude = amplitude
		self.frequency = frequency
		self.phaseShift = phaseShift
		self.verticalShift = verticalShift
	end
	function Wave:Update(dt)
		return (self.amplitude * math.sin(self.frequency * tick() + self.phaseShift) + self.verticalShift) * 60 * dt
	end
	_class = Wave
end
return _class
