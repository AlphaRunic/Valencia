-- Compiled with roblox-ts v1.2.7
local EventListener
do
	EventListener = setmetatable({}, {
		__tostring = function()
			return "EventListener"
		end,
	})
	EventListener.__index = EventListener
	function EventListener.new(...)
		local self = setmetatable({}, EventListener)
		return self:constructor(...) or self
	end
	function EventListener:constructor(EventName)
		self.EventName = EventName
	end
	function EventListener:Stop()
		self.Callback = nil
	end
end
local Event
do
	Event = setmetatable({}, {
		__tostring = function()
			return "Event"
		end,
	})
	Event.__index = Event
	function Event.new(...)
		local self = setmetatable({}, Event)
		return self:constructor(...) or self
	end
	function Event:constructor(Name)
		self.Name = Name
		self.Listener = EventListener.new(Name)
	end
	function Event:Fire(...)
		local args = { ... }
		if self.Listener.Callback then
			self.Listener.Callback(unpack(args))
		end
	end
	function Event:Listen(callback)
		self.Listener.Callback = callback
		return self.Listener
	end
end
return {
	EventListener = EventListener,
	Event = Event,
}
