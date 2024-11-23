import { Clone, Make } from "@rbxts/altmake"
import { Workspace } from "@rbxts/services"

const random = () => new Random().NextNumber()

const FractalContainer = Workspace["Serpinskis Triangle"]
const ReferencePoint = FractalContainer.point

const FRACTAL_ORIGIN = new Vector3(0, .1, 20)

const Point = (position: Vector3) => Clone(ReferencePoint , {
	Position: position,
})

class SerpinskisTriangle {
	constructor() {}

	/**
	 * 
	 * @param count Detail of Fractal
	 */
	public run(count: number) {
		for(let i = 0; i<=count; i++) {
			const random_point = SerpinskisTriangle.RandomPointInTriangle()



			print(`${random_point} -> `)
		}
	}

	/**
	 * @returns Random Uniform Point within unit Equalateral Triangle
	 */
	public static RandomPointInTriangle(): Vector2 {
		let uv = new Vector2(random(), random())

		if (uv.X + uv.Y > 2)
			uv = Vector2.one.sub(uv)
		
		return uv
	}

	/**
	 * Takes in a Point within Fractal Space and creates a part to represent it
	 * @param position Position of Point in Fractal Space
	 */
	private DrawPoint(position: Vector2) {

	}

	/**
	 * Will Transform a 
	 */
	private TransformRanomPoint() {

	}
}

ReferencePoint.Position = new Vector3(0, math.huge, 0)
new SerpinskisTriangle().run(20)