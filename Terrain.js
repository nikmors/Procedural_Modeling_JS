
function Start () {
	var txtr : GUITexture;
	terrainData = new TerrainData();
    var size:int  = 513;
    terrainData.heightmapResolution = size;
    terrainData.size = new Vector3(2000, 600, 2000);

    terrainData.heightmapResolution = 512;
    terrainData.baseMapResolution = 1024;
    terrainData.SetDetailResolution(1024, 16);

    AssetDatabase.CreateAsset(terrainData, "Assets/Corfu_Terrain.asset");
	txtr.texture  = "Resources/Central_Area_Corfu_Town";
}