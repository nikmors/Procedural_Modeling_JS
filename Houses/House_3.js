//create objects
var oBuilding3 : GameObject;
var oBase : GameObject; 
var oWindow : GameObject;
var oColumn : GameObject; 
var oColumnCube : GameObject;
var oEavesFlr_scnd : GameObject;
var oFrnt_Wall : GameObject;
var tmpobj: GameObject;

//-------------------start public variables--------------------------------------------------------
public var aCollectionObj_3 = new Array(); // an Array - a collection- for the  objects of House_3
public var i: int = 0;
public var j: int = 0;
public var c: int = 0;

//Random ranges between X, Y coordinates
public var RandX: float; 
public var RandZ: float; 
//-------------------end public variables--------------------------------------------------------

//MAIN function
public function mainDO() {

	//RandX = Random.Range(10,247);
	//RandZ = Random.Range(10,247);
	
	MainBuilding(RandX, RandZ);
	Basement(RandX, RandZ);
	Stairs(RandX, RandZ);
	Attic(RandX, RandZ);
	Windows(RandX, RandZ);
	Columns(RandX, RandZ);
	Eaves(RandX, RandZ);
	Balcony(RandX, RandZ);
	Doors(RandX, RandZ);
	Roof(RandX, RandZ);
	DoArch(RandX, RandZ);
}//end function Start()


public function MainBuilding(RandX, RandZ){
	oBuilding3 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	oBuilding3.transform.position = Vector3(this.RandX, 3, this.RandZ);
	oBuilding3.name = "House_3";
	oBuilding3.renderer.material.color = Color(Random.Range(1,0.9), Random.Range(0.980,0.880), Random.Range(0.804,0.704), 0);
	oBuilding3.transform.localScale.x = 7;
	oBuilding3.transform.localScale.y = 4.5;
	oBuilding3.transform.localScale.z = 5;
	aCollectionObj_3.Add(oBuilding3);
}//end function MainBuilding(RandX, RandZ)


//---------------------------START BASEMENT-------------------------------------------------------------------
public function Basement(RandX, RandZ){
//:::Start Base:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	oBase = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	oBase.renderer.material.color = Color(1, 0.980, 0.804, 0);
	oBase.transform.position = Vector3(this.RandX +2.5532604, 0.4, this.RandZ +0.6);
	oBase.transform.parent = oBuilding3.transform; //parenting
	oBase.name = "base left";
	oBase.transform.localScale.x = 0.2686374;
	oBase.transform.localScale.y = 0.15;
	oBase.transform.localScale.z = 1.25;
	aCollectionObj_3.Add(oBase);


	var oBase_right = Instantiate(oBase, Vector3(this.RandX -2.5591145, 0.4, this.RandZ +0.6), Quaternion.identity);
	oBase_right.transform.parent = oBuilding3.transform; //parenting
	oBase_right.name = "base right";
	oBase_right.transform.localScale.x = 0.2686374;
	oBase_right.transform.localScale.y = 0.15;
	oBase_right.transform.localScale.z = 1.25;
	aCollectionObj_3.Add(oBase_right);

	var oBase_middle = Instantiate(oBase, Vector3(this.RandX, 0.4, this.RandZ +0.6), Quaternion.identity);
	oBase_middle.transform.parent = oBuilding3.transform; //parenting
	oBase_middle.name = "base middle";
	oBase_middle.transform.localScale.x = 0.2686374;
	oBase_middle.transform.localScale.y = 0.15;
	oBase_middle.transform.localScale.z = 1.25;
	aCollectionObj_3.Add(oBase_middle);
} //end function Basement(RandX, RandZ)
//:::End Base:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::Start Stairs:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
public function Stairs(RandX, RandZ){
	var nextPOSX_stairs:float= this.RandX+ 1.26441663;
	var nextPOSY_stairs:float= 0.25;
	var nextPOSZ_stairs:float = this.RandZ +0.6;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oBase){
				var oStairs = Instantiate(oBase, Vector3(nextPOSX_stairs, nextPOSY_stairs, nextPOSZ_stairs), Quaternion.identity);
				oStairs.transform.parent = oBuilding3.transform; //parenting
				oStairs.transform.localScale.x = 0.10;
				oStairs.transform.localScale.y = 0.08;
				oStairs.transform.localScale.z = 1.25;
				oStairs.name = "stairs " + (++c);
				aCollectionObj_3.Add(oStairs);
				nextPOSY_stairs += 0.30; 
				nextPOSZ_stairs = this.RandZ +0.46;
			}//end if
		}//end for
		nextPOSX_stairs -= 2.5605403;
		nextPOSY_stairs = 0.25;
		nextPOSZ_stairs = this.RandZ +0.6;
	}//end for
	c = 0;
}//end function Stairs(RandX, RandZ)
//:::End Stairs:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//---------------------------END BASEMENT-------------------------------------------------------------------


public function Attic(RandX, RandZ){
	oBase = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy (oBase);
	
	oBase.renderer.material.color = Color(1, 0.980, 0.804, 0);
	
	var oAttic = Instantiate(oBase, Vector3(this.RandX, 6.35, this.RandZ + 0.6), Quaternion.identity);
	oAttic.transform.parent = oBuilding3.transform; //parenting
	oAttic.transform.localScale.x = 0.9954391;
	oAttic.transform.localScale.y = 0.504294;
	oAttic.transform.localScale.z = 1.252738;
	oAttic.name = "attic";
	aCollectionObj_3.Add(oAttic);
}//end function Attic(RandX, RandZ)


//---------------------------START WINDOWS-------------------------------------------------------------------
public function Windows(RandX, RandZ){
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	
	oWindow.renderer.material.mainTexture = Resources.Load("window_corfu2"); //import texture for windows
	
	var nWind_X:float = this.RandX + 2.82102;
	var nWind_Y:float = 6.6530576;
	var nWind_Z:float = this.RandZ + 3.7562495;

	oWindow.transform.position = Vector3(nWind_X, nWind_Y, nWind_Z);
	oWindow.transform.parent = oBuilding3.transform; //parenting
	oWindow.name = "Window 0";
	oWindow.transform.localScale.x = 0.1;
	oWindow.transform.localScale.y = 0.2402316;
	oWindow.transform.localScale.z = 0.0163088;
	aCollectionObj_3.Add(oWindow);

//Insert the rest 4 windows
	var nextPOSX_wind:float = nWind_X - 1.4;

	for(i=0; i<=3; i++){
		if(oWindow){
			var cloneWind_attic = Instantiate(oWindow, Vector3(nextPOSX_wind,nWind_Y, nWind_Z), Quaternion.identity);
			cloneWind_attic.transform.parent = oBuilding3.transform; //parenting
			cloneWind_attic.name = "Window attic " + (++c);
			cloneWind_attic.transform.localScale.x =0.1;
			cloneWind_attic.transform.localScale.y = 0.2402316;
			cloneWind_attic.transform.localScale.z = 0.0163088;
			aCollectionObj_3.Add(cloneWind_attic);
			nextPOSX_wind -= 1.4;
		}//end if
	}//end for
	c = 0;
	
//:::Start Side Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	var leftSideWind = Instantiate(oWindow, Vector3(this.RandX + 3.5079674, nWind_Y, this.RandZ + 3.1331445), Quaternion.identity); //left window
	leftSideWind.transform.parent = oBuilding3.transform; //parenting
	leftSideWind.name = "left window";
	leftSideWind.transform.localScale.x =0.1;
	leftSideWind.transform.localScale.y = 0.2402316;
	leftSideWind.transform.localScale.z = 0.0163088;
	leftSideWind.transform.eulerAngles.y = 90; 
	aCollectionObj_3.Add(leftSideWind);

	var rightSideWind = Instantiate(oWindow, Vector3(this.RandX - 3.5079674, nWind_Y, this.RandZ + 3.1331445), Quaternion.identity); //right window
	rightSideWind.transform.parent = oBuilding3.transform; //parenting
	rightSideWind.name = "right window";
	rightSideWind.transform.localScale.x =0.1;
	rightSideWind.transform.localScale.y = 0.2402316;
	rightSideWind.transform.localScale.z = 0.0163088;
	rightSideWind.transform.eulerAngles.y = 90; 
	aCollectionObj_3.Add(rightSideWind);

	var leftSideWind_ScndFlr = Instantiate(oWindow, Vector3(this.RandX + 3.5079674, 4, this.RandZ + 1.8844446249915), Quaternion.identity); //left window
	leftSideWind_ScndFlr.transform.parent = oBuilding3.transform; //parenting
	leftSideWind_ScndFlr.name = "left window 2nd floor";
	leftSideWind_ScndFlr.transform.localScale.x =0.1;
	leftSideWind_ScndFlr.transform.localScale.y = 0.2402316;
	leftSideWind_ScndFlr.transform.localScale.z = 0.0163088;
	leftSideWind_ScndFlr.transform.eulerAngles.y = 90; 
	aCollectionObj_3.Add(leftSideWind_ScndFlr);

	var rightSideWind_ScndFlr = Instantiate(oWindow, Vector3(this.RandX - 3.5079674, 4, this.RandZ + 1.8844446249915), Quaternion.identity); //right window
	rightSideWind_ScndFlr.transform.parent = oBuilding3.transform; //parenting
	rightSideWind_ScndFlr.name = "right window 2nd floor";
	rightSideWind_ScndFlr.transform.localScale.x =0.1;
	rightSideWind_ScndFlr.transform.localScale.y = 0.2402316;
	rightSideWind_ScndFlr.transform.localScale.z = 0.0163088;
	rightSideWind_ScndFlr.transform.eulerAngles.y = 90; 
	aCollectionObj_3.Add(rightSideWind_ScndFlr);
//:::End Side Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::Start Second Floor Windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	var Scnd_FlrWind_POS_X:float = nWind_X ;

	for(i=0; i<=1; i++){
		if(oWindow){
			var cloneWind_sndFlr_left = Instantiate(oWindow, Vector3(Scnd_FlrWind_POS_X, 4, nWind_Z - 1.22), Quaternion.identity);
			cloneWind_sndFlr_left.transform.parent = oBuilding3.transform; //parenting
			cloneWind_sndFlr_left.name = "Window second floor left " + (++c);
			cloneWind_sndFlr_left.transform.localScale.x =0.1;
			cloneWind_sndFlr_left.transform.localScale.y = 0.2402316;
			cloneWind_sndFlr_left.transform.localScale.z = 0.0163088;
			aCollectionObj_3.Add(cloneWind_sndFlr_left);
			Scnd_FlrWind_POS_X -= 1.4;
		}//end if
	}//end for
	c = 0;
	
	Scnd_FlrWind_POS_X= nWind_X ;
	for(i=0; i<=1; i++){
		if(oWindow){
			var cloneWind_sndFlr_right = Instantiate(oWindow, Vector3(Scnd_FlrWind_POS_X - 5.6, 4, nWind_Z - 1.22), Quaternion.identity);
			cloneWind_sndFlr_right.transform.parent = oBuilding3.transform; //parenting
			cloneWind_sndFlr_right.name = "Window second floor right " + (++c);
			cloneWind_sndFlr_right.transform.localScale.x =0.1;
			cloneWind_sndFlr_right.transform.localScale.y = 0.2402316;
			cloneWind_sndFlr_right.transform.localScale.z = 0.0163088;
			aCollectionObj_3.Add(cloneWind_sndFlr_right);
			Scnd_FlrWind_POS_X += 1.4;
		}//end if
	}//end for
	c = 0;
//::::End Second Floor Windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::Start Grnd Floor Windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
	Scnd_FlrWind_POS_X= nWind_X ;
	for(i=0; i<=1; i++){
		if(oWindow){
			var cloneWind_grndFlr = Instantiate(oWindow, Vector3(Scnd_FlrWind_POS_X -0.2, 2, nWind_Z - 1.22), Quaternion.identity);
			cloneWind_grndFlr.transform.parent = oBuilding3.transform; //parenting
			cloneWind_grndFlr.name = "Window ground floor " + (++c);
			cloneWind_grndFlr.transform.localScale.x =0.1;
			cloneWind_grndFlr.transform.localScale.y = 0.2402316;
			cloneWind_grndFlr.transform.localScale.z = 0.0163088;
			aCollectionObj_3.Add(cloneWind_grndFlr);
			Scnd_FlrWind_POS_X -= 2.6;
		}//end if
	}//end for
	c = 0;
//::::End Grnd Floor Windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
}//end function Windows(RandX, RandZ)
//---------------------------END WINDOWS-------------------------------------------------------------------


//---------------------------------START COLUMNS-------------------------------------------------------------
public function Columns(RandX, RandZ){

	oColumn = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	oColumn.renderer.material.color = Color.white;
	
	oColumn.transform.position = Vector3(this.RandX -3.2, 1.4840475, this.RandZ + 3.3772203);
	oColumn.transform.parent = oBuilding3.transform; //parenting
	oColumn.name = "Column right 0";
	oColumn.transform.localScale.x = 0.05992945;
	oColumn.transform.localScale.y = 0.2915616;
	oColumn.transform.localScale.z = 0.08529133;
	aCollectionObj_3.Add(oColumn);
	
	oColumnCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	oColumnCube.transform.position = Vector3(this.RandX -3.2, 0.8373266, this.RandZ + 3.3772203);
	oColumnCube.transform.parent = oColumn.transform; //parenting
	oColumnCube.name = "Column base";
	oColumnCube.transform.localScale.x = 1.43565;
	oColumnCube.transform.localScale.y = 0.1184824;
	oColumnCube.transform.localScale.z = 1.61189;
	aCollectionObj_3.Add(oColumnCube);


	var oColumnCube_Up = Instantiate(oColumnCube, Vector3(this.RandX -3.2, 2.2373266, this.RandZ + 3.3772203), Quaternion.identity);
	oColumnCube_Up.transform.parent = oColumn.transform; //parenting
	oColumnCube_Up.name = "Column top";
	oColumnCube_Up.transform.localScale.x = 1.43565;
	oColumnCube_Up.transform.localScale.y = 0.2184824;
	oColumnCube_Up.transform.localScale.z = 1.61189;
	aCollectionObj_3.Add(oColumnCube_Up);
	
	
	var nextPOSX_column:float = this.RandX -3.2;
	for(i=0; i<=1; i++){
		if(oColumn){
			var cloneColumn_right = Instantiate(oColumn, Vector3(nextPOSX_column + 1.3, 1.4840475, this.RandZ + 3.3772203), Quaternion.identity);
			cloneColumn_right.transform.parent = oBuilding3.transform; //parenting
			cloneColumn_right.name = "Column right " + (++c);
			cloneColumn_right.transform.localScale.x = 0.05992945;
			cloneColumn_right.transform.localScale.y = 0.2915616;
			cloneColumn_right.transform.localScale.z = 0.08529133;
			aCollectionObj_3.Add(cloneColumn_right);	
			if(i==1)
				nextPOSX_column += 1.5;
			else
				nextPOSX_column += 1.3;
		}//end if
	}//end for
	c = 0;
	
	nextPOSX_column = this.RandX;
	for(i=0; i<=2; i++){
		if(oColumn){
			var cloneColumn_left = Instantiate(oColumn, Vector3(nextPOSX_column +0.6, 1.4840475, this.RandZ + 3.3772203), Quaternion.identity);
			cloneColumn_left.transform.parent = oBuilding3.transform; //parenting
			cloneColumn_left.name = "Column left " + (++c);
			cloneColumn_left.transform.localScale.x = 0.05992945;
			cloneColumn_left.transform.localScale.y = 0.2915616;
			cloneColumn_left.transform.localScale.z = 0.08529133;
			aCollectionObj_3.Add(cloneColumn_left);	
			nextPOSX_column += 1.3;
		}//end if
	}//end for
	c = 0;
	
//:::Start Second Floor Columns::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	nextPOSX_column = this.RandX -3.381428212338;
	
	for(i=0; i<=2; i++){
		if(oColumn){
			var column_scndFlr_right = Instantiate(oColumn, Vector3(nextPOSX_column, 4.15, this.RandZ + 3.6272203), Quaternion.identity);
			column_scndFlr_right.transform.parent = oBuilding3.transform; //parenting
			column_scndFlr_right.name = "right column second floor " + (++c);
			column_scndFlr_right.transform.localScale.x = 0.02978393;
			column_scndFlr_right.transform.localScale.y = 0.1656943;
			column_scndFlr_right.transform.localScale.z = 0.040946;
			aCollectionObj_3.Add(column_scndFlr_right);
			nextPOSX_column += 1.3;
		}//end if
	}//end for	
	c = 0;

	for(i=0; i<=2; i++){
		if(oColumn){
			var column_scndFlr_left = Instantiate(oColumn, Vector3(nextPOSX_column + 0.25, 4.15, this.RandZ + 3.6272203), Quaternion.identity);
			column_scndFlr_left.transform.parent = oBuilding3.transform; //parenting
			column_scndFlr_left.name = "left column second floor " + (++c);
			column_scndFlr_left.transform.localScale.x = 0.02978393;
			column_scndFlr_left.transform.localScale.y = 0.1656943;
			column_scndFlr_left.transform.localScale.z = 0.040946;
			aCollectionObj_3.Add(column_scndFlr_left);
			nextPOSX_column += 1.3;
		}//end if
	}//end for	
	c = 0;
//:::End Second Floor Columns::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Columns(RandX, RandZ)
//---------------------------------END COLUMNS-------------------------------------------------------------

//---------------------------------START EAVES-------------------------------------------------------------
public function Eaves(RandX, RandZ){
	oEavesFlr_scnd = GameObject.CreatePrimitive(PrimitiveType.Cube);
	oEavesFlr_scnd.renderer.material.color = Color.white;
	
	oEavesFlr_scnd.transform.parent = oBuilding3.transform; //parenting
	oEavesFlr_scnd.name = "eaves 2nd floor";
	oEavesFlr_scnd.transform.position = Vector3(this.RandX, 5.2 , this.RandZ + 2.46482);
	oEavesFlr_scnd.transform.localScale.x = 1.0254391;
	oEavesFlr_scnd.transform.localScale.y = 0.025;
	oEavesFlr_scnd.transform.localScale.z = 0.525;
	aCollectionObj_3.Add(oEavesFlr_scnd);

	var oEavesFlr_frst = Instantiate(oEavesFlr_scnd, Vector3(this.RandX, 3.3 , this.RandZ + 2.46482), Quaternion.identity);
	oEavesFlr_frst.transform.parent = oBuilding3.transform; //parenting
	oEavesFlr_frst.name = "eaves 1st floor";
	oEavesFlr_frst.transform.localScale.x = 1.0254391;
	oEavesFlr_frst.transform.localScale.y = 0.025;
	oEavesFlr_frst.transform.localScale.z = 0.525;
	aCollectionObj_3.Add(oEavesFlr_frst);
}//end function Eaves(RandX, RandZ)
//---------------------------------END EAVES------------------------------------------------------------

//---------------------------------START BALCONY-------------------------------------------------------------
public function Balcony(RandX, RandZ){
	oFrnt_Wall = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	oFrnt_Wall.renderer.material.color = Color(1, 0.980, 0.804, 0);
	
	oFrnt_Wall.transform.parent = oBuilding3.transform; //parenting
	oFrnt_Wall.name = "balcony front wall";
	oFrnt_Wall.transform.position = Vector3(this.RandX, 3.55 , this.RandZ + 3.7112529943107);
	oFrnt_Wall.transform.localScale.x = 1.0254391;
	oFrnt_Wall.transform.localScale.y = 0.08933807;
	oFrnt_Wall.transform.localScale.z = 0.025;
	aCollectionObj_3.Add(oFrnt_Wall);

	var nextPOS_X_wall:float = this.RandX + 3.5001257969745;
	for(i=0; i<=1; i++){
		if(oFrnt_Wall){
			var oSide_Wall = Instantiate(oFrnt_Wall, Vector3(nextPOS_X_wall, 3.55, this.RandZ + 3.1331445),  Quaternion.identity);
			oSide_Wall.transform.parent = oBuilding3.transform; //parenting
			oSide_Wall.name = "balcony side wall " + (++c);
			oSide_Wall.transform.localScale.x = 0.25;
			oSide_Wall.transform.localScale.y = 0.08933807;
			oSide_Wall.transform.localScale.z = 0.025;
			oSide_Wall.transform.eulerAngles.y = 90; 
			aCollectionObj_3.Add(oSide_Wall);
			nextPOS_X_wall -= 7.004766394268;
		}//end if
	}//end for
	c = 0;
}//end function Balcony(RandX, RandZ)
//---------------------------------END BALCONY-------------------------------------------------------------



//---------------------------------START DOORS-------------------------------------------------------------
public function Doors(RandX, RandZ){
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy (oWindow);
	
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("door_corfu2"); //import texture for doors
	
	var nWind_X:float = this.RandX + 2.82102;
	var nWind_Z:float = this.RandZ + 3.7562495;

	if(oWindow){
		var oDoor_Scnd_Flr = Instantiate(oWindow, Vector3(nWind_X - 2.8, 4.2, nWind_Z - 1.22), Quaternion.identity);
		oDoor_Scnd_Flr.transform.parent = oBuilding3.transform; //parenting
		oDoor_Scnd_Flr.name = "Door second floor";
		oDoor_Scnd_Flr.transform.localScale.x = 0.1;
		oDoor_Scnd_Flr.transform.localScale.y = 0.3734118;
		oDoor_Scnd_Flr.transform.localScale.z = 0.0163088;
		aCollectionObj_3.Add(oDoor_Scnd_Flr);
	
		var dr_PosX:float = nWind_X - 1.6028176;
		for(i=0; i<=2; i++){
			var oGround_door = Instantiate(oDoor_Scnd_Flr, Vector3(dr_PosX, 1.5511089, nWind_Z - 1.22), Quaternion.identity);
			oGround_door.transform.parent = oBuilding3.transform; //parenting
			oGround_door.name = "ground door " + (++c);
			oGround_door.transform.localScale.x = 0.1;
			oGround_door.transform.localScale.y = 0.3734118;
			oGround_door.transform.localScale.z = 0.0163088;
			aCollectionObj_3.Add(oGround_door);
			if(i == 1)
				dr_PosX -= 1.3;
			else	
				dr_PosX -= 2.5;
		}//end for	
	}//end if
	c = 0;
}//end function Doors(RandX, RandZ)
//---------------------------------END DOORS-------------------------------------------------------------

//---------------------------------------START ROOF------------------------------------------------------
public function Roof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	//Renderer renderer = GetComponent<MeshRenderer>().renderer;
	
	//tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Roof";
	tmpobj.transform.parent = oBuilding3.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 3.5, 8.5, this.RandZ + 0.5); //P1 
	verts[1] = new Vector3(this.RandX - 3.5, 7.5, this.RandZ - 2.6); //P2
	verts[2] = new Vector3(this.RandX - 3.5, 7.5, this.RandZ + 4); //P3
	
	verts[3] = new Vector3(this.RandX + 3.5, 8.5, this.RandZ + 0.5); //P4
	verts[4] = new Vector3(this.RandX + 3.5, 7.5, this.RandZ + 4); //P5
	verts[5] = new Vector3(this.RandX + 3.5, 7.5, this.RandZ - 2.6); //P6


	uv[0] = new Vector2(0,0.5); //refer to vertices: verts[0]
	uv[1] = new Vector2(1,1);
	uv[2] = new Vector2(1,0);
	
	uv[3] = new Vector2(1,0.5);
	uv[4] = new Vector2(0,0);
	uv[5] = new Vector2(0,1);
	
	
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
	//Material mat = Resources.Load("tiled_roof_red_grey");
	//renderer.material = mat;
}//end function Roof(RandX, RandZ)
//----------------------------------------END ROOF--------------------------------------------------------



//-------------------------------------START ARCH-----------------------------------------------------------------
private function Arch(RandX, RandZ, tmpobj) {
	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch";
	tmpobj.renderer.material.color = Color(1, 0.980, 0.804, 0);
	tmpobj.transform.parent = oBuilding3.transform;
	
	var verts: Vector3[] = new Vector3[14];
	var uv: Vector2[] = new Vector2[14];
	var normals: Vector3[] = new Vector3[14];
	var tri: int[] = new int[72]; //3 vertices * 12 triangles = 36 * 2 (duplicate triangles for the back face) =72
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 1.9, 2.5, this.RandZ + 3.777); //P1
	verts[1] = new Vector3(this.RandX - 1.9, 2.35, this.RandZ + 3.777); //P2
	verts[2] = new Vector3(this.RandX - 1.72, 2.35, this.RandZ + 3.777); //P3
	verts[3] = new Vector3(this.RandX - 1.72, 3.3, this.RandZ + 3.777); //P4
	verts[4] = new Vector3(this.RandX - 3.2, 3.3, this.RandZ + 3.777); //P5
	verts[5] = new Vector3(this.RandX - 3.2, 2.35, this.RandZ + 3.777); //P6
	verts[6] = new Vector3(this.RandX - 3.02, 2.35, this.RandZ + 3.777); //P7
	verts[7] = new Vector3(this.RandX - 3.02, 2.5, this.RandZ + 3.777); //P8
	verts[8] = new Vector3(this.RandX - 2.96, 2.7, this.RandZ + 3.777); //P9
	verts[9] = new Vector3(this.RandX - 2.83, 2.9, this.RandZ + 3.777); //P10
	verts[10] = new Vector3(this.RandX - 2.62, 3, this.RandZ + 3.777); //P11
	verts[11] = new Vector3(this.RandX - 2.3,  3, this.RandZ + 3.777); //P12
	verts[12] = new Vector3(this.RandX - 2.09, 2.9, this.RandZ + 3.777); //P13
	verts[13] = new Vector3(this.RandX - 1.96, 2.7, this.RandZ + 3.777); //P14
	
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
	tmpobj.transform.parent = oBuilding3.transform;
	
	var verts: Vector3[] = new Vector3[14];
	var uv: Vector2[] = new Vector2[14];
	var normals: Vector3[] = new Vector3[14];
	var tri: int[] = new int[72]; //3 vertices * 12 triangles = 36 * 2 (duplicate triangles for the back face) =72
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX , 2.5, this.RandZ - 1.9); //P1
	verts[1] = new Vector3(this.RandX , 2.35, this.RandZ - 1.9); //P2
	verts[2] = new Vector3(this.RandX , 2.35, this.RandZ - 1.72); //P3
	verts[3] = new Vector3(this.RandX , 3.3, this.RandZ - 1.72); //P4
	verts[4] = new Vector3(this.RandX , 3.3, this.RandZ - 3.2); //P5
	verts[5] = new Vector3(this.RandX , 2.35, this.RandZ - 3.2); //P6
	verts[6] = new Vector3(this.RandX , 2.35, this.RandZ - 3.02); //P7
	verts[7] = new Vector3(this.RandX , 2.5, this.RandZ - 3.02); //P8
	verts[8] = new Vector3(this.RandX , 2.7, this.RandZ - 2.96); //P9
	verts[9] = new Vector3(this.RandX , 2.9, this.RandZ - 2.83); //P10
	verts[10] = new Vector3(this.RandX , 3, this.RandZ - 2.62); //P11
	verts[11] = new Vector3(this.RandX ,  3, this.RandZ - 2.3); //P12
	verts[12] = new Vector3(this.RandX , 2.9, this.RandZ - 2.09); //P13
	verts[13] = new Vector3(this.RandX , 2.7, this.RandZ - 1.96); //P14
	
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


private function ArchScndFlr(RandX, RandZ, tmpobj) {
	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch second floor";
	tmpobj.renderer.material.color = Color(1, 0.980, 0.804, 0);
	tmpobj.transform.parent = oBuilding3.transform;
	
	var verts: Vector3[] = new Vector3[14];
	var uv: Vector2[] = new Vector2[14];
	var normals: Vector3[] = new Vector3[14];
	var tri: int[] = new int[72]; //3 vertices * 12 triangles = 36 * 2 (duplicate triangles for the back face) =72
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 1.9, 4.5, this.RandZ); //P1
	verts[1] = new Vector3(this.RandX - 1.9, 4.35, this.RandZ); //P2
	verts[2] = new Vector3(this.RandX - 1.72, 4.35, this.RandZ ); //P3
	verts[3] = new Vector3(this.RandX - 1.72, 5.3, this.RandZ); //P4
	verts[4] = new Vector3(this.RandX - 3.2, 5.3, this.RandZ); //P5
	verts[5] = new Vector3(this.RandX - 3.2, 4.35, this.RandZ); //P6
	verts[6] = new Vector3(this.RandX - 3.02, 4.35, this.RandZ); //P7
	verts[7] = new Vector3(this.RandX - 3.02, 4.5, this.RandZ); //P8
	verts[8] = new Vector3(this.RandX - 2.96, 4.7, this.RandZ); //P9
	verts[9] = new Vector3(this.RandX - 2.83, 4.9, this.RandZ); //P10
	verts[10] = new Vector3(this.RandX - 2.62, 5, this.RandZ); //P11
	verts[11] = new Vector3(this.RandX - 2.3,  5, this.RandZ); //P12
	verts[12] = new Vector3(this.RandX - 2.09, 4.9, this.RandZ); //P13
	verts[13] = new Vector3(this.RandX - 1.96, 4.7, this.RandZ); //P14
	
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
	mesh.name = "Arch second floor";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("white_brick_wall");
	mf.mesh = mesh;
}//end function ArchScndFlr(Rand_X, Rand_Z)



private function ArchScndFlrVertical(RandX, RandZ, tmpobj){

	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch second floor vert";
	tmpobj.renderer.material.color = Color(1, 0.980, 0.804, 0);
	tmpobj.transform.parent = oBuilding3.transform;
	
	var verts: Vector3[] = new Vector3[14];
	var uv: Vector2[] = new Vector2[14];
	var normals: Vector3[] = new Vector3[14];
	var tri: int[] = new int[72]; //3 vertices * 12 triangles = 36 * 2 (duplicate triangles for the back face) =72
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX , 4.5, this.RandZ - 1.9); //P1
	verts[1] = new Vector3(this.RandX , 4.35, this.RandZ - 1.9); //P2
	verts[2] = new Vector3(this.RandX , 4.35, this.RandZ - 1.72); //P3
	verts[3] = new Vector3(this.RandX , 5.3, this.RandZ - 1.72); //P4
	verts[4] = new Vector3(this.RandX , 5.3, this.RandZ - 3.2); //P5
	verts[5] = new Vector3(this.RandX , 4.35, this.RandZ - 3.2); //P6
	verts[6] = new Vector3(this.RandX , 4.35, this.RandZ - 3.02); //P7
	verts[7] = new Vector3(this.RandX , 4.5, this.RandZ - 3.02); //P8
	verts[8] = new Vector3(this.RandX , 4.7, this.RandZ - 2.96); //P9
	verts[9] = new Vector3(this.RandX , 4.9, this.RandZ - 2.83); //P10
	verts[10] = new Vector3(this.RandX , 5, this.RandZ - 2.62); //P11
	verts[11] = new Vector3(this.RandX ,  5, this.RandZ - 2.3); //P12
	verts[12] = new Vector3(this.RandX , 4.9, this.RandZ - 2.09); //P13
	verts[13] = new Vector3(this.RandX , 4.7, this.RandZ - 1.96); //P14
	
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
	mesh.name = "Arch second floor vert";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("white_brick_wall");
	mf.mesh = mesh;
}//end function ArchScndFlrVertical(this.RandX, this.RandZ, tmpobj)


public function DoArch(RandX, RandZ){
	tmpobj = new GameObject();
	Destroy(tmpobj);
	
//:::: start first floor:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	var nPOSZ:float = this.RandZ + 0.777;
	this.RandX -= 0.2;
	for(i=0; i<=4; i++){
		if(tmpobj){
			Arch(this.RandX, nPOSZ, tmpobj);
			this.RandX += 1.35;
		}//end if
	}//end for
	
	this.RandX -= 9.98;
	this.RandZ +=5.50;
	
	for(i=0; i<=1; i++){
		if(tmpobj){
			ArchVertical(this.RandX, this.RandZ, tmpobj);
			this.RandX += 6.9;
		}//end if
	}//end for
//:::: end first floor:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::: start second floor:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	this.RandZ -= 1.777;
	this.RandX -= 10.65;
	for(i=0; i<=4; i++){
		if(tmpobj){
			ArchScndFlr(this.RandX, this.RandZ, tmpobj);
			if(i==1)
				this.RandX += 1.45;
			else
				this.RandX += 1.35;
		}//end if
	}//end for
	
	this.RandX -= 9.98;
	this.RandZ += 1.7;
	
	for(i=0; i<=1; i++){
		if(tmpobj){
			ArchScndFlrVertical(this.RandX, this.RandZ, tmpobj);
			this.RandX += 6.8;
		}//end if
	}//end for
//:::: end second floor:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


}//end function DoArch(Rand_X, Rand_Z)
//---------------------------------END ARCH------------------------------------------------------------------