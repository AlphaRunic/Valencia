-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Event = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "Event").Event
local Emitter
do
	Emitter = setmetatable({}, {
		__tostring = function()
			return "Emitter"
		end,
	})
	Emitter.__index = Emitter
	function Emitter.new(...)
		local self = setmetatable({}, Emitter)
		return self:constructor(...) or self
	end
	function Emitter:constructor(Events)
		if Events == nil then
			Events = {}
		end
		self.Events = Events
	end
	function Emitter:Send(name, ...)
		local args = { ... }
		local _events = self.Events
		local _arg0 = function(e)
			return e.Name == name
		end
		-- ▼ ReadonlyArray.find ▼
		local _result = nil
		for _i, _v in ipairs(_events) do
			if _arg0(_v, _i - 1, _events) == true then
				_result = _v
				break
			end
		end
		-- ▲ ReadonlyArray.find ▲
		local event = _result
		if event then
			event:Fire(unpack(args))
		end
		return self
	end
	function Emitter:Listen(name, callback)
		local event = Event.new(name)
		event:Listen(callback)
		local _events = self.Events
		-- ▼ Array.push ▼
		_events[#_events + 1] = event
		-- ▲ Array.push ▲
	end
end
return {
	default = Emitter,
}
