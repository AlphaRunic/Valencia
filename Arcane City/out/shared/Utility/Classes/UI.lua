-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local exports = {}
local Players = TS.import(script, TS.getModule(script, "@rbxts", "services")).Players
local WaitFor = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "WaitFor").default
if Players.LocalPlayer then
	exports.PUI = WaitFor(Players.LocalPlayer, "PlayerGui")
end
local UI
do
	UI = setmetatable({}, {
		__tostring = function()
			return "UI"
		end,
	})
	UI.__index = UI
	function UI.new(...)
		local self = setmetatable({}, UI)
		return self:constructor(...) or self
	end
	function UI:constructor()
	end
	function UI:Folder()
		return exports.PUI
	end
	function UI:Toggle(toggled)
		local _exp = exports.PUI:GetChildren()
		local _arg0 = function(e)
			return e:IsA("ScreenGui")
		end
		-- ▼ ReadonlyArray.filter ▼
		local _newValue = {}
		local _length = 0
		for _k, _v in ipairs(_exp) do
			if _arg0(_v, _k - 1, _exp) == true then
				_length += 1
				_newValue[_length] = _v
			end
		end
		-- ▲ ReadonlyArray.filter ▲
		local _arg0_1 = function(screenUI)
			screenUI.Enabled = toggled
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _k, _v in ipairs(_newValue) do
			_arg0_1(_v, _k - 1, _newValue)
		end
		-- ▲ ReadonlyArray.forEach ▲
	end
	function UI:Enable()
		UI:Toggle(true)
	end
	function UI:Disable()
		UI:Toggle(false)
	end
	function UI:Main()
		return exports.PUI:WaitForChild("Main")
	end
	function UI:FindElement(instance, instanceName)
		return instance:WaitForChild(instanceName)
	end
end
exports.UI = UI
return exports
