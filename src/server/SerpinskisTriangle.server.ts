import { Clone, Make } from "@rbxts/altmake"
import { Workspace } from "@rbxts/services"

const random = () => new Random().NextNumber()

const FractalContainer = Workspace["Serpinskis Triangle"]
const ReferencePoint = FractalContainer.point

const FRACTAL_ORIGIN = new Vector3(0, .1, 20)

const Point = (position: Vector3) => Clone(ReferencePoint , {
    Parent: Workspace["Serpinskis Triangle"].Points,
	Position: position,
})

class SerpinskisTriangle {
	constructor() {}

	/**
	 * @param count Detail of Fractal
	 */
	public run(count: number) {
		for (let i = 0; i <= count; i++) {
			const random_point = SerpinskisTriangle.RandomPointInTriangle()
            const transformed_point = this.TransformPointToWorld(random_point)
            Point(transformed_point)

			print(`${random_point} -> ${transformed_point}`)

            // delay
            if (i % 8 === 0)
                task.wait()
		}
	}

	/**
	 * @returns Random Uniform Point within unit Equalateral Triangle
	 */
	public static RandomPointInTriangle(): Vector2 {
		let uv = new Vector2(random(), random())

		if (uv.X + uv.Y > 2)
			uv = Vector2.one.sub(uv)
		
        return new Vector2(1, 0) // vertexA
                    .add( new Vector2(-1, 0) .sub ( new Vector2(1, 0) ) // + (vertexB - vertexA)
                        .mul(uv.X)) // * u1

                    .add( new Vector2(0, 2) .sub (new Vector2(1, 0) ) // + (vertexC - vertexA)
                        .mul(uv.Y)) // * u2
	}

	/**
	 * Will Transform a point from fractal space to world space
	 */
	private TransformPointToWorld(point: Vector2): Vector3 {
        const scaled_point = point.mul(30)
        return new Vector3(scaled_point.X, scaled_point.Y, FRACTAL_ORIGIN.Z)  
	}

	/**
	 * Takes in a vec2 and creates a part to represent it on the triangle
	 * @param position Position of Point in Fractal Space
	 */
	private DrawPoint(position: Vector2) {

	}
}

ReferencePoint.Position = new Vector3(0, math.huge, 0)
new SerpinskisTriangle().run(1000)
