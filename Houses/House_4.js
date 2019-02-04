//create objects
var oBuilding4 : GameObject;
//var oColumn = GameObject;//.CreatePrimitive(PrimitiveType.Cube);
var oWindow : GameObject;
var oCube : GameObject;
var tmpobj: GameObject;

//-------------------start public variables--------------------------------------------------------
public var aCollectionObj_4 = new Array(); // an Array - a collection- for the  objects of House_4

public var i: int = 0;
public var j: int = 0;
public var c: int = 0;

//Random ranges between X, Y coordinates
public var RandX:float; 
public var RandZ:float; 
//-------------------end public variables--------------------------------------------------------


//MAIN function
public function mainDO() {

	//RandX = Random.Range(10,247);
	//RandZ = Random.Range(10,247);

	MainBuilding(RandX,RandZ);
	FirstFloor(RandX,RandZ);
	SecondFloor(RandX, RandZ);
	Eaves(RandX, RandZ);
	Windows(RandX, RandZ);
	Columns(RandX, RandZ);
	Door(RandX, RandZ);
	Roof(RandX, RandZ);
	DoArch(RandX, RandZ);
}//end Start ()


//-----------Main Building-ground floor---------------------------
public function MainBuilding(RandX,RandZ){
	oBuilding4 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	oBuilding4.renderer.material.color = Color(Random.Range(1,0.9), Random.Range(0.980,0.880), Random.Range(0.804,0.704), 0);
	oBuilding4.transform.position = Vector3(this.RandX, 1.722107, this.RandZ);
	oBuilding4.name = "House_4";
	oBuilding4.transform.localScale.x = 7;
	oBuilding4.transform.localScale.y = 3.308559;
	oBuilding4.transform.localScale.z = 3.5;
	aCollectionObj_4.Add(oBuilding4);
}//end function MainBuilding(Rand_X,Rand_Z)


//------------------------------------------START FIRST FLOOR-------------------------------------------------------------
public function FirstFloor(RandX,RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy (oCube);
	oCube.renderer.material.color = Color(1, 0.980, 0.804, 0);
	//First floor
	var oFrst_Flr = Instantiate(oCube, Vector3(this.RandX, 4.527526, this.RandZ + 0.9), Quaternion.identity);
	oFrst_Flr.transform.parent = oBuilding4.transform; //parenting
	oFrst_Flr.name = "First Floor";
	oFrst_Flr.transform.localScale.x = 0.9954391;
	oFrst_Flr.transform.localScale.y = 0.7123187;
	oFrst_Flr.transform.localScale.z = 1.536353;
	aCollectionObj_4.Add(oFrst_Flr);
}//end function FirstFloor(RandX,RandZ)
//------------------------------------------END FIRST FLOOR-------------------------------------------------------------


//------------------------------------------START SECOND FLOOR-------------------------------------------------------------
public function SecondFloor(RandX, RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy (oCube);
	oCube.renderer.material.color = Color(1, 0.980, 0.804, 0);
	//Second Floor
	var oScnd_Floor = Instantiate(oCube, Vector3(this.RandX, 7.2189827, this.RandZ + 0.9), Quaternion.identity);
	oScnd_Floor.transform.parent = oBuilding4.transform; //parenting
	oScnd_Floor.name = "Second Floor";
	oScnd_Floor.transform.localScale.x = 0.9954391;
	oScnd_Floor.transform.localScale.y = 0.9377826;
	oScnd_Floor.transform.localScale.z = 1.536353;
	aCollectionObj_4.Add(oScnd_Floor);
}//end function SecondFloor(RandX,RandZ)
//------------------------------------------END SECOND FLOOR-------------------------------------------------------------



//------------------------------------------START EAVES-------------------------------------------------------------
public function Eaves(RandX, RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy (oCube);
	oCube.renderer.material.color = Color.white;
	var nPOSY_eaves:float = 3.322107;
	for(i=0; i<=2; i++){
		if(oCube){
			var oEaves_flr = Instantiate(oCube, Vector3(this.RandX, nPOSY_eaves, this.RandZ + 0.9), Quaternion.identity);
			oEaves_flr.transform.parent = oBuilding4.transform; //parenting
			oEaves_flr.name = "eaves " + (++c);
			oEaves_flr.transform.localScale.x = 1.020326;
			oEaves_flr.transform.localScale.y = 0.06;
			oEaves_flr.transform.localScale.z = 1.593966;
			aCollectionObj_4.Add(oEaves_flr);
			if(i == 1)
				nPOSY_eaves += 3.2030433;
			else
				nPOSY_eaves += 2.368318;
		}//end if
	}//end for
	c = 0;
}//end function Eaves(RandX, RandZ)
//------------------------------------------END EAVES-------------------------------------------------------------



//------------------------------------START WINDOWS-------------------------------------------------------------
public function Windows(RandX, RandZ){
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy(oWindow);
	
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("window_corfu1"); //import texture for windows
	
	var nWind_X:float = this.RandX + 2.82102;
	var nWind_Y:float = 5.0751646;
	var nWind_Z:float = this.RandZ + 3.6062495;
//:::::::::::::::::::::::::::::::::::::::::start facade:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//first floor windows 
	for(i=0; i<=3; i++){
		if(oWindow){
			var oWindow_frstFlr = Instantiate(oWindow, Vector3(nWind_X, nWind_Y, nWind_Z), Quaternion.identity);
			oWindow_frstFlr.transform.parent = oBuilding4.transform; //parenting
			oWindow_frstFlr.name = "first floor window " + (++c);
			oWindow_frstFlr.transform.localScale.x = 0.1135587;
			oWindow_frstFlr.transform.localScale.y = 0.2774929;
			oWindow_frstFlr.transform.localScale.z = 0.0163088;
			aCollectionObj_4.Add(oWindow_frstFlr);
			nWind_X -= 1.9;
		}//end if
	}//end for
	c = 0;
	
	nWind_X = this.RandX + 2.82102;

//second floor windows 
	for(i=0; i<=3; i++){
		if(oWindow){
			var oWindow_scndFlr = Instantiate(oWindow, Vector3(nWind_X, nWind_Y + 2.6442788, nWind_Z), Quaternion.identity);
			oWindow_scndFlr.transform.parent = oBuilding4.transform; //parenting
			oWindow_scndFlr.name = "second floor window " + (++c);
			oWindow_scndFlr.transform.localScale.x = 0.1096849;
			oWindow_scndFlr.transform.localScale.y = 0.4051766;
			oWindow_scndFlr.transform.localScale.z = 0.0163088;
			aCollectionObj_4.Add(oWindow_scndFlr);
			nWind_X -= 1.9;
		}//end if
	}//end for
	c = 0;
//:::::::::::::::::::::::::::::::::::::::::end facade:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::start left side windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	var nWindPOSX_side:float = this.RandX + 3.5014659;
	var nWindPOSZ_side:float = nWind_Z - 1.3;
//first floor left side windows 
	for(i=0; i<=1; i++){
		if(oWindow){
			var oWindow_frstFlr_lft = Instantiate(oWindow, Vector3(nWindPOSX_side, nWind_Y, nWindPOSZ_side), Quaternion.identity);
			oWindow_frstFlr_lft.transform.parent = oBuilding4.transform; //parenting
			oWindow_frstFlr_lft.name = "first floor left side window " + (++c);
			oWindow_frstFlr_lft.transform.localScale.x = -0.2409395;
			oWindow_frstFlr_lft.transform.localScale.y = 0.2774929;
			oWindow_frstFlr_lft.transform.localScale.z = 0.0163088; 
			oWindow_frstFlr_lft.transform.eulerAngles.y = 90;
			aCollectionObj_4.Add(oWindow_frstFlr_lft);
			nWindPOSZ_side -= 3.0;
		}//end if
	}//end for
	c = 0;
	
	nWindPOSX_side = this.RandX + 3.5014659;
	nWind_Z = this.RandZ + 3.5662495;
	nWindPOSZ_side = nWind_Z - 1.3;
//second floor left side windows 
	for(i=0; i<=1; i++){
		if(oWindow){
			var oWindow_scndFlr_lft = Instantiate(oWindow, Vector3(nWindPOSX_side, nWind_Y + 2.6442788, nWindPOSZ_side), Quaternion.identity);
			oWindow_scndFlr_lft.transform.parent = oBuilding4.transform; //parenting
			oWindow_scndFlr_lft.name = "second floor left side window " + (++c);
			oWindow_scndFlr_lft.transform.localScale.x = -0.2517607;
			oWindow_scndFlr_lft.transform.localScale.y = 0.4051766;
			oWindow_scndFlr_lft.transform.localScale.z = 0.0163088; 
			oWindow_scndFlr_lft.transform.eulerAngles.y = 90;
			aCollectionObj_4.Add(oWindow_scndFlr_lft);
			nWindPOSZ_side -= 3.0;
		}//end if
	}//end for
	c = 0;
//:::::::::::::::::::::::::::::::::::::::::end left side windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::start right side windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	nWindPOSX_side = this.RandX - 3.5014659;
	nWind_Z = this.RandZ + 3.5662495;
	nWindPOSZ_side = nWind_Z - 1.3;
//first floor right side windows 
	for(i=0; i<=1; i++){
		if(oWindow){
			var oWindow_frstFlr_rght = Instantiate(oWindow, Vector3(nWindPOSX_side, nWind_Y, nWindPOSZ_side), Quaternion.identity);
			oWindow_frstFlr_rght.transform.parent = oBuilding4.transform; //parenting
			oWindow_frstFlr_rght.name = "first floor right side window " + (++c);
			oWindow_frstFlr_rght.transform.localScale.x = -0.2409395;
			oWindow_frstFlr_rght.transform.localScale.y = 0.2774929;
			oWindow_frstFlr_rght.transform.localScale.z = 0.0163088; 
			oWindow_frstFlr_rght.transform.eulerAngles.y = 90;
			aCollectionObj_4.Add(oWindow_frstFlr_rght);
			nWindPOSZ_side -= 3.0;
		}//end if
	}//end for
	c = 0;
	
	nWindPOSX_side = this.RandX - 3.5014659;
	nWind_Z = this.RandZ + 3.5662495;
	nWindPOSZ_side = nWind_Z - 1.3;
//second floor right side windows 
	for(i=0; i<=1; i++){
		if(oWindow){
			var oWindow_scndFlr_rght = Instantiate(oWindow, Vector3(nWindPOSX_side, nWind_Y + 2.6442788, nWindPOSZ_side), Quaternion.identity);
			oWindow_scndFlr_rght.transform.parent = oBuilding4.transform; //parenting
			oWindow_scndFlr_rght.name = "second floor right side window " + (++c);
			oWindow_scndFlr_rght.transform.localScale.x = -0.2517607;
			oWindow_scndFlr_rght.transform.localScale.y = 0.4051766;
			oWindow_scndFlr_rght.transform.localScale.z = 0.0163088; 
			oWindow_scndFlr_rght.transform.eulerAngles.y = 90;
			aCollectionObj_4.Add(oWindow_scndFlr_rght);
			nWindPOSZ_side -= 3.0;
		}//end if
	}//end for
	c = 0;
//:::::::::::::::::::::::::::::::::::::::::end right side windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::::::::::::::::::::::::::::start ground floor windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
nWindPOSX_side = this.RandX + 2.40;
for(i=0; i<=1; i++){
	if(oWindow){
		var oWind_grnd = Instantiate(oWindow, Vector3(nWindPOSX_side, 1.423612, this.RandZ + 1.7776329), Quaternion.identity);
		oWind_grnd.transform.parent = oBuilding4.transform; //parenting
		oWind_grnd.name = "ground floor window " + (++c);
		oWind_grnd.transform.localScale.x = 0.1135587;
		oWind_grnd.transform.localScale.y = 0.4051766;
		oWind_grnd.transform.localScale.z = 0.0163088; 
		aCollectionObj_4.Add(oWind_grnd);
		nWindPOSX_side -= 3.10;
	}//end if
}//end for
c = 0;
//::::::::::::::::::::::::::::::::::::::::::::::::::end ground floor windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Windows(RandX, RandZ)
//--------------------------------------------END WINDOWS-----------------------------------------------------


//------------------------------------------START COLUMNS--------------------------------------------------------
public function Columns(RandX, RandZ){
	oColumn = GameObject.CreatePrimitive(PrimitiveType.Cube);
	oColumn.renderer.material.color = Color.white;
	
	oColumn.transform.position = Vector3(this.RandX -3.2, 1.302107, this.RandZ + 3.3772203);
	oColumn.transform.parent = oBuilding4.transform; //parenting
	oColumn.name = "Column 0";
	oColumn.transform.localScale.x = 0.07017206;
	oColumn.transform.localScale.y = 0.6454034;
	oColumn.transform.localScale.z = 0.1285665;
	aCollectionObj_4.Add(oColumn);
	
	oColumnCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	oColumnCube.transform.position = Vector3(this.RandX -3.2, 0.2373266, this.RandZ + 3.3772203);
	oColumnCube.transform.parent = oColumn.transform; //parenting
	oColumnCube.name = "Column base";
	oColumnCube.transform.localScale.x = 1.43565;
	oColumnCube.transform.localScale.y = 0.1184824;
	oColumnCube.transform.localScale.z = 1.61189;
	aCollectionObj_4.Add(oColumnCube);


	var oColumnCube_Up = Instantiate(oColumnCube, Vector3(this.RandX -3.2, 2.3029889, this.RandZ + 3.3772203), Quaternion.identity);
	oColumnCube_Up.transform.parent = oColumn.transform; //parenting
	oColumnCube_Up.name = "Column upper part";
	oColumnCube_Up.transform.localScale.x = 1.43565;
	oColumnCube_Up.transform.localScale.y = 0.1501914;
	oColumnCube_Up.transform.localScale.z = 1.61189;
	aCollectionObj_4.Add(oColumnCube_Up);
	
	var nextPOSX_column:float = this.RandX - 1.62;
	for(i=0; i<=3; i++){
		if(oColumn){
			var cloneColumn_ = Instantiate(oColumn, Vector3(nextPOSX_column, 1.302107, this.RandZ + 3.3772203), Quaternion.identity);
			cloneColumn_.transform.parent = oBuilding4.transform; //parenting
			cloneColumn_.name = "Column " + (++c);
			cloneColumn_.transform.localScale.x = 0.07017206;
			cloneColumn_.transform.localScale.y = 0.6454034;
			cloneColumn_.transform.localScale.z = 0.1285665;
			aCollectionObj_4.Add(cloneColumn_);	
			nextPOSX_column += 1.58;
		}//end if
	}//end for
	c = 0;
}//end function Columns(RandX, RandZ)
//------------------------------------------END COLUMNS--------------------------------------------------------


//-------------------------------START DOOR-----------------------------------------------------------------
public function Door(RandX, RandZ){

	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oWindow);
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("door_corfu2"); //import texture for door
	
	var nPosX_door:float = this.RandX + 0.80;
	for(i=0; i<=1; i++){
		if(oWindow){
			var oDoor = Instantiate(oWindow, Vector3(nPosX_door, 1.123612, this.RandZ + 1.7776329), Quaternion.identity);
			oDoor.name = "door " + (++c);
			oDoor.transform.parent = oBuilding4.transform;	
			oDoor.transform.localScale.x = 0.1341711;
			oDoor.transform.localScale.y = 0.5980287;
			oDoor.transform.localScale.z = 0.019;
			aCollectionObj_4.Add(oDoor);
			nPosX_door -= 3.20;
		}//end if
	}//end for
	c = 0;
}//end function Door(RandX, RandZ)
//-------------------------------END DOOR-----------------------------------------------------------------



//---------------------------------------START ROOF------------------------------------------------------
public function Roof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Roof";
	tmpobj.transform.parent = oBuilding4.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 3.6, 10, this.RandZ + 1); //P1 
	verts[1] = new Vector3(this.RandX - 3.6, 9, this.RandZ - 2); //P2
	verts[2] = new Vector3(this.RandX - 3.6, 9, this.RandZ + 4); //P3
	
	verts[3] = new Vector3(this.RandX + 3.6, 10, this.RandZ + 1); //P4
	verts[4] = new Vector3(this.RandX + 3.6, 9, this.RandZ + 4); //P5
	verts[5] = new Vector3(this.RandX + 3.6, 9, this.RandZ - 2); //P6


	uv[0] = new Vector2(0, 0.5);
	uv[1] = new Vector2(1, 1);
	uv[2] = new Vector2(1, 0);
	
	uv[3] = new Vector2(1, 0.5);
	uv[4] = new Vector2(0, 0);
	uv[5] = new Vector2(0, 1);
	
	
	//triangles 
	tri[0] = 0; //refer to vertices: verts[0]
	tri[1] = 1; //refer to vertices: verts[1]
	tri[2] = 2; //refer to vertices: verts[2]
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 4;
	
	tri[6] = 3;
	tri[7] = 0;
	tri[8] = 4;
	
	tri[9] = 3;
	tri[10] = 4;
	tri[11] = 5;
	
	tri[12] = 3;
	tri[13] = 5;
	tri[14] = 0;
	
	tri[15] = 0;
	tri[16] = 5;
	tri[17] = 1;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	mf.mesh = mesh;
	tmpobj.renderer.material.mainTexture = Resources.Load("tiled_roof_red_grey");
}//end function Roof(RandX, RandZ)
//----------------------------------------END ROOF--------------------------------------------------------


//-------------------------------------START ARCH-----------------------------------------------------------------
private function Arch(RandX, RandZ, tmpobj) {
	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch";
	tmpobj.renderer.material.color = Color(1, 0.980, 0.804, 0);
	tmpobj.transform.parent = oBuilding4.transform;
	
	var verts: Vector3[] = new Vector3[14];
	var uv: Vector2[] = new Vector2[14];
	var normals: Vector3[] = new Vector3[14];
	var tri: int[] = new int[72]; //3 vertices * 12 triangles = 36 * 2 (duplicate triangles for the back face) =72
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 1.9, 2.5, this.RandZ + 3.777); //P1
	verts[1] = new Vector3(this.RandX - 1.9, 2, this.RandZ + 3.777); //P2
	verts[2] = new Vector3(this.RandX - 1.35, 2, this.RandZ + 3.777); //P3
	verts[3] = new Vector3(this.RandX - 1.35, 3.5, this.RandZ + 3.777); //P4
	verts[4] = new Vector3(this.RandX - 3.5, 3.5, this.RandZ + 3.777); //P5
	verts[5] = new Vector3(this.RandX - 3.5, 2, this.RandZ + 3.777); //P6
	verts[6] = new Vector3(this.RandX - 2.95, 2, this.RandZ + 3.777); //P7
	verts[7] = new Vector3(this.RandX - 2.95, 2.5, this.RandZ + 3.777); //P8
	verts[8] = new Vector3(this.RandX - 2.9, 2.8, this.RandZ + 3.777); //P9
	verts[9] = new Vector3(this.RandX - 2.75, 3, this.RandZ + 3.777); //P10
	verts[10] = new Vector3(this.RandX - 2.55, 3.1, this.RandZ + 3.777); //P11
	verts[11] = new Vector3(this.RandX - 2.3,  3.1, this.RandZ + 3.777); //P12
	verts[12] = new Vector3(this.RandX - 2.1, 3, this.RandZ + 3.777); //P13
	verts[13] = new Vector3(this.RandX - 1.95, 2.8, this.RandZ + 3.777); //P14
	
	//normals
	normals[0] = new Vector3(0, 0, 1);
	normals[1] = new Vector3(0, 0, 1);
	normals[2] = new Vector3(0, 0, 1);
	normals[3] = new Vector3(0, 0, 1);
	normals[4] = new Vector3(0, 0, 1);
	normals[5] = new Vector3(0, 0, 1);
	normals[6] = new Vector3(0, 0, 1);
	normals[7] = new Vector3(0, 0, 1);
	normals[8] = new Vector3(0, 0, 1);
	normals[9] = new Vector3(0, 0, 1);
	normals[10] = new Vector3(0, 0, 1);
	normals[11] = new Vector3(0, 0, 1);
	normals[12] = new Vector3(0, 0, 1);
	normals[13] = new Vector3(0, 0, 1);
	
	//uv mapping (textures)
	uv[0] = new Vector2(0, 0.3);
	uv[1] = new Vector2(0.2, 0);
	uv[2] = new Vector2(0, 0); 
	uv[3] = new Vector2(0, 1);
	uv[4] = new Vector2(1, 1);
	uv[5] = new Vector2(1, 0);
	uv[6] = new Vector2(0.8, 0);
	uv[7] = new Vector2(0.8, 0.3);
	uv[8] = new Vector2(0.75, 0.5);
	uv[9] = new Vector2(0.65, 0.7);
	uv[10] = new Vector2(0.6, 0.9);
	uv[11] = new Vector2(0.4, 0.9);
	uv[12] = new Vector2(0.45, 0.7);
	uv[13] = new Vector2(0.35, 0.5); 
	
	
	//triangles 
	tri[0] = 0; //refer to vertices: verts[0]
	tri[1] = 1; //refer to vertices: verts[1]
	tri[2] = 2; //refer to vertices: verts[2]
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 0;
	tri[7] = 3;
	tri[8] = 13;
	
	tri[9] = 13;
	tri[10] = 3;
	tri[11] = 12;
	
	tri[12] = 12;
	tri[13] = 3;
	tri[14] = 11;
	
	tri[15] = 11;
	tri[16] = 3;
	tri[17] = 4;
	
	tri[18] = 11;
	tri[19] = 4;
	tri[20] = 10;
	
	tri[21] = 10;
	tri[22] = 4;
	tri[23] = 9;
	
	tri[24] = 9;
	tri[25] = 4;
	tri[26] = 8;
	
	tri[27] = 8;
	tri[28] = 4;
	tri[29] = 7;
	
	tri[30] = 7;
	tri[31] = 4;
	tri[32] = 5;
	
	tri[33] = 7;
	tri[34] = 5;
	tri[35] = 6;
	
	tri[36] = 0; 
	tri[37] = 2; 
	tri[38] = 1; 
       
	tri[39] = 0; 
	tri[40] = 3; 
	tri[41] = 2;
	
	tri[42] = 13;
	tri[43] = 3;
	tri[44] = 0;
	
	tri[45] = 12;
	tri[46] = 3;
	tri[47] = 13;
	
	tri[48] = 11;
	tri[49] = 3;
	tri[50] = 12;
	
	tri[51] = 10;
	tri[52] = 3;
	tri[53] = 11;
	
	tri[54] = 10; 
	tri[55] = 4;
	tri[56] = 3;
	
	tri[57] = 9; 
	tri[58] = 4;
	tri[59] = 10;
	
	tri[60] = 8; 
	tri[61] = 4;
	tri[62] = 9;
	
	tri[63] = 7; 
	tri[64] = 4;
	tri[65] = 8;
	
	tri[66] = 7; 
	tri[67] = 5;
	tri[68] = 4;
	
	tri[69] = 7;
	tri[70] = 6;
	tri[71] = 5;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Arch";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("white_brick_wall");
	mf.mesh = mesh;
}//end function Arch(Rand_X, Rand_Z)


private function ArchVertical(RandX, RandZ, tmpobj){

	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch vert";
	tmpobj.renderer.material.color = Color(1, 0.980, 0.804, 0);
	tmpobj.transform.parent = oBuilding4.transform;
	
	var verts: Vector3[] = new Vector3[14];
	var uv: Vector2[] = new Vector2[14];
	var normals: Vector3[] = new Vector3[14];
	var tri: int[] = new int[72]; //3 vertices * 12 triangles = 36 * 2 (duplicate triangles for the back face) =72
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX , 2.5, this.RandZ - 1.9); //P1
	verts[1] = new Vector3(this.RandX , 2, this.RandZ - 1.9); //P2
	verts[2] = new Vector3(this.RandX , 2, this.RandZ - 1.35); //P3
	verts[3] = new Vector3(this.RandX , 3.5, this.RandZ - 1.35); //P4
	verts[4] = new Vector3(this.RandX , 3.5, this.RandZ - 3.5); //P5
	verts[5] = new Vector3(this.RandX , 2, this.RandZ - 3.5); //P6
	verts[6] = new Vector3(this.RandX , 2, this.RandZ - 2.95); //P7
	verts[7] = new Vector3(this.RandX , 2.5, this.RandZ - 2.95); //P8
	verts[8] = new Vector3(this.RandX , 2.8, this.RandZ - 2.9); //P9
	verts[9] = new Vector3(this.RandX , 3, this.RandZ - 2.75); //P10
	verts[10] = new Vector3(this.RandX , 3.1, this.RandZ - 2.55); //P11
	verts[11] = new Vector3(this.RandX ,  3.1, this.RandZ - 2.3); //P12
	verts[12] = new Vector3(this.RandX , 3, this.RandZ - 2.1); //P13
	verts[13] = new Vector3(this.RandX , 2.8, this.RandZ - 1.95); //P14
	
	//normals
	normals[0] = new Vector3(0, 0, 1);
	normals[1] = new Vector3(0, 0, 1);
	normals[2] = new Vector3(0, 0, 1);
	normals[3] = new Vector3(0, 0, 1);
	normals[4] = new Vector3(0, 0, 1);
	normals[5] = new Vector3(0, 0, 1);
	normals[6] = new Vector3(0, 0, 1);
	normals[7] = new Vector3(0, 0, 1);
	normals[8] = new Vector3(0, 0, 1);
	normals[9] = new Vector3(0, 0, 1);
	normals[10] = new Vector3(0, 0, 1);
	normals[11] = new Vector3(0, 0, 1);
	normals[12] = new Vector3(0, 0, 1);
	normals[13] = new Vector3(0, 0, 1);
	
	//uv mapping (textures)
	uv[0] = new Vector2(0, 0.3);
	uv[1] = new Vector2(0.2, 0);
	uv[2] = new Vector2(0, 0); 
	uv[3] = new Vector2(0, 1);
	uv[4] = new Vector2(1, 1);
	uv[5] = new Vector2(1, 0);
	uv[6] = new Vector2(0.8, 0);
	uv[7] = new Vector2(0.8, 0.3);
	uv[8] = new Vector2(0.75, 0.5);
	uv[9] = new Vector2(0.65, 0.7);
	uv[10] = new Vector2(0.6, 0.9);
	uv[11] = new Vector2(0.4, 0.9);
	uv[12] = new Vector2(0.45, 0.7);
	uv[13] = new Vector2(0.35, 0.5); 
	
	
	//triangles 
	tri[0] = 0; //refer to vertices: verts[0]
	tri[1] = 1; //refer to vertices: verts[1]
	tri[2] = 2; //refer to vertices: verts[2]
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 0; 
	tri[7] = 3;
	tri[8] = 13;
	
	tri[9] = 13; 
	tri[10] = 3;
	tri[11] = 12;
	
	tri[12] = 12;
	tri[13] = 3;
	tri[14] = 11; 
	
	tri[15] = 11;
	tri[16] = 3;
	tri[17] = 4; 
	
	tri[18] = 11;
	tri[19] = 4;
	tri[20] = 10;
	
	tri[21] = 10;
	tri[22] = 4;
	tri[23] = 9;
	
	tri[24] = 9;
	tri[25] = 4;
	tri[26] = 8;
	
	tri[27] = 8;
	tri[28] = 4;
	tri[29] = 7;
	
	tri[30] = 7;
	tri[31] = 4;
	tri[32] = 5;
	
	tri[33] = 7;
	tri[34] = 5;
	tri[35] = 6;
	
	tri[36] = 0; 
	tri[37] = 2; 
	tri[38] = 1; 
       
	tri[39] = 0; 
	tri[40] = 3; 
	tri[41] = 2;
	
	tri[42] = 13;
	tri[43] = 3;
	tri[44] = 0;
	
	tri[45] = 12;
	tri[46] = 3;
	tri[47] = 13;
	
	tri[48] = 11;
	tri[49] = 3;
	tri[50] = 12;
	
	tri[51] = 10;
	tri[52] = 3;
	tri[53] = 11;
	
	tri[54] = 10; 
	tri[55] = 4;
	tri[56] = 3;
	
	tri[57] = 9; 
	tri[58] = 4;
	tri[59] = 10;
	
	tri[60] = 8; 
	tri[61] = 4;
	tri[62] = 9;
	
	tri[63] = 7; 
	tri[64] = 4;
	tri[65] = 8;
	
	tri[66] = 7; 
	tri[67] = 5;
	tri[68] = 4;
	
	tri[69] = 7;
	tri[70] = 6;
	tri[71] = 5;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Arch vert";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("white_brick_wall");
	mf.mesh = mesh;

}//end function ArchVertical(Rand_X, Rand_Z, tmpobj)

public function DoArch(RandX, RandZ){
	tmpobj = new GameObject();
	Destroy(tmpobj);
	
	var nPOSZ:float = this.RandZ + 0.777;
	
	for(i=0; i<=3; i++){
		if(tmpobj){
			Arch(this.RandX, nPOSZ, tmpobj);
			this.RandX += 1.6;
		}//end if
	}//end for
	
	this.RandX -= 9.96;
	this.RandZ +=5.15;
	
	for(i=0; i<=1; i++){
		if(tmpobj){
			ArchVertical(this.RandX, this.RandZ, tmpobj);
			this.RandX += 7.1;
		}//end if
	}//end for
}//end function DoArch(Rand_X, Rand_Z)
//---------------------------------END ARCH------------------------------------------------------------------