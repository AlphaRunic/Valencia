-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Knit = TS.import(script, TS.getModule(script, "@rbxts", "knit").Knit).KnitClient
local Player = TS.import(script, TS.getModule(script, "@rbxts", "knit").Knit.KnitClient).Player
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local World = _services.Workspace
local TP = _services.TeleportService
local Exception = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Internal", "Exception").Exception
local UI = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Classes", "UI").UI
local Menu = TS.import(script, script.Parent.Parent, "Roact", "MenuMain").Menu
local LoadScreen = TS.import(script, script.Parent.Parent, "Roact", "LoadScreen").LoadScreen
local WaitFor = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "Utility", "Functions", "WaitFor").default
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Handles = {}
local GUI = UI:Folder()
local currentFrame
local UIController = Knit.CreateController({
	Name = "UIController",
	Initiate = function(self)
		local cam = World.CurrentCamera
		while cam == nil do
			cam = World.CurrentCamera
		end
		cam.CameraType = Enum.CameraType.Scriptable
		cam.CFrame = WaitFor(World, "Cam").CFrame
		self:Mount()
		self:FocusMain("Main")
	end,
	Mount = function(self)
		local _arg0 = Roact.mount(LoadScreen, GUI, "LoadScreen")
		local _arg1 = Roact.mount(Menu, GUI, "Menu")
		-- ▼ Array.push ▼
		local _length = #Handles
		Handles[_length + 1] = _arg0
		Handles[_length + 2] = _arg1
		-- ▲ Array.push ▲
	end,
	HandleButton = function(self, name, switchTo)
		local menu = UI:Menu()
		local loadScreen = UI:LoadScreen()
		repeat
			if name == "Play" then
				menu.Enabled = false
				loadScreen.Enabled = true
				TS.try(function()
					TP:Teleport(8045769892, Player, nil, loadScreen)
				end, function(e)
					warn("Unable to teleport in Roblox Studio test mode.")
				end)
				break
			end
			if name == "Options" then
				self:Switch(menu.Options)
				break
			end
			if name == "Exit" then
				Player:Kick("Game exited.")
				break
			end
			if name == "Back" then
				if not (switchTo ~= "" and switchTo) then
					error(Exception.new("BackButton component with no frame reference"))
				end
				local toFrame = WaitFor(menu, switchTo)
				self:Switch(toFrame)
				break
			end
			error(Exception.new('Unhandled Menu UI button: "' .. (name .. '"')))
		until true
	end,
	GetMenu = function(self)
		return GUI.Menu
	end,
	FocusMain = function(self, mainName)
		local menu = self:GetMenu()
		local mainFrame = WaitFor(menu, mainName)
		for _, frame in ipairs(menu:GetChildren()) do
			frame.Visible = false
		end
		mainFrame.Visible = true
		currentFrame = mainFrame
	end,
	Toggle = function(self, element, on)
		element.Visible = on
	end,
	Switch = function(self, to)
		self:Toggle(currentFrame, false)
		self:Toggle(to, true)
		currentFrame = to
	end,
})
return UIController
