-- Compiled with roblox-ts v1.2.7
local ModelAnimator
do
	ModelAnimator = setmetatable({}, {
		__tostring = function()
			return "ModelAnimator"
		end,
	})
	ModelAnimator.__index = ModelAnimator
	function ModelAnimator.new(...)
		local self = setmetatable({}, ModelAnimator)
		return self:constructor(...) or self
	end
	function ModelAnimator:constructor(Model, animationsFolder)
		self.Model = Model
		self.tracks = {}
		if Model then
			local animController = Model:FindFirstChildOfClass("AnimationController")
			local _result = animController
			if _result ~= nil then
				_result = _result:WaitForChild("Animator")
			end
			self.controller = _result
			local _condition = animationsFolder
			if _condition == nil then
				_condition = Model:FindFirstChild("Animations")
			end
			self.animFolder = _condition
		end
	end
	function ModelAnimator:SetAnimationFolder(folder)
		self.animFolder = folder
	end
	function ModelAnimator:GetAnimation(animName)
		return self.animFolder:WaitForChild(animName)
	end
	function ModelAnimator:Load(animName)
		local anim = self:GetAnimation(animName)
		local track = self.controller:LoadAnimation(anim)
		-- ▼ Map.set ▼
		self.tracks[animName] = track
		-- ▲ Map.set ▲
		return track
	end
	function ModelAnimator:Animate(animName, spd)
		self:StopAllAnimations()
		return self:AnimateAsync(animName, spd)
	end
	function ModelAnimator:AnimateAsync(animName, spd)
		local track = self.tracks[animName]
		track.Stopped:Connect(function()
			-- ▼ Map.delete ▼
			local _valueExisted = self.tracks[animName] ~= nil
			self.tracks[animName] = nil
			-- ▲ Map.delete ▲
			return _valueExisted
		end)
		track:Play(nil, nil, spd)
		return track
	end
	function ModelAnimator:StopAnimation(animName)
		local track = self.tracks[animName]
		local _result = track
		if _result ~= nil then
			_result:Stop()
		end
	end
	function ModelAnimator:StopAllAnimations()
		local _tracks = self.tracks
		local _arg0 = function(track, animName)
			return self:StopAnimation(animName)
		end
		-- ▼ ReadonlyMap.forEach ▼
		for _k, _v in pairs(_tracks) do
			_arg0(_v, _k, _tracks)
		end
		-- ▲ ReadonlyMap.forEach ▲
	end
end
return {
	default = ModelAnimator,
}
