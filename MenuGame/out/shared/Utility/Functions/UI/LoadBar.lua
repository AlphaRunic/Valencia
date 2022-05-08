-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Tweenable = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "Tweenable").Tweenable
local UI = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "UI").UI
local ObjectEvent = TS.import(script, TS.getModule(script, "@rbxts", "object-event"))
local LoadBar
do
	local super = Tweenable
	LoadBar = setmetatable({}, {
		__tostring = function()
			return "LoadBar"
		end,
		__index = super,
	})
	LoadBar.__index = LoadBar
	function LoadBar.new(...)
		local self = setmetatable({}, LoadBar)
		return self:constructor(...) or self
	end
	function LoadBar:constructor(bar, progressSpeed)
		if progressSpeed == nil then
			progressSpeed = .2
		end
		local top = UI:FindElement(bar, "Top")
		super.constructor(self, top)
		self.progressSpeed = progressSpeed
		self.top = top
		self.info = TweenInfo.new(self.progressSpeed)
		self.defaultSize = self.top.Size
		self.Progress = 0
		self.Finished = ObjectEvent.new()
		self:SetProgress()
	end
	function LoadBar:RandomlyAddProgress(speed)
		if speed == nil then
			speed = 1
		end
		while self.Progress ~= 100 do
			self:AddProgress(math.random(1 / 3, 1.25) * speed)
		end
	end
	function LoadBar:AddProgress(progress)
		if progress == nil then
			progress = 1
		end
		self:SetProgress(self.Progress + progress)
	end
	function LoadBar:SetProgress(progress)
		if progress == nil then
			progress = 0
		end
		self.Progress = math.clamp(progress, 5, 100)
		self:Tween(self.info, {
			Size = UDim2.new(self.Progress / 100, self.defaultSize.X.Offset, self.defaultSize.Y.Scale, self.defaultSize.Y.Offset),
		}).Completed:Wait()
		if self.Progress == 100 then
			self.Finished:Fire()
		end
	end
end
return {
	LoadBar = LoadBar,
}
