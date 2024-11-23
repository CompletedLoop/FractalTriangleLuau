-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Clone = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "altmake", "out").Clone
local Workspace = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Workspace
local random = function()
	return Random.new():NextNumber()
end
local FractalContainer = Workspace["Serpinskis Triangle"]
local ReferencePoint = FractalContainer.point
local FRACTAL_ORIGIN = Vector3.new(0, .1, 20)
local Point = function(position)
	return Clone(ReferencePoint, {
		Position = position,
	})
end
local SerpinskisTriangle
do
	SerpinskisTriangle = setmetatable({}, {
		__tostring = function()
			return "SerpinskisTriangle"
		end,
	})
	SerpinskisTriangle.__index = SerpinskisTriangle
	function SerpinskisTriangle.new(...)
		local self = setmetatable({}, SerpinskisTriangle)
		return self:constructor(...) or self
	end
	function SerpinskisTriangle:constructor()
	end
	function SerpinskisTriangle:run(count)
		do
			local i = 0
			local _shouldIncrement = false
			while true do
				if _shouldIncrement then
					i += 1
				else
					_shouldIncrement = true
				end
				if not (i <= count) then
					break
				end
				local random_point = SerpinskisTriangle:RandomPointInTriangle()
				print(`{random_point} -> `)
			end
		end
	end
	function SerpinskisTriangle:RandomPointInTriangle()
		local uv = Vector2.new(random(), random())
		if uv.X + uv.Y > 2 then
			local _one = Vector2.one
			local _uv = uv
			uv = _one - _uv
		end
		return uv
	end
	function SerpinskisTriangle:DrawPoint(position)
	end
	function SerpinskisTriangle:TransformRanomPoint()
	end
end
ReferencePoint.Position = Vector3.new(0, math.huge, 0)
SerpinskisTriangle.new():run(20)
