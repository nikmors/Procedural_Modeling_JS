//--Main Building Objects-----------------------------------------------------------
var oBuilding1 : GameObject;
var oWindow : GameObject;
var oCube : GameObject;
var oRails: GameObject;
//-------------------start public variables--------------------------------------------------------
public var aCollectionObj_1 = new Array(); // an Array - a collection- for the  objects of House_1
public var i: int = 0;
public var j: int = 0;
public var c: int = 0; //counter

public var wind_X : float;
public var wind_Y : float;
public var wind_Z : float;

public var RandX: float; 
public var RandZ: float; 
//-------------------end public variables--------------------------------------------------------


//MAIN function 
public function mainDO() {

	//RandX = Random.Range(10,247);
	//RandZ = Random.Range(10,247);
	
	MainBuilding(RandX, RandZ);
	Windows(RandX, RandZ);
	Door(RandX, RandZ);
	Eaves(RandX, RandZ);
	Balcony(RandX, RandZ);
	Roof(RandX, RandZ);
}


//----Start oBuilding1-------------------------------------------
public function MainBuilding(RandX, RandZ){	
	//create object oBuilding1
	oBuilding1 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//name the object oBuilding1
	oBuilding1.name = "House_1";
	//set color(r,g,b,a) to the object oBuilding1
	oBuilding1.renderer.material.color = Color(Random.Range(0.98039, 0.88039), Random.Range(0.819607,0.719607), Random.Range(0.843137,0.743137), 0);  //Color(1, 0.714, 0.757, 0);  
	//Positioning the oBuilding1 object
	oBuilding1.transform.position = Vector3(this.RandX, 4.153612, this.RandZ);
	//Scaling the oBuilding1 object
	oBuilding1.transform.localScale.x = 5.622439;
	oBuilding1.transform.localScale.y = 8.275616;
	oBuilding1.transform.localScale.z = 4.411408;
	aCollectionObj_1.Add(oBuilding1);
}//end function MainBuilding(RandX, RandZ)
//----End oBuilding1-------------------------------------------


//---------------------------START WINDOWS-------------------------------------------------------------------
public function Windows(RandX, RandZ){

	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("window_corfu3"); //import texture for windows
	
	wind_X = this.RandX + 1.7556326;
	wind_Y = 6.8821215;
	wind_Z = this.RandZ + 2.2319577;
	
	//Positioning the oWindow object
	oWindow.transform.position = Vector3(wind_X,wind_Y,wind_Z);
	oWindow.name = "topWindow 0";
	oWindow.transform.parent = oBuilding1.transform;	
	//Scaling the oWindow object
	oWindow.transform.localScale.x = 0.1237501;
	oWindow.transform.localScale.y = 0.1284585;
	oWindow.transform.localScale.z = 0.019;
	
//:::::::::::::::::::::::::::::::::;Start Top Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	for(i=0; i<=2; i++){
		if(oWindow != null) {//if the object oWindow exists 
			var cloneTopWindows = Instantiate(oWindow, Vector3(wind_X - 1.2, wind_Y, wind_Z), Quaternion.identity); //make 3 more clones of the oWindow object and place them near to it
			cloneTopWindows.transform.parent = oBuilding1.transform; //parenting
			cloneTopWindows.name = "topWindow " + (++c);
			cloneTopWindows.transform.localScale.x = 0.1237501;
			cloneTopWindows.transform.localScale.y = 0.1284585;
			cloneTopWindows.transform.localScale.z = 0.019;
			aCollectionObj_1.Add(cloneTopWindows);
			wind_X -= 1.2;
		} //end if
	} //end for
	c = 0;
	
	//left side windows---------------------------
	var nWind_X:float = this.RandX + 2.8090137;
	var nWind_Y:float = 6.8821215;
	var nWind_Z:float = this.RandZ - 1.0237426;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow != null){
				var cloneLeftWindows = Instantiate(oWindow, Vector3(nWind_X, nWind_Y, nWind_Z), Quaternion.identity); 
				cloneLeftWindows.transform.parent = oBuilding1.transform; //parenting
				cloneLeftWindows.name = "top left window " + (++c);
				cloneLeftWindows.transform.localScale.x = 0.1608783;
				cloneLeftWindows.transform.localScale.y = 0.1284585;
				cloneLeftWindows.transform.localScale.z = 0.019;
				cloneLeftWindows.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
				aCollectionObj_1.Add(cloneLeftWindows);
			}//end if
			nWind_Y -= 2.5;
		}//end for
		nWind_Y = 6.8821215;
		nWind_Z += 2.0;
	}//end for
	c = 0;
	
	//right side windows---------------------------
	nWind_X = this.RandX - 2.8090137;
	nWind_Y = 6.8821215;
	nWind_Z = this.RandZ - 1.0237426;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow != null){
				var cloneRightWindows = Instantiate(oWindow, Vector3(nWind_X, nWind_Y, nWind_Z), Quaternion.identity); 
				cloneRightWindows.transform.parent = oBuilding1.transform; //parenting
				cloneRightWindows.name = "top right window " + (++c);
				cloneRightWindows.transform.localScale.x = 0.1608783;
				cloneRightWindows.transform.localScale.y = 0.1284585;
				cloneRightWindows.transform.localScale.z = 0.019;
				cloneRightWindows.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
				aCollectionObj_1.Add(cloneRightWindows);
			}//end if
			nWind_Y -= 2.5;
		}//end for
		nWind_Y = 6.8821215;
		nWind_Z += 2.0;
	}//end for
	c = 0;
//:::::::::::::::::::::::::::::::::;End Top Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	
//:::::::::::::::::::::::::::::::::;Start Middle Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	wind_X = this.RandX + 2.8973138;
	wind_Y = 4.074193; 
	
	for(i=0; i<=3; i++){
		if(oWindow != null){
			var cloneMiddleWindows = Instantiate(oWindow, Vector3(wind_X - 1.2, wind_Y, wind_Z), Quaternion.identity);
			cloneMiddleWindows.transform.parent = oBuilding1.transform; //parenting
			cloneMiddleWindows.name = "middleWindow " + (++c);
			cloneMiddleWindows.transform.localScale.x = 0.1288288;
			cloneMiddleWindows.transform.localScale.y = 0.2147541;
			cloneMiddleWindows.transform.localScale.z = 0.019;
			aCollectionObj_1.Add(cloneMiddleWindows);
			wind_X -= 1.2;
		} //end  if
	} //end for
	c = 0;
//:::::::::::::::::::::::::::::::::;End Middle Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//:::::::::::::::::::::::::::::::::;Start Down Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	wind_X = this.RandX + 1.5556326;
	wind_Y = 1.00569; 
	
	for(i=0; i<=1; i++){
		if(oWindow != null) {//if the object oWindow exists 
			var cloneDownWindows = Instantiate(oWindow, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity); 
			cloneDownWindows.transform.parent = oBuilding1.transform; //parenting
			cloneDownWindows.name = "downWindow " + (++c);
			cloneDownWindows.transform.localScale.x = 0.1818855;
			cloneDownWindows.transform.localScale.y = 0.1157715;
			cloneDownWindows.transform.localScale.z = 0.0155889;
			aCollectionObj_1.Add(cloneDownWindows);
			wind_X -= 3.154466;
		} //end if
	} //end for
	c = 0;
//:::::::::::::::::::::::::::::::::;End Down Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Windows(RandX, RandZ)
//---------------------------END WINDOWS-------------------------------------------------------------------


//-------------------------------START DOOR-----------------------------------------------------------------
public function Door(RandX, RandZ){

	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oWindow);
	//oWindow.transform.renderer.material.color = Color.clear; 
	
	oWindow.renderer.material.mainTexture = Resources.Load("door_corfu3"); //import texture for door
	
	var oDoor = Instantiate(oWindow, Vector3(this.RandX, 0.953612, this.RandZ + 2.2319577), Quaternion.identity);
	oDoor.name = "door";
	oDoor.transform.parent = oBuilding1.transform;	

	oDoor.transform.localScale.x = 0.1656405;
	oDoor.transform.localScale.y = 0.2321697;
	oDoor.transform.localScale.z = 0.019;
	aCollectionObj_1.Add(oDoor);
}//end function Door(RandX, RandZ)
//-------------------------------END DOOR-----------------------------------------------------------------


//-----------------------------------START EAVES-----------------------------------------------------------
public function Eaves(RandX, RandZ){

	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	
	//eaves facade
	var eaves_X:float = this.RandX + 1.7556326;
	var eaves_Y:float = 7.4821215;
	var eaves_Z:float = this.RandZ + 2.2519577;

	for(i=0; i<=3; i++){
		for(j=0; j<=1; j++){
			if(oCube != null){
				var cloneEaves_facade = Instantiate(oCube, Vector3(eaves_X, eaves_Y, eaves_Z), Quaternion.identity);
				cloneEaves_facade.transform.parent = oBuilding1.transform;	
				cloneEaves_facade.name = "eaves " + (++c);
				cloneEaves_facade.transform.localScale.x = 0.1912387;
				cloneEaves_facade.transform.localScale.y = 0.0125;
				cloneEaves_facade.transform.localScale.z = 0.025;
				aCollectionObj_1.Add(cloneEaves_facade);
			}//end if
			eaves_Y -= 2.3;
		}//end for
		eaves_Y = 7.4821215;
		eaves_X -= 1.2;
	}//end for
	c = 0;
	
	//left side eaves-----------------------------------
	eaves_X = this.RandX + 2.83;
	eaves_Y = 7.4821215;
	eaves_Z = this.RandZ - 1.0237426;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow != null){
				var cloneEaves_lftSd = Instantiate(oCube, Vector3(eaves_X, eaves_Y, eaves_Z), Quaternion.identity); 
				cloneEaves_lftSd.transform.parent = oBuilding1.transform; //parenting
				cloneEaves_lftSd.name = "left side eave " + (++c);
				cloneEaves_lftSd.transform.localScale.x = 0.1919583;
				cloneEaves_lftSd.transform.localScale.y = 0.0125;
				cloneEaves_lftSd.transform.localScale.z = 0.025;
				cloneEaves_lftSd.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
				aCollectionObj_1.Add(cloneEaves_lftSd);
			}//end if
			eaves_Y -= 2.5;
		}//end for
		eaves_Y = 7.4821215;
		eaves_Z += 2.0;
	}//end for
	c = 0;
	
	
	//right side eaves-----------------------------------
	eaves_X = this.RandX - 2.83;
	eaves_Y = 7.4821215;
	eaves_Z = this.RandZ - 1.0237426;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow != null){
				var cloneEaves_rghtSd = Instantiate(oCube, Vector3(eaves_X, eaves_Y, eaves_Z), Quaternion.identity); 
				cloneEaves_rghtSd.transform.parent = oBuilding1.transform; //parenting
				cloneEaves_rghtSd.name = "right side eave " + (++c);
				cloneEaves_rghtSd.transform.localScale.x = 0.1919583;
				cloneEaves_rghtSd.transform.localScale.y = 0.0125;
				cloneEaves_rghtSd.transform.localScale.z = 0.025;
				cloneEaves_rghtSd.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
				aCollectionObj_1.Add(cloneEaves_rghtSd);
			}//end if
			eaves_Y -= 2.5;
		}//end for
		eaves_Y = 7.4821215;
		eaves_Z += 2.0;
	}//end for
	c = 0;
	
}//end function Eaves(RandX, RandZ)
//-----------------------------------END EAVES-----------------------------------------------------------



//-------------------------------------START BALCONY----------------------------------------------------
public function Balcony(RandX, RandZ){

	oRails = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oRails);
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	
	oRails.renderer.material.color = Color(0.4118, 0.4118, 0.4118, 0);   
	
	var base_ = Instantiate(oCube, Vector3(this.RandX, 3.1, this.RandZ +  2.4719577), Quaternion.identity); 
	base_.transform.parent = oBuilding1.transform; //parenting
	base_.name = "base balcony";
	base_.transform.localScale.x = 0.947154;
	base_.transform.localScale.y = 0.0125;
	base_.transform.localScale.z = 0.1373834;
	aCollectionObj_1.Add(base_);
	c = 0;
	
	//Rails Facade----------------------------------------
	var rail_X:float = this.RandX;
	var rail_Y:float = 3.7;
	var rail_Z:float = this.RandZ + 2.67;
	
	for(i=0; i<=1; i++){
		if(oCube != null){
			var rail_ = Instantiate(oRails,Vector3(rail_X, rail_Y, rail_Z), Quaternion.identity);
			rail_.transform.parent = oBuilding1.transform; //parenting
			rail_.name = " main rail " + (++c);
			rail_.transform.localScale.x = 0.9464975;
			rail_.transform.localScale.y = 0.006083317;
			rail_.transform.localScale.z = 0.02218747;
			aCollectionObj_1.Add(rail_);
			rail_Y -= 0.55;
		}//end if
	}//end for
	c = 0;
	
	
	rail_X = this.RandX + 2.6259075;
	rail_Y = 3.42;
	rail_Z = this.RandZ + 2.67;
	
	for(i=0; i<=26; i++){
		if(oCube != null){
			var oRails_ = Instantiate(oRails,Vector3(rail_X, rail_Y, rail_Z), Quaternion.identity);
			oRails_.transform.parent = oBuilding1.transform; //parenting
			oRails_.name = "rails " + (++c);
			oRails_.transform.localScale.x = 0.01005142;
			oRails_.transform.localScale.y = 0.05990216;
			oRails_.transform.localScale.z = 0.01005142;
			aCollectionObj_1.Add(oRails_);
			rail_X -= 0.2;
		}//end if
	}//end for
	c = 0;
	
	
	//Main Side Rails ----------------------------------------
	rail_X = this.RandX + 2.6259075;
	rail_Y = 3.7;
	rail_Z = this.RandZ + 2.46;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oCube != null){
				var oSideRails = Instantiate(oRails,Vector3(rail_X, rail_Y, rail_Z), Quaternion.identity);
				oSideRails.transform.parent = oBuilding1.transform; //parenting
				oSideRails.name = "main side rail " + (++c);
				oSideRails.transform.localScale.x = 0.02218747;
				oSideRails.transform.localScale.y = 0.006083317;
				oSideRails.transform.localScale.z = 0.1151402;
				aCollectionObj_1.Add(oSideRails);
			}//end if
			rail_Y -= 0.55;
		}//end for
		rail_Y = 3.7;
		rail_X -= 5.251815;
	}//end for
	c = 0;
	
	
	//Side Rails ----------------------------------------
	rail_X = this.RandX + 2.6259075;
	rail_Y = 3.42;
	rail_Z = this.RandZ + 2.67;
	
	for(i=0; i<=2; i++){
		for(j=0; j<=1; j++){
		if(oCube != null){
			var oRails_sd = Instantiate(oRails,Vector3(rail_X, rail_Y, rail_Z), Quaternion.identity);
			oRails_sd.transform.parent = oBuilding1.transform; //parenting
			oRails_sd.name = "side rails " + (++c);
			oRails_sd.transform.localScale.x = 0.01005142;
			oRails_sd.transform.localScale.y = 0.05990216;
			oRails_sd.transform.localScale.z = 0.01005142;
			aCollectionObj_1.Add(oRails_sd);
		}//end if
		rail_X -= 5.251815;
	}//end for
	rail_X = this.RandX + 2.6259075;
	rail_Z -= 0.2;
	}//end for
	c = 0;
}//end function Balcony(RandX, RandZ)
//-------------------------------------END BALCONY----------------------------------------------------


//---------------------------------------START ROOF------------------------------------------------------
public function Roof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Roof";
	tmpobj.transform.parent = oBuilding1.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	

	//vertices positioning
	verts[0] = new Vector3(this.RandX - 2.8, 9.5, this.RandZ ); //P1 
	verts[1] = new Vector3(this.RandX - 2.8, 8.3, this.RandZ -2.25); //P2
	verts[2] = new Vector3(this.RandX - 2.8, 8.3, this.RandZ +2.25); //P3
	
	verts[3] = new Vector3(this.RandX +2.8, 9.5, this.RandZ ); //P4
	verts[4] = new Vector3(this.RandX +2.8, 8.3, this.RandZ +2.25); //P5
	verts[5] = new Vector3(this.RandX +2.8, 8.3, this.RandZ -2.25); //P6


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
	tmpobj.renderer.material.mainTexture = Resources.Load("RoofTileWood"); //import texture
}//end function Roof(RandX, RandZ)
//----------------------------------------END ROOF--------------------------------------------------------