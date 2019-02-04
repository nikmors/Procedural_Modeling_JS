//create objects
var oChurch : GameObject;
var oWindow : GameObject;
var oCube : GameObject;
var oColumn: GameObject;
var tmpobj: GameObject;
var oCylinder: GameObject;
var oArch: GameObject;
var oUpperEave_: GameObject;
var oCupola: GameObject;
//------------------------start public variables----------------------------------
public var i: int = 0;
public var j: int = 0;
public var c: int = 0;

//Random ranges between X, Y coordinates
public var RandX:float; 
public var RandZ:float; 

public var aCollectionObj_6 = new Array(); // an Array - a collection- for the  objects of Church
//------------------------end public variables----------------------------------


//MAIN function
public function mainDO() {

	//RandX = Random.Range(10,247);
	//RandZ = Random.Range(10,247);
	
	MainBuilding(RandX, RandZ);
	BellTower(RandX, RandZ);
	FrontPrt(RandX, RandZ);
	RightPrt(RandX, RandZ);
	Windows(RandX, RandZ);
	Doors(RandX, RandZ);
	Stairs(RandX, RandZ);
	Eaves(RandX, RandZ);
	MainWind(RandX, RandZ);
	Do_ArchWind(RandX, RandZ);
	MainRoof(RandX, RandZ);
	RightRoof(RandX, RandZ);
	BackRoof(RandX, RandZ);
	Do_ArchDoor(RandX, RandZ);
	Do_Arch(RandX, RandZ);
	Do_DoorRoof(RandX, RandZ);
	Do_BellTower_Arch(RandX, RandZ);
}



//-----------------------Start Main Building--------------------------------------------------------------
public function MainBuilding(RandX, RandZ){
	oChurch =  GameObject.CreatePrimitive(PrimitiveType.Cube); 
	oChurch.transform.position = Vector3(this.RandX, 3.985427, this.RandZ);
	oChurch.name = "Church";
	oChurch.renderer.material.color = Color(0.996, 0.9411, 0.8392, 0);
	oChurch.transform.localScale.x = 12.90037;
	oChurch.transform.localScale.y = 7.680003; 
	oChurch.transform.localScale.z = 6.561959;
	aCollectionObj_6.Add(oChurch);
	//}//end if
}//end function MainBuilding(Rand_X,Rand_Z)
//-----------------------End Main Building--------------------------------------------------------------


//------------------------Start BellTower-----------------------------------------------------------------
public function BellTower(RandX, RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	oCylinder = GameObject.CreatePrimitive(PrimitiveType.Cylinder );
	Destroy(oCylinder);
	
	if(oCube){
		var oBellTower = Instantiate(oCube, Vector3(this.RandX + 8.43, 8.4548, this.RandZ + 3.509899), Quaternion.identity);
		oBellTower.transform.parent = oChurch.transform; //parenting
		oBellTower.name = "Bell Tower";
		oBellTower.renderer.material.color = Color(0.996, 0.9411, 0.8392, 0);
		oBellTower.transform.localScale.x = 0.3027877;
		oBellTower.transform.localScale.y = 2.178845;
		oBellTower.transform.localScale.z = 0.5168234;
		aCollectionObj_6.Add(oBellTower);
	}//end if
	
	var BTposX:float = this.RandX + 8.43;
	var BTposY:float = 16.9;
	var BTposZ:float = this.RandZ + 3.509899; 
	
	//::::::::::::start eaves:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	for(i=0; i<=2;i++){
		if(oCube){
			var oBellTowerEaves = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerEaves.transform.parent = oChurch.transform; //parenting
			oBellTowerEaves.name = "Bell Tower eaves " + (++c);
			oBellTowerEaves.renderer.material.color = Color.white;
			if(i==1){
				oBellTowerEaves.transform.localScale.x = 0.3141422;
				oBellTowerEaves.transform.localScale.z = 0.5426651;
			}//end if
			else{
				oBellTowerEaves.transform.localScale.x = 0.3027877;
				oBellTowerEaves.transform.localScale.z = 0.5168234;
			}//end else
			oBellTowerEaves.transform.localScale.y = 0.02257257;
			aCollectionObj_6.Add(oBellTowerEaves);
		}//end if
		BTposY += 0.15;
	}//end for
	
	BTposY = 20.06;
	for(i=0;i<=5;i++){
		if(oCube){
			var oBellTowerEaves_upper = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerEaves_upper.transform.parent = oChurch.transform; //parenting
			oBellTowerEaves_upper.name = "Bell Tower  eaves " + (++c);
			oBellTowerEaves_upper.renderer.material.color = Color.white;
			if(i==1 || i==4){
				oBellTowerEaves_upper.transform.localScale.x = 0.3141422;
				oBellTowerEaves_upper.transform.localScale.z = 0.5426651;
			}//end if
			else if(i==2 || i==5){
				oBellTowerEaves_upper.transform.localScale.x = 0.329285;
				oBellTowerEaves_upper.transform.localScale.z = 0.5685066;
			}//end else if
			else{
				oBellTowerEaves_upper.transform.localScale.x = 0.3027877;
				oBellTowerEaves_upper.transform.localScale.z = 0.5168234;
			}//end else
			oBellTowerEaves_upper.transform.localScale.y = 0.02257257;
			aCollectionObj_6.Add(oBellTowerEaves_upper);
		}//end if
		if( i<2 || i>=3)
			BTposY += 0.15;
		else
			BTposY += 2.3;
	}//end for
	c = 0;
	//::::::::::::end eaves:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//:::::::::::::start attic::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	BTposY = 21.5;
	if(oCube){
		var oBellTowerAttic = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
		oBellTowerAttic.transform.parent = oChurch.transform; //parenting
		oBellTowerAttic.name = "Bell Tower attic ";
		oBellTowerAttic.renderer.material.color = Color(0.996, 0.9411, 0.8392, 0);
		oBellTowerAttic.transform.localScale.x = 0.3027877;
		oBellTowerAttic.transform.localScale.y = 0.2899312;
		oBellTowerAttic.transform.localScale.z = 0.5168234;
		aCollectionObj_6.Add(oBellTowerAttic);
	}//end if
	//:::::::::::::end attic::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//::::::::::::::start columns:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	BTposX = this.RandX + 6.7729;
	BTposY = 18.2;
	BTposZ = this.RandZ + 4.9214;
	
	for(i=0;i<=1;i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBellTowerColumns = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
				oBellTowerColumns.transform.parent = oChurch.transform; //parenting
				oBellTowerColumns.name = "Bell Tower column " + (++c);
				oBellTowerColumns.renderer.material.color = Color.white;
				oBellTowerColumns.transform.localScale.x = 0.04627316;
				oBellTowerColumns.transform.localScale.y = 0.2422188;
				oBellTowerColumns.transform.localScale.z = 0.08771555;
				aCollectionObj_6.Add(oBellTowerColumns);
			}//end if
			BTposX += 3.31;
		}//end for
		BTposX = this.RandX + 6.7729;
		BTposZ -= 2.8154; 
	}//end for
	c = 0;
	//::::::::::::::end columns:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//:::::::::::::start middle columns::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	BTposX = this.RandX + 6.7729;
	BTposY = 18.2;
	BTposZ = this.RandZ + 3.52166;
	for(i=0; i<=1; i++){
		if(oCylinder){
			var oBellTowerMdlClmns_H = Instantiate(oCylinder, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerMdlClmns_H.transform.parent = oChurch.transform; //parenting
			oBellTowerMdlClmns_H.name = "Bell Tower middle horizontal column " + (++c);
			oBellTowerMdlClmns_H.renderer.material.color = Color.white;
			oBellTowerMdlClmns_H.transform.localScale.x = 0.03294696;
			oBellTowerMdlClmns_H.transform.localScale.y = 0.1176622;
			oBellTowerMdlClmns_H.transform.localScale.z = 0.05811055;
			aCollectionObj_6.Add(oBellTowerMdlClmns_H);
		}//end if
		BTposX += 3.31;
	}//end for
	c = 0;
	
	BTposX = this.RandX + 8.3671;
	BTposY = 18.2;
	BTposZ = this.RandZ + 2.106;
	for(i=0; i<=1; i++){
		if(oCylinder){
			var oBellTowerMdlClmns_V = Instantiate(oCylinder, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerMdlClmns_V.transform.parent = oChurch.transform; //parenting
			oBellTowerMdlClmns_V.name = "Bell Tower middle vertical column " + (++c);
			oBellTowerMdlClmns_V.renderer.material.color = Color.white;
			oBellTowerMdlClmns_V.transform.localScale.x = 0.03294696;
			oBellTowerMdlClmns_V.transform.localScale.y = 0.1176622;
			oBellTowerMdlClmns_V.transform.localScale.z = 0.05811055;
			aCollectionObj_6.Add(oBellTowerMdlClmns_V);
		}//end if
		BTposZ += 2.8154;
	}//end for
	c = 0;
	//:::::::::::::end middle columns::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//:::::::::::start rails::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	BTposX = this.RandX + 10.5047;
	BTposY = 23.5;
	BTposZ = this.RandZ + 5.3276;
	 
	for(i=0; i<=19;i++){
		if(oCube){
			var oBellTowerRail_H = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerRail_H.transform.parent = oChurch.transform; //parenting
			oBellTowerRail_H.name = "Bell Tower horizontal rail " + (++c);
			oBellTowerRail_H.renderer.material.color = Color.black;
			oBellTowerRail_H.transform.localScale.x = 0.005183983;
			oBellTowerRail_H.transform.localScale.y = 0.1046447;
			oBellTowerRail_H.transform.localScale.z = 0.01092465;
			aCollectionObj_6.Add(oBellTowerRail_H);
		}//end if
	BTposX -= 0.217;
	}//end for
	

	BTposX = this.RandX + 10.5047;
	BTposZ = this.RandZ + 1.71639;
	for(i=0; i<=19;i++){
		if(oCube){
			var oBellTowerRail_H_ = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerRail_H_.transform.parent = oChurch.transform; //parenting
			oBellTowerRail_H_.name = "Bell Tower horizontal rail " + (++c);
			oBellTowerRail_H_.renderer.material.color = Color.black;
			oBellTowerRail_H_.transform.localScale.x = 0.005183983;
			oBellTowerRail_H_.transform.localScale.y = 0.1046447;
			oBellTowerRail_H_.transform.localScale.z = 0.01092465;
			aCollectionObj_6.Add(oBellTowerRail_H_);
		}//end if
		BTposX -= 0.217;
	}//end for
	c = 0;
	
	BTposX = this.RandX + 10.5047;
	BTposZ = this.RandZ + 5.3276;
	for(i=0; i<=16; i++){
		if(oCube){
			var oBellTowerRail_V = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerRail_V.transform.parent = oChurch.transform; //parenting
			oBellTowerRail_V.name = "Bell Tower vertical rail " + (++c);
			oBellTowerRail_V.renderer.material.color = Color.black;
			oBellTowerRail_V.transform.localScale.x = 0.005183983;
			oBellTowerRail_V.transform.localScale.y = 0.1046447;
			oBellTowerRail_V.transform.localScale.z = 0.01092465;
			aCollectionObj_6.Add(oBellTowerRail_V);
		}//end if
		BTposZ -= 0.217;
	}//end for
	
	BTposX = this.RandX + 6.3817;
	BTposZ = this.RandZ + 5.3276;
	for(i=0; i<=16; i++){
		if(oCube){
			var oBellTowerRail_V_ = Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerRail_V_.transform.parent = oChurch.transform; //parenting
			oBellTowerRail_V_.name = "Bell Tower vertical rail " + (++c);
			oBellTowerRail_V_.renderer.material.color = Color.black;
			oBellTowerRail_V_.transform.localScale.x = 0.005183983;
			oBellTowerRail_V_.transform.localScale.y = 0.1046447;
			oBellTowerRail_V_.transform.localScale.z = 0.01092465;
			aCollectionObj_6.Add(oBellTowerRail_V_);
		}//end if
		BTposZ -= 0.217;
	}//end for
	c = 0;
	
	BTposX = this.RandX + 8.4368;
	BTposY = 23.92;
	BTposZ = this.RandZ + 5.3288;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBellTowerMainRail_H= Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
				oBellTowerMainRail_H.transform.parent = oChurch.transform; //parenting
				oBellTowerMainRail_H.name = "Bell Tower main horizontal rail " + (++c);
				oBellTowerMainRail_H.renderer.material.color = Color.black;
				oBellTowerMainRail_H.transform.localScale.x = 0.005183983;
				oBellTowerMainRail_H.transform.localScale.y = 0.3257105;
				oBellTowerMainRail_H.transform.localScale.z = 0.01092465;
				oBellTowerMainRail_H.transform.eulerAngles.z = 90;
				aCollectionObj_6.Add(oBellTowerMainRail_H);
			}//end if
			BTposY -= 0.82; 
		}//end for
		BTposY = 23.92;
		BTposZ -= 3.6107;
	}//end for
	c = 0;
	
	BTposX = this.RandX + 10.5047;
	BTposY = 23.92;
	BTposZ = this.RandZ + 3.51628;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBellTowerMainRail_V= Instantiate(oCube, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
				oBellTowerMainRail_V.transform.parent = oChurch.transform; //parenting
				oBellTowerMainRail_V.name = "Bell Tower main vertical rail " + (++c);
				oBellTowerMainRail_V.renderer.material.color = Color.black;
				oBellTowerMainRail_V.transform.localScale.x = 0.005183983;
				oBellTowerMainRail_V.transform.localScale.y = 0.560019;
				oBellTowerMainRail_V.transform.localScale.z = 0.01092465;
				oBellTowerMainRail_V.transform.eulerAngles.x = 90;
				aCollectionObj_6.Add(oBellTowerMainRail_V);
			}//end if
			BTposY -= 0.82; 
		}//end for
		BTposY = 23.92;
		BTposX -= 4.1267;
	}//end for
	c = 0;
	//:::::::::::end rails::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//::::::::start cupola::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	oCupola = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	Destroy(oCupola);
	
	BTposX = this.RandX + 8.43;
	BTposY = 23.26;
	BTposZ = this.RandZ + 3.509899; 
	for(i=0; i<=1; i++){
		if(oCupola){
			var oBellTowerMainRailCpl= Instantiate(oCupola, Vector3(BTposX, BTposY, BTposZ), Quaternion.identity);
			oBellTowerMainRailCpl.transform.parent = oChurch.transform; //parenting
			oBellTowerMainRailCpl.name = "Bell Tower cupola";
			oBellTowerMainRailCpl.renderer.material.color = Color(0.59607, 0.08235, 0.00392, 0);
			if( i==1 ){
				oBellTowerMainRailCpl.transform.localScale.x = 0.1458287;
				oBellTowerMainRailCpl.transform.localScale.y = 0.3024061;
				oBellTowerMainRailCpl.transform.localScale.z = 0.2857603;
			}//end if
			else{
				oBellTowerMainRailCpl.transform.localScale.x = 0.270826;
				oBellTowerMainRailCpl.transform.localScale.y = 0.8189769;
				oBellTowerMainRailCpl.transform.localScale.z = 0.4915887;
			}//end else
			aCollectionObj_6.Add(oBellTowerMainRailCpl);
		}//end if
		BTposY += 2.6;
	}//end for
	//::::::::end cupola::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function BellTower(RandX, RandZ)
//-----------------------End BellTower-------------------------------------------------------------------


//---------------Start Front Part---------------------------------------------------------------------------
public function FrontPrt(RandX, RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	var oBack = Instantiate(oCube, Vector3(this.RandX + 4.50393, 2.4548, this.RandZ + 4.15462), Quaternion.identity); 
	oBack.transform.parent = oChurch.transform; //parenting
	oBack.name = "Back Part";
	oBack.renderer.material.color = Color(0.996, 0.9411, 0.8392, 0);
	oBack.transform.localScale.x = 0.300649;
	oBack.transform.localScale.y = 0.6070714;
	oBack.transform.localScale.z = 0.3997754;
	aCollectionObj_6.Add(oBack);
}// end function FrontPrt(RandX, RandZ)
//---------------End Front Part---------------------------------------------------------------------------


//-----------------Start Right Part-------------------------------------------------------------------------
public function RightPrt(RandX, RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	var oRight = Instantiate(oCube, Vector3(this.RandX - 9.17795, 2.4548, this.RandZ + 0.012966), Quaternion.identity); 
	oRight.transform.parent = oChurch.transform; //parenting
	oRight.name = "Right Part";
	oRight.renderer.material.color = Color(0.996, 0.9411, 0.8392, 0);
	oRight.transform.localScale.x = 0.4120472;
	oRight.transform.localScale.y = 0.6070714;
	oRight.transform.localScale.z = 0.9969666;
	aCollectionObj_6.Add(oRight);
}// end function RightPrt(RandX, RandZ)
//-----------------End Right Part-------------------------------------------------------------------------


//---------------------------Start Windows-------------------------------------------------------------------
public function Windows(RandX, RandZ){
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("window_church1"); //import texture for windows
	
	var nWind_X:float = this.RandX + 5.8255;
	var nWind_Y:float = 4.0296;
	var nWind_Z:float = this.RandZ + 5.50;
	
	//:::::Start Back Part Windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	oWindow.transform.position = Vector3(nWind_X, nWind_Y, nWind_Z);
	oWindow.transform.parent = oChurch.transform; //parenting
	oWindow.name = "Back Window 0";
	oWindow.transform.localScale.x = 0.05189104;
	oWindow.transform.localScale.y = 0.1531791;
	oWindow.transform.localScale.z = 0.0163088;
	aCollectionObj_6.Add(oWindow);
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow){
				var oBackWind = Instantiate(oWindow, Vector3(nWind_X - 1.3, nWind_Y, nWind_Z), Quaternion.identity);
				oBackWind.transform.parent = oChurch.transform; //parenting
				oBackWind.name = "Back Window " + (++c);
				oBackWind.transform.localScale.x = 0.05189104;
				oBackWind.transform.localScale.y = 0.1531791;
				oBackWind.transform.localScale.z = 0.0163088;
				nWind_Y -= 2;
				aCollectionObj_6.Add(oBackWind);
			}//end if
		}//end for
		nWind_Y = 4.0296;
		nWind_X -= 1.3;
	}//end for
	c = 0;
	
	
	nWind_X = this.RandX + 2.6062;
	nWind_Y = 4.0296;
	nWind_Z = this.RandZ + 4.3227;
	
	for(i=0; i<=1; i++){
		if(oWindow){
			var oBackSideWind = Instantiate(oWindow, Vector3(nWind_X, nWind_Y, nWind_Z), Quaternion.identity);
			oBackSideWind.transform.parent = oChurch.transform; //parenting
			oBackSideWind.name = "Back side Window " + (++c);
			oBackSideWind.transform.localScale.x = 0.1261232;
			oBackSideWind.transform.localScale.y = 0.1531791;
			oBackSideWind.transform.localScale.z = 0.0163088;
			oBackSideWind.transform.eulerAngles.y = 90;
			nWind_Y -= 2;
			aCollectionObj_6.Add(oBackSideWind);
		}//end if
	}//end for
	c = 0;
	//:::::End Back Part Windows::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	//:::::Start Right Side Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	nWind_X = this.RandX - 6.9751;
	nWind_Y = 4.0296;
	nWind_Z = this.RandZ + 3.3014;
	
	for(i=0; i<=3; i++){
		if(oWindow){
			var oRghtSideWind = Instantiate(oWindow, Vector3(nWind_X, nWind_Y, nWind_Z), Quaternion.identity);
			oRghtSideWind.transform.parent = oChurch.transform; //parenting
			oRghtSideWind.name = "Right side back window " + (++c);
			oRghtSideWind.transform.localScale.x = 0.05189104;
			oRghtSideWind.transform.localScale.y = 0.1531791;
			oRghtSideWind.transform.localScale.z = 0.0163088;
			aCollectionObj_6.Add(oRghtSideWind);
			
			if(i ==1)
				nWind_X -= 1.8;
			else 
				nWind_X -= 1.3;
		}//end if
	}//end for
	c = 0;
	
	nWind_X = this.RandX - 8.2751;
	if(oWindow){
		var oRghtSideDnWind = Instantiate(oWindow, Vector3(nWind_X, nWind_Y - 2, nWind_Z), Quaternion.identity);
		oRghtSideDnWind.transform.parent = oChurch.transform; //parenting
		oRghtSideDnWind.name = "Right side back window 5";
		oRghtSideDnWind.transform.localScale.x = 0.05189104;
		oRghtSideDnWind.transform.localScale.y = 0.1531791;
		oRghtSideDnWind.transform.localScale.z = 0.0163088;
		aCollectionObj_6.Add(oRghtSideDnWind);
	}//end if 
	
	
	nWind_X = this.RandX - 6.9751;
	nWind_Y = 4.0296;
	nWind_Z = this.RandZ - 3.2817;
	
	for(i=0; i<=3; i++){
		if(oWindow){
			var oRghtSideFrontWind = Instantiate(oWindow, Vector3(nWind_X, nWind_Y, nWind_Z), Quaternion.identity);
			oRghtSideFrontWind.transform.parent = oChurch.transform; //parenting
			oRghtSideFrontWind.name = "Right side front window " + (++c);
			oRghtSideFrontWind.transform.localScale.x = 0.05189104;
			oRghtSideFrontWind.transform.localScale.y = 0.1531791;
			oRghtSideFrontWind.transform.localScale.z = 0.0163088;
			aCollectionObj_6.Add(oRghtSideFrontWind);
			if(i ==1)
				nWind_X -= 1.8;
			else 
				nWind_X -= 1.3;
		}//end if
	}//end for
	c = 0;
	
	nWind_X = this.RandX - 8.2751;
	if(oWindow){
		var oRghtSideDnFrontWind = Instantiate(oWindow, Vector3(nWind_X, nWind_Y - 2, nWind_Z), Quaternion.identity);
		oRghtSideDnFrontWind.transform.parent = oChurch.transform; //parenting
		oRghtSideDnFrontWind.name = "Right side front window 5";
		oRghtSideDnFrontWind.transform.localScale.x = 0.05189104;
		oRghtSideDnFrontWind.transform.localScale.y = 0.1531791;
		oRghtSideDnFrontWind.transform.localScale.z = 0.0163088;
		aCollectionObj_6.Add(oRghtSideDnFrontWind);
	}//end if 
	
	//:::::End Right Side Windows:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Windows(RandX, RandZ)
//---------------------------End Windows-------------------------------------------------------------------



//-----------------------------Start Doors-----------------------------------------------------------------
public function Doors(RandX, RandZ){

	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oWindow);
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("door_corfu2"); //import texture for door
	
	if(oWindow){
		var oBckPrtDoor = Instantiate(oWindow, Vector3(this.RandX + 5.8255, 1.503612, this.RandZ + 5.48), Quaternion.identity);
		oBckPrtDoor.name = "Back part door";
		oBckPrtDoor.transform.parent = oChurch.transform;	
		oBckPrtDoor.transform.localScale.x = 0.0600062;
		oBckPrtDoor.transform.localScale.y = 0.291657;
		oBckPrtDoor.transform.localScale.z = 0.019;
		aCollectionObj_6.Add(oBckPrtDoor);
	}//end if
	
	if(oWindow){
		var oRightPrtBackDoor = Instantiate(oWindow, Vector3(this.RandX - 10.7118, 1.253612, this.RandZ + 3.3214), Quaternion.identity);
		oRightPrtBackDoor.name = "Right part back door";
		oRightPrtBackDoor.transform.parent = oChurch.transform;	
		oRightPrtBackDoor.transform.localScale.x = 0.08101162;
		oRightPrtBackDoor.transform.localScale.y = 0.291657;
		oRightPrtBackDoor.transform.localScale.z = 0.019;
		aCollectionObj_6.Add(oRightPrtBackDoor);
	}//end if
	
	if(oWindow){
		var oRightPrtFrontDoor = Instantiate(oWindow, Vector3(this.RandX - 10.7118, 1.253612, this.RandZ - 3.3017), Quaternion.identity);
		oRightPrtFrontDoor.name = "Right part front door";
		oRightPrtFrontDoor.transform.parent = oChurch.transform;	
		oRightPrtFrontDoor.transform.localScale.x = 0.08101162;
		oRightPrtFrontDoor.transform.localScale.y = 0.291657;
		oRightPrtFrontDoor.transform.localScale.z = 0.019;
		aCollectionObj_6.Add(oRightPrtFrontDoor);
	}//end if

oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
Destroy(oCube);
 //Color(0.9490, 0.8901, 0.7686, 0);

var posX: float = this.RandX - 1.28;
var posY: float = 3.2;
var posZ: float = this.RandZ + 3.3;
if(oCube){
	var oDoorEaves = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
	oDoorEaves.transform.parent = oChurch.transform;
	oDoorEaves.name = "door eaves";
	oDoorEaves.renderer.material.mainTexture = Resources.Load("DoorEaves");
	oDoorEaves.transform.localScale.x = 0.1762082;
	oDoorEaves.transform.localScale.y = 0.04129031;
	oDoorEaves.transform.localScale.z = 0.121307;
	aCollectionObj_6.Add(oDoorEaves);
}//end if

posX = this.RandX - 0.28;
posY = 3.01;
posZ = this.RandZ + 3.5;
for(i=0; i<=1; i++){	
	for(j=0; j<=1; j++){
		if(oCube){
			var oDoorUpprClmn = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
			oDoorUpprClmn.transform.parent = oDoorEaves.transform;
			oDoorUpprClmn.name = "door upper column part " + (++c);
			oDoorUpprClmn.renderer.material.color = Color(0.4588, 0.3647, 0.2431, 0);
			if(j==0){
				oDoorUpprClmn.transform.localScale.x = 0.1762082;
				oDoorUpprClmn.transform.localScale.y = 0.170057;
				oDoorUpprClmn.transform.localScale.z = 0.7051173;
			}//end if
			else{
				oDoorUpprClmn.transform.localScale.x = 0.154843;
				oDoorUpprClmn.transform.localScale.y = 0.2416804;
				oDoorUpprClmn.transform.localScale.z = 0.581718;
			}//else
			aCollectionObj_6.Add(oDoorUpprClmn);
		}//end if
		posY -= 0.05;
	}//end for
	posY = 3.01;
	posX -= 2;
}//end for
c = 0;

oCylinder = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
Destroy(oCylinder);

posX = this.RandX - 0.28;
posY = 2.90;
for(i=0; i<=1; i++){
	for(j=0; j<=1; j++){
		if(oCylinder){
			var oDoorUpprClmnCldr = Instantiate(oCylinder, Vector3(posX, posY, posZ), Quaternion.identity);
			if(j==0){
				oDoorUpprClmnCldr.name = "door upper column part cylinder " + (++c);
				oDoorUpprClmnCldr.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 0);
				oDoorUpprClmnCldr.transform.parent = oDoorEaves.transform;
				oDoorUpprClmnCldr.transform.localScale.x = 0.1329714;
				oDoorUpprClmnCldr.transform.localScale.y = 0.1246673;
				oDoorUpprClmnCldr.transform.localScale.z = 0.3851586;
			}//end if
			else{
				oDoorUpprClmnCldr.name = "door column " + (++c);
				oDoorUpprClmnCldr.renderer.material.color = Color.white;
				oDoorUpprClmnCldr.transform.parent = oDoorEaves.transform;
				oDoorUpprClmnCldr.transform.localScale.x = 0.120656;
				oDoorUpprClmnCldr.transform.localScale.y = 3.634116;
				oDoorUpprClmnCldr.transform.localScale.z = 0.3494862;
			}//else
			aCollectionObj_6.Add(oDoorUpprClmnCldr);
		}//end if
		posY -= 1.18;
	}//end for
	posY = 2.90;
	posX -= 2;
}//end for
c = 0;

posX = this.RandX - 0.28;
posY = 0.52;
posZ = this.RandZ + 3.5;

for(i=0; i<=1; i++){
	for(j=0; j<=2; j++){
		if(oCube){
			var oDoorlwrClmn = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
			oDoorlwrClmn.transform.parent = oDoorEaves.transform;
			oDoorlwrClmn.name = "door lower column part " + (++c);
			oDoorlwrClmn.renderer.material.color = Color(0.4588, 0.3647, 0.2431, 0);
			if(j==0){
				oDoorlwrClmn.transform.localScale.x = 0.154843;
				oDoorlwrClmn.transform.localScale.y = 0.3658382;
				oDoorlwrClmn.transform.localScale.z = 0.581718;
			}//end if
			if(j==1){
				oDoorlwrClmn.transform.localScale.x = 0.2026358;
				oDoorlwrClmn.transform.localScale.y = 0.4652826;
				oDoorlwrClmn.transform.localScale.z = 0.7051173;
			}//end if
			else if(j==2){
				oDoorlwrClmn.transform.localScale.x = 0.2489888;
				oDoorlwrClmn.transform.localScale.y = 0.355633;
				oDoorlwrClmn.transform.localScale.z = 0.7787634;
			}//else if
			aCollectionObj_6.Add(oDoorlwrClmn);
		}//end if
		posY -= 0.13;
	}//end for
	posY = 0.52;
	posX -= 2;
}//end for


//Create a door face clone at the back face of the church
posX = this.RandX - 1.28;
posY = 3.2;
posZ = this.RandZ - 3.3;

if(oDoorEaves){
	var ocloneDoorBck = Instantiate(oDoorEaves, Vector3(posX, posY, posZ), Quaternion.identity);
	ocloneDoorBck.transform.parent = oChurch.transform;
	ocloneDoorBck.name = "door back face";
	ocloneDoorBck.transform.localScale.x = 0.1762082;
	ocloneDoorBck.transform.localScale.y = 0.04129031;
	ocloneDoorBck.transform.localScale.z = 0.121307;
	ocloneDoorBck.transform.eulerAngles.y = 180;
	aCollectionObj_6.Add(ocloneDoorBck);
}//end if

}//end function Doors(RandX, RandZ)
//-----------------------------End Doors-----------------------------------------------------------------


//--------------------------------Start Stairs------------------------------------------------------------
public function Stairs(RandX, RandZ){

	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	
	var stairsX:float = this.RandX + 5.8255;
	var stairsY:float = 0.353612;
	var stairsZ:float = this.RandZ + 5.5689;
	for(i=0; i<=2; i++){
		if(oCube){
			var oFrntPrtStairs = Instantiate(oCube, Vector3(stairsX, stairsY, stairsZ), Quaternion.identity);
			oFrntPrtStairs.name = "back part stairs " + (++c);
			oFrntPrtStairs.transform.parent = oChurch.transform;	
			oFrntPrtStairs.transform.localScale.x = 0.0600062;
			oFrntPrtStairs.transform.localScale.y = 0.01337241;
			if(i==1)
				oFrntPrtStairs.transform.localScale.z = 0.058875;
			else if(i==2)
				oFrntPrtStairs.transform.localScale.z = 0.08348349;
			else	
				oFrntPrtStairs.transform.localScale.z = 0.03248049;
			aCollectionObj_6.Add(oFrntPrtStairs);
			stairsY -= 0.10;
			stairsZ += 0.087;
		}//end if
	}//end for
	c = 0;
	
	stairsX = this.RandX - 1.2758;
	stairsY = 0.253612;
	stairsZ = this.RandZ + 3.4055;
	for(i=0; i<=1; i++){
		if(oCube){
			var oMainBackStair = Instantiate(oCube, Vector3(stairsX, stairsY, stairsZ), Quaternion.identity);
			oMainBackStair.name = "main stairs " + (++c);
			oMainBackStair.transform.parent = oChurch.transform;
			oMainBackStair.transform.localScale.x = 0.1102614;
			oMainBackStair.transform.localScale.y = 0.01337241;
			oMainBackStair.transform.localScale.z = 0.1215557;
		}//end if
		stairsZ -= 6.779146;
	}//end for
	c = 0;
	
	stairsX = this.RandX - 4.6078;
	stairsY = 0.153612;
	stairsZ = this.RandZ + 0.6055836;
	if(oCube){
	var oMainBackStairDn = Instantiate(oCube, Vector3(stairsX, stairsY, stairsZ), Quaternion.identity);
	oMainBackStairDn.name = "main back stair down";
	oMainBackStairDn.transform.parent = oChurch.transform;
	oMainBackStairDn.transform.localScale.x = 1.126423;
	oMainBackStairDn.transform.localScale.y = 0.01337241;
	oMainBackStairDn.transform.localScale.z = 1.484616;
	}//end if
}//end function Stairs(RandX, RandZ)
//--------------------------------End Stairs------------------------------------------------------------



//---------------------------------Start Eaves-----------------------------------------------------------
public function Eaves(RandX, RandZ){

	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);	
	
	var eavesX:float = this.RandX + 5.8255;
	var eavesY:float = 2.6296;
	var eavesZ:float = this.RandZ + 5.52;
	
	for(i=0; i<=2; i++){
		if(oCube){
			var oBckPrtEaves = Instantiate(oCube, Vector3(eavesX, eavesY, eavesZ), Quaternion.identity);
			oBckPrtEaves.name = "back part eaves " + (++c);
			oBckPrtEaves.transform.parent = oChurch.transform;	
			if(i>0){
				oBckPrtEaves.transform.localScale.x = 0.05501559;
				oBckPrtEaves.transform.localScale.y = 0.01000328;
			}
			else{
				oBckPrtEaves.transform.localScale.x = 0.06241104;
				oBckPrtEaves.transform.localScale.y = 0.01000328;
			}
			oBckPrtEaves.transform.localScale.z = 0.04600906;
			aCollectionObj_6.Add(oBckPrtEaves);
			eavesX -= 1.3;
		}//end if
	}//end for
	c = 0;
	
	eavesX = this.RandX + 2.4730;
	eavesY = 4.6296;
	eavesZ = this.RandZ + 4.3227;
	
	for(i=0; i<=1; i++){
		if(oCube){
			var oBckPrtSideEaves = Instantiate(oCube, Vector3(eavesX, eavesY, eavesZ), Quaternion.identity);
			oBckPrtSideEaves.name = "Back part side eave " + (++c);
			oBckPrtSideEaves.transform.parent = oChurch.transform;	
			oBckPrtSideEaves.transform.localScale.x = 0.130525;
			oBckPrtSideEaves.transform.localScale.y = 0.01000328;
			oBckPrtSideEaves.transform.localScale.z = 0.01852396;
			oBckPrtSideEaves.transform.eulerAngles.y = 90;
			aCollectionObj_6.Add(oBckPrtSideEaves);
			eavesY -= 2;
		}//end if
	}//end for
	c = 0;
	
	
	eavesX = this.RandX - 10.7118;
	eavesY = 2.453612;
	eavesZ = this.RandZ + 3.3821;
	
	if(oCube){
		var oBckPrtRghSideEave = Instantiate(oCube, Vector3(eavesX, eavesY, eavesZ), Quaternion.identity);
		oBckPrtRghSideEave.name = "Back part right side eave";
		oBckPrtRghSideEave.transform.parent = oChurch.transform;	
		oBckPrtRghSideEave.transform.localScale.x = 0.08191628;
		oBckPrtRghSideEave.transform.localScale.y = 0.01000328;
		oBckPrtRghSideEave.transform.localScale.z = 0.04600906;
		aCollectionObj_6.Add(oBckPrtRghSideEave);
	}//end if
	
	eavesZ = this.RandZ - 3.33347;
	
	if(oCube){
		var oFrntPrtRghSideEave = Instantiate(oCube, Vector3(eavesX, eavesY, eavesZ), Quaternion.identity);
		oFrntPrtRghSideEave.name = "Front part right side eave";
		oFrntPrtRghSideEave.transform.parent = oChurch.transform;	
		oFrntPrtRghSideEave.transform.localScale.x = 0.08191628;
		oFrntPrtRghSideEave.transform.localScale.y = 0.01000328;
		oFrntPrtRghSideEave.transform.localScale.z = 0.04600906;
		aCollectionObj_6.Add(oFrntPrtRghSideEave);
	}//end if
	
	eavesX = this.RandX;
	eavesY = 7.6;
	eavesZ = this.RandZ;
	
	for(i=0; i<=2; i++){
		if(oCube){
			var oMainChurchEave = Instantiate(oCube, Vector3(eavesX, eavesY, eavesZ), Quaternion.identity);
			oMainChurchEave.name = "main Church eave " + (++c);
			oMainChurchEave.transform.parent = oChurch.transform;	
			if( i==1 ){
				oMainChurchEave.transform.localScale.x = 1.018288;
				oMainChurchEave.transform.localScale.z = 1.023838;
			}//end if
			else if( i==2){
				oMainChurchEave.transform.localScale.x = 1.005431;
				oMainChurchEave.transform.localScale.z = 1.011043;
			}//end else if
			else{
				oMainChurchEave.transform.localScale.x = 1.031216;
				oMainChurchEave.transform.localScale.z = 1.036801;
			}//end else
			oMainChurchEave.transform.localScale.y = 0.02880077;
			aCollectionObj_6.Add(oMainChurchEave);
		}//end if
		eavesY -= 0.20;
	}//end for
	c = 0;
	
}//end function Eaves(RandX, RandZ)
//---------------------------------End Eaves-----------------------------------------------------------


//-----------------------------Start Roofs----------------------------------------------------------------
//::::::Start Main Roof::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
public function MainRoof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Main Roof";
	tmpobj.transform.parent = oChurch.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	

	//vertices positioning
	verts[0] = new Vector3(this.RandX - 9, 7.8, this.RandZ + 3.15); //P1 
	verts[1] = new Vector3(this.RandX - 9, 9.1, this.RandZ + 6.575); //P2
	verts[2] = new Vector3(this.RandX - 9, 7.8, this.RandZ + 10); //P3
	
	verts[3] = new Vector3(this.RandX + 4, 7.8, this.RandZ + 10); //P4
	verts[4] = new Vector3(this.RandX + 4, 9.1, this.RandZ + 6.575); //P5
	verts[5] = new Vector3(this.RandX + 4, 7.8, this.RandZ + 3.15); //P6


	uv[0] = new Vector2(1, 1);
	uv[1] = new Vector2(0, 0.5);
	uv[2] = new Vector2(1, 0);
	
	uv[3] = new Vector2(0, 0);
	uv[4] = new Vector2(1, 0.5);
	uv[5] = new Vector2(0, 1);
	
	
	//triangles 
	tri[0] = 1; 
	tri[1] = 0; 
	tri[2] = 2; 
       
	tri[3] = 1; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 1;
	tri[7] = 3;
	tri[8] = 4;
	
	tri[9] = 4;
	tri[10] = 3;
	tri[11] = 5;
	
	tri[12] = 4;
	tri[13] = 5;
	tri[14] = 1;
	
	tri[15] = 1;
	tri[16] = 5;
	tri[17] = 0;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Main Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	mf.mesh = mesh;
	tmpobj.renderer.material.mainTexture = Resources.Load("tiled_roof_red_grey"); //import texture
}//end function MainRoof(RandX, RandZ)
//::::::end Main Roof::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::start Right Roof::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
public function RightRoof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Right Roof";
	tmpobj.transform.parent = oChurch.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	

	//vertices positioning
	verts[0] = new Vector3(this.RandX - 14.5502, 4.8, this.RandZ + 3.15); //P1 
	verts[1] = new Vector3(this.RandX - 14.5502, 6.1, this.RandZ + 6.575); //P2
	verts[2] = new Vector3(this.RandX - 14.5502, 4.8, this.RandZ + 10); //P3
	
	verts[3] = new Vector3(this.RandX - 8.9751, 4.8, this.RandZ + 10); //P4
	verts[4] = new Vector3(this.RandX - 8.9751, 6.1, this.RandZ + 6.575); //P5
	verts[5] = new Vector3(this.RandX - 8.9751, 4.8, this.RandZ + 3.15); //P6


	uv[0] = new Vector2(1, 1);
	uv[1] = new Vector2(0, 0.5);
	uv[2] = new Vector2(1, 0);
	
	uv[3] = new Vector2(0, 0);
	uv[4] = new Vector2(1, 0.5);
	uv[5] = new Vector2(0, 1);
	
	
	//triangles 
	tri[0] = 1; 
	tri[1] = 0; 
	tri[2] = 2; 
       
	tri[3] = 1; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 1;
	tri[7] = 3;
	tri[8] = 4;
	
	tri[9] = 4;
	tri[10] = 3;
	tri[11] = 5;
	
	tri[12] = 4;
	tri[13] = 5;
	tri[14] = 1;
	
	tri[15] = 1;
	tri[16] = 5;
	tri[17] = 0;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Right Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	mf.mesh = mesh;
	tmpobj.renderer.material.mainTexture = Resources.Load("tiled_roof_red_grey"); //import texture
}//end function RightRoof(RandX, RandZ)
//::::::end Right Roof::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//::::::::::::::Start Back Roof::::::::::::::::::::::::::::::::::::::::::::::
public function BackRoof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Back Roof";
	tmpobj.transform.parent = oChurch.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[12]; //3 vertices * 4 triangles 
	

	//vertices positioning
	verts[0] = new Vector3(this.RandX - 0.05, 6.1, this.RandZ + 9.85); //P1 
	verts[1] = new Vector3(this.RandX - 0.05, 4.8, this.RandZ + 9.85); //P2
	verts[2] = new Vector3(this.RandX - 0.05, 4.8, this.RandZ + 12.2); //P3
	
	verts[3] = new Vector3(this.RandX + 3.85, 4.8, this.RandZ + 12.2); //P4
	verts[4] = new Vector3(this.RandX + 3.85, 4.8, this.RandZ + 9.85); //P5
	verts[5] = new Vector3(this.RandX + 3.85, 6.1, this.RandZ + 9.85); //P6


	uv[0] = new Vector2(1, 1);
	uv[1] = new Vector2(0, 0.5);
	uv[2] = new Vector2(1, 0);
	
	uv[3] = new Vector2(0, 0);
	uv[4] = new Vector2(1, 0.5);
	uv[5] = new Vector2(0, 1);
	
	
	//triangles 
	tri[0] = 0; 
	tri[1] = 1; 
	tri[2] = 2; 
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 0;
	tri[7] = 3;
	tri[8] = 5;
	
	tri[9] = 3; 
	tri[10] = 4;  
	tri[11] = 5; 
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Back Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	mf.mesh = mesh;
	tmpobj.renderer.material.mainTexture = Resources.Load("tiled_roof_red_grey"); //import texture
}//end function RightRoof(RandX, RandZ)

//:::::::::::::end Back Roof::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//-----------------------------End Roofs----------------------------------------------------------------



//---------------------------------------- Start Main Windows---------------------------------------------
public function MainWind(RandX, RandZ){
//Arch Windows Upper eaves
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	oCube.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 0);
	
	var oUpperEave_ = GameObject.CreatePrimitive(PrimitiveType.Cube);
	oUpperEave_.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 0);
	oUpperEave_.transform.position = Vector3(this.RandX + 1.31, 6.46, this.RandZ + 3.3);
	oUpperEave_.transform.parent = oChurch.transform;
	oUpperEave_.name = "Upper window eave 0";
	oUpperEave_.transform.localScale.x = 0.1257709;
	oUpperEave_.transform.localScale.y = 0.02279421;
	oUpperEave_.transform.localScale.z = 0.06467526;
	aCollectionObj_6.Add(oUpperEave_);
	
	var posX:float = this.RandX + 1.31;
	var posY:float = 6.64;
	var posZ:float = this.RandZ + 3.3;
	if(oCube){
			var oUpperEave = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
			oUpperEave.name = "upper window eave 2";
			oUpperEave.transform.parent = oUpperEave_.transform;	
			oUpperEave.transform.localScale.x = 1.154025;
			oUpperEave.transform.localScale.y = 1.040318;
			oUpperEave.transform.localScale.z = 1.1768;
			aCollectionObj_6.Add(oUpperEave);
	}//end if
	
	
	//Arch Window Columns
	posX = this.RandX + 2;
	posY = 5.65;
	posZ = this.RandZ + 3.3;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oUpperPrtClmn = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
				oUpperPrtClmn.name = "upper part column " + (++c);
				oUpperPrtClmn.transform.parent = oUpperEave_.transform;	
				if(j==1){
					oUpperPrtClmn.transform.localScale.x = 0.2343267;
					oUpperPrtClmn.transform.localScale.z = 0.7816373;
				}//end if
				else{
					oUpperPrtClmn.transform.localScale.x = 0.2915291;
					oUpperPrtClmn.transform.localScale.z = 0.7816373;
				}//end else
				oUpperPrtClmn.transform.localScale.y = 1.188682;
				aCollectionObj_6.Add(oUpperPrtClmn);
			}//end if
			posY -= 0.1;
		}//end for
		posY = 5.65;
		posX -= 1.35;
	}//end for
	c = 0;
	
	posX = this.RandX + 2;
	posY = 5.06;
	posZ = this.RandZ + 3.3;
	
	for(i=0; i<=1; i++){
		if(oCube){
			var oColumnWindArch = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
				oColumnWindArch.name = "Arch window column " + (++c);
				oColumnWindArch.transform.parent = oUpperEave_.transform;
				oColumnWindArch.transform.localScale.x = 0.1794632;
				oColumnWindArch.transform.localScale.y = 5.113039;
				oColumnWindArch.transform.localScale.z = 0.587822;
				aCollectionObj_6.Add(oColumnWindArch);
		}//end if
		posX -= 1.35;
	}//end for
	c = 0;
	
	posX = this.RandX + 2;
	posY = 4.57;
	posZ = this.RandZ + 3.3;
	
	for(i=0; i<=1; i++){
		if(oCube){
			var oLowerPrtClmn = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
				oLowerPrtClmn.name = "lower part column " + (++c);
				oLowerPrtClmn.transform.parent = oUpperEave_.transform;
				oLowerPrtClmn.transform.localScale.x = 0.2381323;
				oLowerPrtClmn.transform.localScale.y = 0.825889;
				oLowerPrtClmn.transform.localScale.z = 0.7770827;
				aCollectionObj_6.Add(oLowerPrtClmn);
		}//end if
		posX -= 1.35;
	}//end for
	c = 0;
	
	//Arch Windows Lower eaves
	posX = this.RandX + 1.33;
	posY = 4.36;
	posZ = this.RandZ + 3.3;
	for(i=0; i<=1; i++){
		if(oCube){
			var oLowerEave = Instantiate(oCube, Vector3(posX, posY, posZ), Quaternion.identity);
			oLowerEave.name = "lower window eave " + (++c);
			oLowerEave.transform.parent = oUpperEave_.transform;	
			if(i==1){
				oLowerEave.transform.localScale.x = 1.317234;
				oLowerEave.transform.localScale.z = 0.9266781;
			}//end if
			else{
				oLowerEave.transform.localScale.x = 1.122489;
				oLowerEave.transform.localScale.z = 0.7780409;
			}//end else
			oLowerEave.transform.localScale.y = 0.483218;
			aCollectionObj_6.Add(oLowerEave);
		}//end if
		posY += 0.09;
	}//end for
	c = 0;
	
	//Create Clones (front side)
	posX = this.RandX + 1.31;
	posY = 6.46;
	for(i=0; i<=2; i++){
		if(oUpperEave_){
			var ocloneMainWind_frnt = Instantiate(oUpperEave_, Vector3(posX, posY, posZ), Quaternion.identity);
			ocloneMainWind_frnt.name = "Upper window eave " + (++c);
			ocloneMainWind_frnt.transform.parent = oChurch.transform;
			ocloneMainWind_frnt.transform.localScale.x = 0.1257709;
			ocloneMainWind_frnt.transform.localScale.y = 0.02279421;
			ocloneMainWind_frnt.transform.localScale.z = 0.06467526;
			aCollectionObj_6.Add(ocloneMainWind_frnt);
			posX -= 2.6;
		}//end if
	}//end for
	c = 0;
	
	//Create Clones (back side)
	posX = this.RandX - 3.91;
	posY = 6.46;
	posZ = this.RandZ - 3.3;
	for(i=0; i<=2; i++){
		if(oUpperEave_){
			var ocloneMainWind_bck = Instantiate(oUpperEave_, Vector3(posX, posY, posZ), Quaternion.identity);
			ocloneMainWind_bck.name = "Upper window eave " + (++c);
			ocloneMainWind_bck.transform.parent = oChurch.transform;
			ocloneMainWind_bck.transform.localScale.x = 0.1257709;
			ocloneMainWind_bck.transform.localScale.y = 0.02279421;
			ocloneMainWind_bck.transform.localScale.z = 0.06467526;
			aCollectionObj_6.Add(ocloneMainWind_bck);
			posX += 2.6;
		}//end if
	}//end for
	c = 0;

}//end function MainWind(RandX, RandZ)
//-------------------------------------- End Main Windows---------------------------------------------



//-------------------------------------Start Triangle Eaves----------------------------------------------
private function TriangleEaves(RandX, RandZ, tmpobj){
	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Door Roof";
	//tmpobj.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 0); 
	tmpobj.transform.parent = oChurch.transform;
	
	var verts: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var normals: Vector3[] = new Vector3[6];
	var tri: int[] = new int[24]; //( 3 vertices * 8 triangles ) 
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX + 0.02, 3.36, this.RandZ + 3.66); //P1 
	verts[1] = new Vector3(this.RandX + 0.02, 3.36, this.RandZ + 2.9); //P2 
	verts[2] = new Vector3(this.RandX - 1.28, 3.7, this.RandZ + 3.66); //P3 
	verts[3] = new Vector3(this.RandX - 1.28, 3.7, this.RandZ + 2.9); //P4 
	verts[4] = new Vector3(this.RandX - 2.58, 3.36, this.RandZ + 2.9); //P5 
	verts[5] = new Vector3(this.RandX - 2.58, 3.36, this.RandZ + 3.66); //P6 
	
	//normals
	normals[0] = new Vector3(0, 0, 1);
	normals[1] = new Vector3(0, 0, 1);
	normals[2] = new Vector3(0, 0, 1);
	normals[3] = new Vector3(0, 0, 1);
	normals[4] = new Vector3(0, 0, 1);
	normals[5] = new Vector3(0, 0, 1);
	
	//uv mapping (textures)
	uv[0] = new Vector2(0, 0);
	uv[1] = new Vector2(0, 1);
	uv[2] = new Vector2(0.5, 0); 
	uv[3] = new Vector2(0.5, 1);
	uv[4] = new Vector2(1, 1);
	uv[5] = new Vector2(1, 0);
	
	//triangles 
	tri[0] = 2;
	tri[1] = 0;
	tri[2] = 3;
       
	tri[3] = 3;
	tri[4] = 0;
	tri[5] = 1;
	
	tri[6] = 1;
	tri[7] = 4;
	tri[8] = 3;
	
	tri[9] = 4;
	tri[10] = 5;
	tri[11] = 3;
	
	tri[12] = 5;
	tri[13] = 2;
	tri[14] = 3;
	
	tri[15] = 2;
	tri[16] = 5;
	tri[17] = 0;
	
	tri[18] = 0;
	tri[19] = 4;
	tri[20] = 1;
	
	tri[21] = 4;
	tri[22] = 0;
	tri[23] = 5;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Door Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("door_Roof_2");
	mf.mesh = mesh;
}//end function TriangleEaves(RandX, RandZ, tmpobj)
//-------------------------------------End Triangle Eaves----------------------------------------------



//--------------------------Start Arch-------------------------------------------------------------------
private function Arch(RandX, RandZ, oArch) {
	oArch = new GameObject();
	var mf: MeshFilter = oArch.AddComponent(MeshFilter);
	
	oArch.AddComponent(MeshRenderer);
	oArch.name = "Arch";
	oArch.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 1);
	oArch.transform.parent = oChurch.transform;
	
	var verts: Vector3[] = new Vector3[12];
	var uv: Vector2[] = new Vector2[12];
	var normals: Vector3[] = new Vector3[12];
	var tri: int[] = new int[60]; //( 3 vertices * 10 triangles ) * 2 (two face arch mesh)
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX + 1.82, 5.95, this.RandZ + 3.3); //P1
	verts[1] = new Vector3(this.RandX + 1.82, 5.65, this.RandZ + 3.3); //P2
	verts[2] = new Vector3(this.RandX + 2.12, 5.65, this.RandZ + 3.3); //P3
	verts[3] = new Vector3(this.RandX + 2.12, 6.45, this.RandZ + 3.3); //P4
	verts[4] = new Vector3(this.RandX + 0.52, 6.45, this.RandZ + 3.3); //P5
	verts[5] = new Vector3(this.RandX + 0.52, 5.65, this.RandZ + 3.3); //P6
	verts[6] = new Vector3(this.RandX + 0.82, 5.65, this.RandZ + 3.3); //P7
	verts[7] = new Vector3(this.RandX + 0.82, 5.95, this.RandZ + 3.3); //P8
	verts[8] = new Vector3(this.RandX + 0.92, 6.1, this.RandZ + 3.3); //P9
	verts[9] = new Vector3(this.RandX + 1.12, 6.2, this.RandZ + 3.3); //P10
	verts[10] = new Vector3(this.RandX + 1.52, 6.2, this.RandZ + 3.3); //P11
	verts[11] = new Vector3(this.RandX + 1.72, 6.1, this.RandZ + 3.3); //P12
	
	//normals
	normals[0] = new Vector3(1, 0, 1);
	normals[1] = new Vector3(1, 0, 1);
	normals[2] = new Vector3(1, 0, 1);
	normals[3] = new Vector3(1, 0, 1);
	normals[4] = new Vector3(1, 0, 1);
	normals[5] = new Vector3(1, 0, 1);
	normals[6] = new Vector3(1, 0, 1);
	normals[7] = new Vector3(1, 0, 1);
	normals[8] = new Vector3(1, 0, 1);
	normals[9] = new Vector3(1, 0, 1);
	normals[10] = new Vector3(1, 0, 1);
	normals[11] = new Vector3(1, 0, 1);
	
	//triangles 
	tri[0] = 0; 
	tri[1] = 1; 
	tri[2] = 2; 
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 0;
	tri[7] = 3;
	tri[8] = 11;
	
	tri[9] = 11;
	tri[10] = 3;
	tri[11] = 10;
	
	tri[12] = 10;
	tri[13] = 3;
	tri[14] = 4;
	
	tri[15] = 10;
	tri[16] = 4;
	tri[17] = 9;
	
	tri[18] = 9;
	tri[19] = 4;
	tri[20] = 8;
	
	tri[21] = 8;
	tri[22] = 4;
	tri[23] = 7;
	
	tri[24] = 7;
	tri[25] = 4;
	tri[26] = 5;
	
	tri[27] = 7;
	tri[28] = 5;
	tri[29] = 6;
	
	tri[30] = 0;
	tri[31] = 2;
	tri[32] = 1;
	
	tri[33] = 0;
	tri[34] = 3;
	tri[35] = 2;
	
	tri[36] = 11;
	tri[37] = 3;
	tri[38] = 0;
	
	tri[39] = 10;
	tri[40] = 3;
	tri[41] = 11;
	
	tri[42] = 10;
	tri[43] = 4;
	tri[44] = 3;
	
	tri[45] = 9;
	tri[46] = 4;
	tri[47] = 10;
	
	tri[48] = 8;
	tri[49] = 4;
	tri[50] = 9;
	
	tri[51] = 7;
	tri[52] = 4;
	tri[53] = 8;
	
	tri[54] = 7;
	tri[55] = 5;
	tri[56] = 4;
	
	tri[57] = 7;
	tri[58] = 6;
	tri[59] = 5;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Arch";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	mf.mesh = mesh;
}//end function Arch(Rand_X, Rand_Z)
//--------------------------End Arch-------------------------------------------------------------------


//--------------------------Start Bell Tower Arch-------------------------------------------------------------------
private function Bell_Tower_Arch(RandX, RandZ, oArch) {
	oArch = new GameObject();
	var mf: MeshFilter = oArch.AddComponent(MeshFilter);
	
	oArch.AddComponent(MeshRenderer);
	oArch.name = "Bell Tower Arch";
	oArch.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 0);
	oArch.transform.parent = oChurch.transform;
	
	var verts: Vector3[] = new Vector3[12];
	var uv: Vector2[] = new Vector2[12];
	var normals: Vector3[] = new Vector3[12];
	var tri: int[] = new int[60]; //( 3 vertices * 10 triangles ) * 2 (two face arch mesh)

	//vertices positioning
	verts[0] = new Vector3(this.RandX + 15.9, 19.55, this.RandZ + 9.3); //P1
	verts[1] = new Vector3(this.RandX + 15.9, 19.05, this.RandZ + 9.3); //P2
	verts[2] = new Vector3(this.RandX + 16.2, 19.05, this.RandZ + 9.3); //P3
	verts[3] = new Vector3(this.RandX + 16.2, 20.05, this.RandZ + 9.3); //P4
	verts[4] = new Vector3(this.RandX + 14.6, 20.05, this.RandZ + 9.3); //P5
	verts[5] = new Vector3(this.RandX + 14.6, 19.05, this.RandZ + 9.3); //P6
	verts[6] = new Vector3(this.RandX + 14.9, 19.05, this.RandZ + 9.3); //P7
	verts[7] = new Vector3(this.RandX + 14.9, 19.55, this.RandZ + 9.3); //P8
	verts[8] = new Vector3(this.RandX + 15, 19.7, this.RandZ + 9.3); //P9
	verts[9] = new Vector3(this.RandX + 15.2, 19.8, this.RandZ + 9.3); //P10
	verts[10] = new Vector3(this.RandX + 15.6, 19.8, this.RandZ + 9.3); //P11
	verts[11] = new Vector3(this.RandX + 15.8, 19.7, this.RandZ + 9.3); //P12
	
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
	
	//triangles 
	tri[0] = 0; 
	tri[1] = 1; 
	tri[2] = 2; 
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 0;
	tri[7] = 3;
	tri[8] = 11;
	
	tri[9] = 11;
	tri[10] = 3;
	tri[11] = 10;
	
	tri[12] = 10;
	tri[13] = 3;
	tri[14] = 4;
	
	tri[15] = 10;
	tri[16] = 4;
	tri[17] = 9;
	
	tri[18] = 9;
	tri[19] = 4;
	tri[20] = 8;
	
	tri[21] = 8;
	tri[22] = 4;
	tri[23] = 7;
	
	tri[24] = 7;
	tri[25] = 4;
	tri[26] = 5;
	
	tri[27] = 7;
	tri[28] = 5;
	tri[29] = 6;
	
	tri[30] = 0;
	tri[31] = 2;
	tri[32] = 1;
	
	tri[33] = 0;
	tri[34] = 3;
	tri[35] = 2;
	
	tri[36] = 11;
	tri[37] = 3;
	tri[38] = 0;
	
	tri[39] = 10;
	tri[40] = 3;
	tri[41] = 11;
	
	tri[42] = 10;
	tri[43] = 4;
	tri[44] = 3;
	
	tri[45] = 9;
	tri[46] = 4;
	tri[47] = 10;
	
	tri[48] = 8;
	tri[49] = 4;
	tri[50] = 9;
	
	tri[51] = 7;
	tri[52] = 4;
	tri[53] = 8;
	
	tri[54] = 7;
	tri[55] = 5;
	tri[56] = 4;
	
	tri[57] = 7;
	tri[58] = 6;
	tri[59] = 5;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Bell Tower Arch";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	mf.mesh = mesh;
}//end function Bell_Tower_Arch(Rand_X, Rand_Z)
//--------------------------End Bell Tower Arch-------------------------------------------------------------------


//--------------------------Start Bell Tower Arch-------------------------------------------------------------------
private function Bell_Tower_Vertical_Arch(RandX, RandZ, oArch) {
	oArch = new GameObject();
	var mf: MeshFilter = oArch.AddComponent(MeshFilter);
	
	oArch.AddComponent(MeshRenderer);
	oArch.name = "Bell Tower Vertical Arch";
	oArch.renderer.material.color = Color(0.9490, 0.8901, 0.7686, 0);
	oArch.transform.parent = oChurch.transform;
	
	var verts: Vector3[] = new Vector3[12];
	var uv: Vector2[] = new Vector2[12];
	var normals: Vector3[] = new Vector3[12];
	var tri: int[] = new int[60]; //( 3 vertices * 10 triangles ) * 2 (two face arch mesh)

	//vertices positioning
	verts[0] = new Vector3(this.RandX + 9.3, 19.55, this.RandZ + 15.9); //P1
	verts[1] = new Vector3(this.RandX + 9.3, 19.05, this.RandZ + 15.9); //P2
	verts[2] = new Vector3(this.RandX + 9.3, 19.05, this.RandZ + 16.2); //P3
	verts[3] = new Vector3(this.RandX + 9.3, 20.05, this.RandZ + 16.2); //P4
	verts[4] = new Vector3(this.RandX + 9.3, 20.05, this.RandZ + 14.6); //P5
	verts[5] = new Vector3(this.RandX + 9.3, 19.05, this.RandZ + 14.6); //P6
	verts[6] = new Vector3(this.RandX + 9.3, 19.05, this.RandZ + 14.9); //P7
	verts[7] = new Vector3(this.RandX + 9.3, 19.55, this.RandZ + 14.9); //P8
	verts[8] = new Vector3(this.RandX + 9.3, 19.7, this.RandZ + 15); //P9
	verts[9] = new Vector3(this.RandX + 9.3, 19.8, this.RandZ + 15.2); //P10
	verts[10] = new Vector3(this.RandX + 9.3, 19.8, this.RandZ + 15.6); //P11
	verts[11] = new Vector3(this.RandX + 9.3, 19.7, this.RandZ + 15.8); //P12
	
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
	
	//triangles 
	tri[0] = 0; 
	tri[1] = 1; 
	tri[2] = 2; 
       
	tri[3] = 0; 
	tri[4] = 2; 
	tri[5] = 3;
	
	tri[6] = 0;
	tri[7] = 3;
	tri[8] = 11;
	
	tri[9] = 11;
	tri[10] = 3;
	tri[11] = 10;
	
	tri[12] = 10;
	tri[13] = 3;
	tri[14] = 4;
	
	tri[15] = 10;
	tri[16] = 4;
	tri[17] = 9;
	
	tri[18] = 9;
	tri[19] = 4;
	tri[20] = 8;
	
	tri[21] = 8;
	tri[22] = 4;
	tri[23] = 7;
	
	tri[24] = 7;
	tri[25] = 4;
	tri[26] = 5;
	
	tri[27] = 7;
	tri[28] = 5;
	tri[29] = 6;
	
	tri[30] = 0;
	tri[31] = 2;
	tri[32] = 1;
	
	tri[33] = 0;
	tri[34] = 3;
	tri[35] = 2;
	
	tri[36] = 11;
	tri[37] = 3;
	tri[38] = 0;
	
	tri[39] = 10;
	tri[40] = 3;
	tri[41] = 11;
	
	tri[42] = 10;
	tri[43] = 4;
	tri[44] = 3;
	
	tri[45] = 9;
	tri[46] = 4;
	tri[47] = 10;
	
	tri[48] = 8;
	tri[49] = 4;
	tri[50] = 9;
	
	tri[51] = 7;
	tri[52] = 4;
	tri[53] = 8;
	
	tri[54] = 7;
	tri[55] = 5;
	tri[56] = 4;
	
	tri[57] = 7;
	tri[58] = 6;
	tri[59] = 5;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Bell Tower Vertical Arch";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	mf.mesh = mesh;
}//end function Bell_Tower_Vertical_Arch(Rand_X, Rand_Z)
//--------------------------End Bell Tower Vertical Arch-------------------------------------------------------------------



//--------------Start Arch Windows--------------------------------------------------------------------
private function Arch_Wind(RandX, RandZ, tmpobj){
	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch Window";
	tmpobj.transform.parent = oChurch.transform;
	
	var verts: Vector3[] = new Vector3[11];
	var uv: Vector2[] = new Vector2[11];
	var normals: Vector3[] = new Vector3[11];
	var tri: int[] = new int[54]; //( 3 vertices * 9 triangles ) * 2 (for the back face)
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX + 1.82, 4.5, this.RandZ + 3.3); //P1 
	verts[1] = new Vector3(this.RandX + 1.82, 5.65, this.RandZ + 3.3); //P2 
	verts[2] = new Vector3(this.RandX + 1.82, 5.95, this.RandZ + 3.3); //P3 
	verts[3] = new Vector3(this.RandX + 1.72, 6.1, this.RandZ + 3.3); //P4 
	verts[4] = new Vector3(this.RandX + 1.52, 6.2, this.RandZ + 3.3); //P5 
	verts[5] = new Vector3(this.RandX + 1.12, 6.2, this.RandZ + 3.3); //P6 
	verts[6] = new Vector3(this.RandX + 0.92, 6.1, this.RandZ + 3.3); //P7 
	verts[7] = new Vector3(this.RandX + 0.82, 5.95, this.RandZ + 3.3); //P8 
	verts[8] = new Vector3(this.RandX + 0.82, 5.65, this.RandZ + 3.3); //P9 
	verts[9] = new Vector3(this.RandX + 0.82, 4.5, this.RandZ + 3.3); //P10 
	verts[10] = new Vector3(this.RandX + 1.32, 5.65, this.RandZ + 3.3); //P11
	
	
	//uv mapping (textures)
	uv[0] = new Vector2(0, 0);
	uv[1] = new Vector2(0, 0.6);
	uv[2] = new Vector2(0.2, 0.8); 
	uv[3] = new Vector2(0.3, 0.9);
	uv[4] = new Vector2(0.4, 0.85);
	uv[5] = new Vector2(0.6, 0.85);
	uv[6] = new Vector2(0.8, 0.9);
	uv[7] = new Vector2(0.8, 0.8);
	uv[8] = new Vector2(1, 0.6);
	uv[9] = new Vector2(1, 0);
	uv[10] = new Vector2(0.5, 0.6);
	
	//triangles 
	tri[0] = 8;
	tri[1] = 0;
	tri[2] = 1;
       
	tri[3] = 10; 
	tri[4] = 1; 
	tri[5] = 2;
	
	tri[6] = 10;
	tri[7] = 2;
	tri[8] = 3;
	
	tri[9] = 10;
	tri[10] = 3;
	tri[11] = 4;
	
	tri[12] = 10;
	tri[13] = 4;
	tri[14] = 5;
	
	tri[15] = 10;
	tri[16] = 5;
	tri[17] = 6;
	
	tri[18] = 10;
	tri[19] = 6;
	tri[20] = 7;
	
	tri[21] = 10;
	tri[22] = 7;
	tri[23] = 8;
	
	tri[24] = 8;
	tri[25] = 9;
	tri[26] = 0;
	
	tri[27] = 8;
	tri[28] = 1;
	tri[29] = 0;
	
	tri[30] = 10;
	tri[31] = 2;
	tri[32] = 1;
	
	tri[33] = 10;
	tri[34] = 3;
	tri[35] = 2;
	
	tri[36] = 10;
	tri[37] = 4;
	tri[38] = 3;
	
	tri[39] = 10;
	tri[40] = 5;
	tri[41] = 4;
	
	tri[42] = 10;
	tri[43] = 6;
	tri[44] = 5;
	
	tri[45] = 10;
	tri[46] = 7;
	tri[47] = 6;
	
	tri[48] = 10;
	tri[49] = 8;
	tri[50] = 7;
	
	tri[51] = 8;
	tri[52] = 0;
	tri[53] = 9;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Arch Window";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	//mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("window_church2");
	mf.mesh = mesh;
}//end function Arch_Wind(RandX, RandZ, tmpobj)
//--------------End Arch Windows--------------------------------------------------------------------



//-----------------Start Arch Doors--------------------------------------------------------------------
private function Arch_Door(RandX, RandZ, tmpobj){
	tmpobj = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Arch Door";
	//tmpobj.renderer.material.color = Color.clear; 
	tmpobj.transform.parent = oChurch.transform;
	
	var verts: Vector3[] = new Vector3[11];
	var uv: Vector2[] = new Vector2[11];
	var normals: Vector3[] = new Vector3[11];
	var tri: int[] = new int[54]; //( 3 vertices * 9 triangles ) * 2 (for the back face)
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX + 4.62, 0.3, this.RandZ + 3.3); //P1 
	verts[1] = new Vector3(this.RandX + 4.62, 2.35, this.RandZ + 3.3); //P2 
	verts[2] = new Vector3(this.RandX + 4.62, 2.55, this.RandZ + 3.3); //P3 
	verts[3] = new Vector3(this.RandX + 4.42, 2.9, this.RandZ + 3.3); //P4 
	verts[4] = new Vector3(this.RandX + 4.12, 3, this.RandZ + 3.3); //P5 
	verts[5] = new Vector3(this.RandX + 3.72, 3, this.RandZ + 3.3); //P6 
	verts[6] = new Vector3(this.RandX + 3.42, 2.9, this.RandZ + 3.3); //P7 
	verts[7] = new Vector3(this.RandX + 3.22, 2.55, this.RandZ + 3.3); //P8 
	verts[8] = new Vector3(this.RandX + 3.22, 2.35, this.RandZ + 3.3); //P9 
	verts[9] = new Vector3(this.RandX + 3.22, 0.3, this.RandZ + 3.3); //P10 
	verts[10] = new Vector3(this.RandX + 3.92, 2.35, this.RandZ + 3.3); //P11
	
	
	//uv mapping (textures)
	uv[0] = new Vector2(0, 0);
	uv[1] = new Vector2(0, 0.7);
	uv[2] = new Vector2(0, 0); 
	uv[3] = new Vector2(0, 0);
	uv[4] = new Vector2(0, 0);
	uv[5] = new Vector2(0, 0);
	uv[6] = new Vector2(0, 0);
	uv[7] = new Vector2(0, 0);
	uv[8] = new Vector2(1, 0.7);
	uv[9] = new Vector2(1, 0);
	uv[10] = new Vector2(0.5, 0.6);
	
	
	//triangles 
	tri[0] = 8;
	tri[1] = 0;
	tri[2] = 1;
       
	tri[3] = 10; 
	tri[4] = 1; 
	tri[5] = 2;
	
	tri[6] = 10;
	tri[7] = 2;
	tri[8] = 3;
	
	tri[9] = 10;
	tri[10] = 3;
	tri[11] = 4;
	
	tri[12] = 10;
	tri[13] = 4;
	tri[14] = 5;
	
	tri[15] = 10;
	tri[16] = 5;
	tri[17] = 6;
	
	tri[18] = 10;
	tri[19] = 6;
	tri[20] = 7;
	
	tri[21] = 10;
	tri[22] = 7;
	tri[23] = 8;
	
	tri[24] = 8;
	tri[25] = 9;
	tri[26] = 0;
	
	tri[27] = 8;
	tri[28] = 1;
	tri[29] = 0;
	
	tri[30] = 10;
	tri[31] = 2;
	tri[32] = 1;
	
	tri[33] = 10;
	tri[34] = 3;
	tri[35] = 2;
	
	tri[36] = 10;
	tri[37] = 4;
	tri[38] = 3;
	
	tri[39] = 10;
	tri[40] = 5;
	tri[41] = 4;
	
	tri[42] = 10;
	tri[43] = 6;
	tri[44] = 5;
	
	tri[45] = 10;
	tri[46] = 7;
	tri[47] = 6;
	
	tri[48] = 10;
	tri[49] = 8;
	tri[50] = 7;
	
	tri[51] = 8;
	tri[52] = 0;
	tri[53] = 9;
	
	var mesh: Mesh = new Mesh();
	mesh.name = "Arch Door";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	tmpobj.renderer.material.mainTexture = Resources.Load("door_corfu2"); //import texture for door
	mf.mesh = mesh;
}//end function Arch_Door(RandX, RandZ, tmpobj)
//-------------------End Arch Doors----------------------------------------------------------------------

//----------------------------Start DO Arched Windows & Doors-----------------------------------------
public function Do_ArchWind(RandX, RandZ){

	tmpobj = new GameObject();
	Destroy(tmpobj);
	
	//front main windows
	for(i=0; i<=2; i++){
		if(tmpobj){
			Arch_Wind(this.RandX, this.RandZ, tmpobj);
			this.RandX -= 2.6;
		}//end if
	}//end for
	
	//back main windows
	this.RandX += 2.6;
	this.RandZ -= 6.6;
	for(i=0; i<=2; i++){
		if(tmpobj){
			Arch_Wind(this.RandX, this.RandZ, tmpobj);
			this.RandX += 2.6;
		}//end if
	}//end for
}//end function Do_ArchWind(RandX, RandZ)



public function Do_ArchDoor(RandX, RandZ){
	tmpobj = new GameObject();
	Destroy(tmpobj);
	
	this.RandX -= 7.8;
	this.RandZ += 6.6;
	if(tmpobj){
		Arch_Door(this.RandX, this.RandZ, tmpobj);
	}//end if
	
	this.RandZ -= 6.6;
	if(tmpobj){
		Arch_Door(this.RandX, this.RandZ, tmpobj);
	}//end if
}//end function Do_ArchDoor(RandX, RandZ)

public function Do_Arch(RandX, RandZ){
	oArch = new GameObject();
	Destroy(oArch);

	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	
	//front window arches
	this.RandX += 5.2; 
	this.RandZ += 6.7;
	for(i=0; i<=2; i++){
		if(oArch){
			Arch(this.RandX, this.RandZ, oArch);
			this.RandX -= 2.6;
		}//end if
	}//end for
	
	//back window arches
	this.RandX += 2.6; 
	this.RandZ -= 6.75;
	for(i=0; i<=2; i++){
		if(oArch){
			Arch(this.RandX, this.RandZ, oArch);
			this.RandX += 2.6;
		}//end if
	}//end for
}//end function Do_Arch(RandX, RandZ)
//----------------------------End DO Arched Windows & Doors-----------------------------------------


//------------------Start DO Door Roof -----------------------------------------------------------------
public function Do_DoorRoof(RandX, RandZ){
	tmpobj = new GameObject();
	Destroy(tmpobj);
	
	//front side
	this.RandX -= 2.6; 
	this.RandZ += 6.7;
	if(tmpobj){
		TriangleEaves(this.RandX, this.RandZ, tmpobj);
	}//end if
	
	//back side
	this.RandZ -= 6.75;
	if(tmpobj){
		TriangleEaves(this.RandX, this.RandZ, tmpobj);
	}//end if
}//end function Do_DoorRoof(RandX, RandZ)
//------------------End DO Door Roof -----------------------------------------------------------------


//------------------Start BellTower Arches------------------------------------
public function Do_BellTower_Arch(RandX, RandZ){
	oArch = new GameObject();
	Destroy(oArch);	
	
	this.RandX -= 6.2; 
	this.RandZ += 2.5;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oArch){
				Bell_Tower_Arch(this.RandX, this.RandZ, oArch);
				this.RandX -= 1.6;
			}//end if
		}//end for
		this.RandX += 3.2;
		this.RandZ -= 3.2;
	}//end for
	
	//verical Arches
	this.RandX += 6.95;
	this.RandZ -= 0.5;
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oArch){
				Bell_Tower_Vertical_Arch(this.RandX, this.RandZ, oArch);
				this.RandZ -= 1.6;
			}//end if
		}//end for
		this.RandZ += 3.2;
		this.RandX -= 3.2;
	}//end for
}//end function Do_BellTower_Arch(RandX, RandZ)
//---------------------------End BellTower Arches------------------------------