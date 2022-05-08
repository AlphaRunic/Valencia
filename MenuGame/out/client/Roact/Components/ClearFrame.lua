-- Compiled with roblox-ts v1.2.7
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local function ClearFrame(props)
	local _attributes = {
		[Roact.Ref] = props.Ref,
		BackgroundTransparency = 1,
		Position = UDim2.new(0, 0, 0, -50),
		Size = UDim2.new(1, 0, 1, 50),
	}
	local _children = {}
	local _length = #_children
	local _child = props[Roact.Children]
	if type(_child) == "table" then
		if _child.elements ~= nil or _child.props ~= nil and _child.component ~= nil then
			_children[_length + 1] = _child
		else
			for _k, _v in pairs(_child) do
				if type(_k) == "number" then
					_children[_length + _k] = _v
				else
					_children[_k] = _v
				end
			end
		end
	end
	return Roact.createFragment({
		[props.Name] = Roact.createElement("Frame", _attributes, _children),
	})
end
return {
	ClearFrame = ClearFrame,
}
