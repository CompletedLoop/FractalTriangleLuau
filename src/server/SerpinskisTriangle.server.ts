import { Clone, Make } from "@rbxts/altmake"
import { Workspace } from "@rbxts/services"

const random = (seed?: number) => new Random(seed as never).NextNumber()

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
			const random_point = SerpinskisTriangle.getRandomPointInUnitEquilateralTriangle()
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

                    .add( new Vector2(0, 1) .sub ( new Vector2(1, 0) ) // + (vertexC - vertexA)
                        .mul(uv.Y)) // * u2
	}
    
    public static getRandomPointInUnitEquilateralTriangle(): Vector2 {
        // Vertices of the unit equilateral triangle
        const v1 = new Vector2(.5, 0);
        const v2 = new Vector2(-.5, 0);
        const v3 = new Vector2(0, 1) // math.sqrt(3) / 2

        // Generate two random numbers
        const r1 = random();
        const r2 = random();

        // Compute barycentric coordinates
        const a = math.sqrt(r1);
        const b = (1 - a) * r2;
        const c = 1 - a - b;

        // Compute the random point
        const x = a * v1.X + b * v2.X + c * v3.X;
        const y = a * v1.Y + b * v2.Y + c * v3.Y;

        return new Vector2(x, y);
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
