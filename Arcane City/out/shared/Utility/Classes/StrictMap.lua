-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Exception = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Internal", "Exception").Exception
local StrictMap
do
	StrictMap = setmetatable({}, {
		__tostring = function()
			return "StrictMap"
		end,
	})
	StrictMap.__index = StrictMap
	function StrictMap.new(...)
		local self = setmetatable({}, StrictMap)
		return self:constructor(...) or self
	end
	function StrictMap:constructor(base)
		local _condition = base
		if _condition == nil then
			_condition = {}
		end
		self.cache = _condition
	end
	function StrictMap:Size()
		-- ▼ ReadonlyMap.size ▼
		local _size = 0
		for _ in pairs(self.cache) do
			_size += 1
		end
		-- ▲ ReadonlyMap.size ▲
		return _size
	end
	function StrictMap:Set(key, value)
		-- ▼ Map.set ▼
		self.cache[key] = value
		-- ▲ Map.set ▲
		return self
	end
	function StrictMap:Get(key)
		local value = self.cache[key]
		if not (value ~= 0 and (value == value and (value ~= "" and value))) then
			error(Exception.new('Key "' .. (tostring(key) .. '" has no value associated with it.')))
		else
			return value
		end
	end
end
return {
	default = StrictMap,
}
