-- Compiled with roblox-ts v1.2.7
local Exception
do
	Exception = setmetatable({}, {
		__tostring = function()
			return "Exception"
		end,
	})
	Exception.__index = Exception
	function Exception.new(...)
		local self = setmetatable({}, Exception)
		return self:constructor(...) or self
	end
	function Exception:constructor(msg, lvl)
		self.msg = msg
		self.lvl = lvl
		error(msg, lvl)
	end
end
return {
	Exception = Exception,
}
