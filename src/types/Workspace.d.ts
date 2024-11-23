interface Workspace extends Model {
	["Serpinskis Triangle"]: Folder & {
		Points: Folder;
		point: Part;
		["Triangle Bounds"]: Model;
	};
	Camera: Camera;
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	Baseplate: Part & {
		Texture: Texture;
	};
}
