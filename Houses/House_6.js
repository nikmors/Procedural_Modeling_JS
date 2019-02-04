
//--Main Building Objects-----------------------------------------------------------
var oBuilding6 : GameObject;
var oWindow : GameObject; 
var oCube : GameObject;
//-------------------start public variables--------------------------------------------------------
public var aCollectionObj_6 = new Array(); // an Array - a collection- for the  objects of House_2
public var i: int = 0;
public var j: int = 0;
public var c: int = 0;

public var RandX: float; 
public var RandZ: float; 
//-------------------end public variables--------------------------------------------------------

//MAIN function
function mainDO() {

	//RandX = Random.Range(10,247);
	//RandZ = Random.Range(10,247);
	
	MainBuilding(RandX, RandZ);
	Windows(RandX, RandZ);
	Eaves(RandX, RandZ);
	Roof(RandX, RandZ);
}//end function Start()


//---Start MainBuilding-------------------------------------------------------------------------------------
public function MainBuilding(RandX, RandZ){
	oBuilding6 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	oBuilding6.transform.position = Vector3(this.RandX, 6.35569, this.RandZ);
	oBuilding6.name = "House_6";
	oBuilding6.renderer.material.color = Color(Random.Range(0.95294, 0.85294), Random.Range(0.894117, 0.794117), Random.Range(0.7647058, 0.6647058), 0); //set color 
	oBuilding6.transform.localScale.x = 4.637413;
	oBuilding6.transform.localScale.y = 12.0;
	oBuilding6.transform.localScale.z = 10.23788;
	aCollectionObj_6.Add(oBuilding6);
}//end function MainBuilding(RandX, RandZ)
//---End MainBuilding--------------------------------------------------------------------------------------


//------------Start Windows----------------------------------------------------------------------------
public function Windows(RandX, RandZ){
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oWindow);
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("window_corfu1"); //import texture for windows
	
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	
	var wind_X:float = this.RandX + 0.84427;
	var wind_Y:float = 11.474193;
	var wind_Z:float = this.RandZ + 5.07396;
	//Start front side:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//small windows
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow){
				var oWindow_ = Instantiate(oWindow, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity);
				oWindow_.transform.parent = oBuilding6.transform; //parenting
				oWindow_.name = "window front side " + (++c);
				oWindow_.transform.localScale.x = 0.1562559;
				oWindow_.transform.localScale.y = 0.08680711;
				oWindow_.transform.localScale.z = 0.019;
				aCollectionObj_6.Add(oWindow_);
			}//end if
			wind_Y -= 7.88;
		}//end for
		wind_Y = 11.474193;
		wind_X -= 1.75;
	}//end for
	c = 0;
	
	//balcony windows
	wind_X = this.RandX + 0.84427;
	wind_Y = 9.074193; 
	wind_Z = this.RandZ + 5.07396;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow){
				var oBalconyWindow_ = Instantiate(oWindow, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity);
				oBalconyWindow_.transform.parent = oBuilding6.transform; //parenting
				oBalconyWindow_.name = "balcony window front side " + (++c);
				oBalconyWindow_.transform.localScale.x = 0.1562559;
				oBalconyWindow_.transform.localScale.y = 0.1475996;
				oBalconyWindow_.transform.localScale.z = 0.019;
				aCollectionObj_6.Add(oBalconyWindow_);
			}//end if
			wind_Y -= 2.88;
		}//end for
		wind_Y = 9.074193;
		wind_X -= 1.75;
	}//end for
	c = 0;
	
	//eaves
	wind_X = this.RandX + 0.84427;
	wind_Y = 9.974193;
	wind_Z = this.RandZ + 5.1207;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			for(k=0; k<=1; k++){
				if(oCube){
					var oWindowEaves_ = Instantiate(oCube, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity);
					oWindowEaves_.transform.parent = oBuilding6.transform; //parenting
					oWindowEaves_.name = "window front side eaves" + (++c);
					if( k == 1 ){
						oWindowEaves_.transform.localScale.x = 0.1777411;
						oWindowEaves_.transform.localScale.z = 0.01728884;
					}//end if
					else{
						oWindowEaves_.transform.localScale.x = 0.1562559;
						oWindowEaves_.transform.localScale.z = 0.01329912;
					}//else
					oWindowEaves_.transform.localScale.y = 0.005307435;
					aCollectionObj_6.Add(oWindowEaves_);
				}//end if
				wind_Y += 0.05;
			}//end for
			wind_Y = 9.974193;
			wind_Y -= 5.88;
		}//end for
		wind_Y = 9.974193;
		wind_X -= 1.75;
	}//end for
	c = 0;
	
	//balcony base
	wind_Y = 8.1;
	wind_Z = this.RandZ + 5.1207;
	
	for(i=0; i<=1; i++){
		if(oCube){
			var oBalconyBase_ = Instantiate(oCube, Vector3(this.RandX, wind_Y, wind_Z), Quaternion.identity);
			oBalconyBase_.transform.parent = oBuilding6.transform; //parenting
			oBalconyBase_.name = "balcony base " + (++c);
			oBalconyBase_.transform.localScale.x = 0.6634907;
			oBalconyBase_.transform.localScale.y = 0.01063777;
			oBalconyBase_.transform.localScale.z = 0.1267186;
			aCollectionObj_6.Add(oBalconyBase_);
		}//end if
		wind_Y -= 2.89;
	}//end for
	c = 0;
	
	//balcony rails
	wind_X = this.RandX + 1.5128;
	wind_Y = 8.5;
	wind_Z = this.RandZ + 5.7490;
	
	for(i=0; i<=15; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBalconyRails_ = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oBalconyRails_.transform.parent = oBuilding6.transform; //parenting
				oBalconyRails_.name = "balcony rails " + (++c);
				oBalconyRails_.transform.localScale.x = 0.008769402;
				oBalconyRails_.transform.localScale.y = 0.05327845;
				oBalconyRails_.transform.localScale.z = 0.003533184;
				aCollectionObj_6.Add(oBalconyRails_);
			}//end if
			wind_Y -= 2.89;
		}//end for
		wind_Y = 8.5;
		wind_X -= 0.2;
	}//end for
	c = 0;
	
	//balcony left rails
	wind_X = this.RandX + 1.5128;
	wind_Y = 8.5;
	wind_Z = this.RandZ + 5.7490;
	
	for(i=0; i<=3; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBalconyLftRails_ = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oBalconyLftRails_.transform.parent = oBuilding6.transform; //parenting
				oBalconyLftRails_.name = "balcony left rails " + (++c);
				oBalconyLftRails_.transform.localScale.x = 0.008769402;
				oBalconyLftRails_.transform.localScale.y = 0.05327845;
				oBalconyLftRails_.transform.localScale.z = 0.003533184;
				aCollectionObj_6.Add(oBalconyLftRails_);
			}//end if
			wind_Y -= 2.89;
		}//end for
		wind_Y = 8.5;
		wind_Z -= 0.2;
	}//end for
	c = 0;
	
	//balcony right rails
	wind_X = this.RandX - 1.4872;
	wind_Y = 8.5;
	wind_Z = this.RandZ + 5.7490;
	
	for(i=0; i<=3; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBalconyRghtRails_ = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oBalconyRghtRails_.transform.parent = oBuilding6.transform; //parenting
				oBalconyRghtRails_.name = "balcony right rails " + (++c);
				oBalconyRghtRails_.transform.localScale.x = 0.008769402;
				oBalconyRghtRails_.transform.localScale.y = 0.05327845;
				oBalconyRghtRails_.transform.localScale.z = 0.003533184;
				aCollectionObj_6.Add(oBalconyRghtRails_);
			}//end if
			wind_Y -= 2.89;
		}//end for
		wind_Y = 8.5;
		wind_Z -= 0.2;
	}//end for
	c = 0;
	
	//balcony main rails
	wind_X = this.RandX + 0.016416;
	wind_Y = 8.8;
	wind_Z = this.RandZ + 5.7490;
	
	for(i=0; i<=3; i++){
		if(oWindow){
			var oMainRails_ = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
			oMainRails_.transform.parent = oBuilding6.transform; //parenting
			oMainRails_.name = "main rails " + (++c);
			oMainRails_.transform.localScale.x = 0.003585278;
			oMainRails_.transform.localScale.y = 0.6571109;
			oMainRails_.transform.localScale.z = 0.003533184;
			oMainRails_.transform.eulerAngles.z = 90;
			aCollectionObj_6.Add(oMainRails_);
		}//end if
		if( i == 1)
			wind_Y -= 2.29;
		else
			wind_Y -= 0.6;
	}//end for
	c = 0;
	
	//balcony main side rails
	wind_X = this.RandX + 1.5128;
	wind_Y = 8.8;
	wind_Z = this.RandZ + 5.41732;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=3; j++){
			if(oCube){
				var oMainLftRails_ = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oMainLftRails_.transform.parent = oBuilding6.transform; //parenting
				oMainLftRails_.name = "main side rails " + (++c);
				oMainLftRails_.transform.localScale.x = 0.008769402;
				oMainLftRails_.transform.localScale.y = 0.06881529;
				oMainLftRails_.transform.localScale.z = 0.003533184;
				oMainLftRails_.transform.eulerAngles.x = 90;
				aCollectionObj_6.Add(oMainLftRails_);
			}//end if
			if( j == 1)
				wind_Y -= 2.29;
			else
				wind_Y -= 0.6;
		}//end for
		wind_Y = 8.8;
		wind_X -= 3;
	}//end for
	c = 0;
	
	//door
	wind_X = this.RandX;
	wind_Y = 1.3;
	wind_Z = this.RandZ + 5.07396;
	
	if(oWindow){
		var oDoor_ = Instantiate(oWindow, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
		oDoor_.transform.parent = oBuilding6.transform; //parenting
		oDoor_.renderer.material.mainTexture = Resources.Load("door_corfu2"); //import texture for door
		oDoor_.name = "door";
		oDoor_.transform.localScale.x = 0.189462;
		oDoor_.transform.localScale.y = 0.1475996;
		oDoor_.transform.localScale.z = 0.019;
		aCollectionObj_6.Add(oDoor_);
	}//end if
	//End front side:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	//Start back side:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//small windows
	wind_X = this.RandX + 0.84427;
	wind_Y = 11.474193;
	wind_Z = this.RandZ - 5.07396;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow){
				var oWindow_bck = Instantiate(oWindow, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity);
				oWindow_bck.transform.parent = oBuilding6.transform; //parenting
				oWindow_bck.name = "window back side " + (++c);
				oWindow_bck.transform.localScale.x = 0.1562559;
				oWindow_bck.transform.localScale.y = 0.08680711;
				oWindow_bck.transform.localScale.z = 0.019;
				aCollectionObj_6.Add(oWindow_bck);
			}//end if
			wind_Y -= 7.88;
		}//end for
		wind_Y = 11.474193;
		wind_X -= 1.75;
	}//end for
	c = 0;
	
	//balcony windows
	wind_X = this.RandX + 0.84427;
	wind_Y = 9.074193; 
	wind_Z = this.RandZ - 5.07396;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			if(oWindow){
				var oBalconyWindow_bck = Instantiate(oWindow, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity);
				oBalconyWindow_bck.transform.parent = oBuilding6.transform; //parenting
				oBalconyWindow_bck.name = "balcony window back side " + (++c);
				oBalconyWindow_bck.transform.localScale.x = 0.1562559;
				oBalconyWindow_bck.transform.localScale.y = 0.1475996;
				oBalconyWindow_bck.transform.localScale.z = 0.019;
				aCollectionObj_6.Add(oBalconyWindow_bck);
			}//end if
			wind_Y -= 2.88;
		}//end for
		wind_Y = 9.074193;
		wind_X -= 1.75;
	}//end for
	c = 0;
	
	//eaves
	wind_X = this.RandX + 0.84427;
	wind_Y = 9.974193;
	wind_Z = this.RandZ - 5.1207;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=1; j++){
			for(k=0; k<=1; k++){
				if(oCube){
					var oWindowEaves_bck = Instantiate(oCube, Vector3(wind_X,wind_Y,wind_Z), Quaternion.identity);
					oWindowEaves_bck.transform.parent = oBuilding6.transform; //parenting
					oWindowEaves_bck.name = "window back side eaves" + (++c);
					if( k == 1 ){
						oWindowEaves_bck.transform.localScale.x = 0.1777411;
						oWindowEaves_bck.transform.localScale.z = 0.01728884;
					}//end if
					else{
						oWindowEaves_bck.transform.localScale.x = 0.1562559;
						oWindowEaves_bck.transform.localScale.z = 0.01329912;
					}//else
					oWindowEaves_bck.transform.localScale.y = 0.005307435;
					aCollectionObj_6.Add(oWindowEaves_bck);
				}//end if
				wind_Y += 0.05;
			}//end for
			wind_Y = 9.974193;
			wind_Y -= 5.88;
		}//end for
		wind_Y = 9.974193;
		wind_X -= 1.75;
	}//end for
	c = 0;
	
	//balcony base
	wind_Y = 8.1;
	wind_Z = this.RandZ - 5.1207;
	
	for(i=0; i<=1; i++){
		if(oCube){
			var oBalconyBase_bck = Instantiate(oCube, Vector3(this.RandX, wind_Y, wind_Z), Quaternion.identity);
			oBalconyBase_bck.transform.parent = oBuilding6.transform; //parenting
			oBalconyBase_bck.name = "balcony back side base " + (++c);
			oBalconyBase_bck.transform.localScale.x = 0.6634907;
			oBalconyBase_bck.transform.localScale.y = 0.01063777;
			oBalconyBase_bck.transform.localScale.z = 0.1267186;
			aCollectionObj_6.Add(oBalconyBase_bck);
		}//end if
		wind_Y -= 2.89;
	}//end for
	c = 0;
	
	//balcony rails
	wind_X = this.RandX + 1.5128;
	wind_Y = 8.5;
	wind_Z = this.RandZ - 5.7490;
	
	for(i=0; i<=15; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBalconyRails_bck = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oBalconyRails_bck.transform.parent = oBuilding6.transform; //parenting
				oBalconyRails_bck.name = "balcony back side rails " + (++c);
				oBalconyRails_bck.transform.localScale.x = 0.008769402;
				oBalconyRails_bck.transform.localScale.y = 0.05327845;
				oBalconyRails_bck.transform.localScale.z = 0.003533184;
				aCollectionObj_6.Add(oBalconyRails_bck);
			}//end if
			wind_Y -= 2.89;
		}//end for
		wind_Y = 8.5;
		wind_X -= 0.2;
	}//end for
	c = 0;
	
	//balcony left rails
	wind_X = this.RandX + 1.5128;
	wind_Y = 8.5;
	wind_Z = this.RandZ - 5.7490;
	
	for(i=0; i<=3; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBalconyLftRails_bck = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oBalconyLftRails_bck.transform.parent = oBuilding6.transform; //parenting
				oBalconyLftRails_bck.name = "balcony back side left rails " + (++c);
				oBalconyLftRails_bck.transform.localScale.x = 0.008769402;
				oBalconyLftRails_bck.transform.localScale.y = 0.05327845;
				oBalconyLftRails_bck.transform.localScale.z = 0.003533184;
				aCollectionObj_6.Add(oBalconyLftRails_bck);
			}//end if
			wind_Y -= 2.89;
		}//end for
		wind_Y = 8.5;
		wind_Z += 0.2;
	}//end for
	c = 0;
	
	//balcony right rails
	wind_X = this.RandX - 1.4872;
	wind_Y = 8.5;
	wind_Z = this.RandZ - 5.7490;
	
	for(i=0; i<=3; i++){
		for(j=0; j<=1; j++){
			if(oCube){
				var oBalconyRghtRails_bck = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oBalconyRghtRails_bck.transform.parent = oBuilding6.transform; //parenting
				oBalconyRghtRails_bck.name = "balcony back side right rails " + (++c);
				oBalconyRghtRails_bck.transform.localScale.x = 0.008769402;
				oBalconyRghtRails_bck.transform.localScale.y = 0.05327845;
				oBalconyRghtRails_bck.transform.localScale.z = 0.003533184;
				aCollectionObj_6.Add(oBalconyRghtRails_bck);
			}//end if
			wind_Y -= 2.89;
		}//end for
		wind_Y = 8.5;
		wind_Z += 0.2;
	}//end for
	c = 0;
	
	//balcony main rails
	wind_X = this.RandX + 0.016416;
	wind_Y = 8.8;
	wind_Z = this.RandZ - 5.7490;
	
	for(i=0; i<=3; i++){
		if(oCube){
			var oMainRails_bck = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
			oMainRails_bck.transform.parent = oBuilding6.transform; //parenting
			oMainRails_bck.name = "main back rails " + (++c);
			oMainRails_bck.transform.localScale.x = 0.003585278;
			oMainRails_bck.transform.localScale.y = 0.6571109;
			oMainRails_bck.transform.localScale.z = 0.003533184;
			oMainRails_bck.transform.eulerAngles.z = 90;
			aCollectionObj_6.Add(oMainRails_bck);
		}//end if
		if( i == 1)
			wind_Y -= 2.29;
		else
			wind_Y -= 0.6;
	}//end for
	c = 0;
	
	//balcony main side rails
	wind_X = this.RandX + 1.5128;
	wind_Y = 8.8;
	wind_Z = this.RandZ - 5.41732;
	
	for(i=0; i<=1; i++){
		for(j=0; j<=3; j++){
			if(oCube){
				var oMainLftRails_bck = Instantiate(oCube, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
				oMainLftRails_bck.transform.parent = oBuilding6.transform; //parenting
				oMainLftRails_bck.name = "main back side rails " + (++c);
				oMainLftRails_bck.transform.localScale.x = 0.008769402;
				oMainLftRails_bck.transform.localScale.y = 0.06881529;
				oMainLftRails_bck.transform.localScale.z = 0.003533184;
				oMainLftRails_bck.transform.eulerAngles.x = 90;
				aCollectionObj_6.Add(oMainLftRails_bck);
			}//end if
			if( j == 1)
				wind_Y -= 2.29;
			else
				wind_Y -= 0.6;
		}//end for
		wind_Y = 8.8;
		wind_X -= 3;
	}//end for
	c = 0;
	
	//door
	wind_X = this.RandX;
	wind_Y = 1.3;
	wind_Z = this.RandZ - 5.07396;
	
	if(oWindow){
		var oDoor_bck = Instantiate(oWindow, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
		oDoor_bck.transform.parent = oBuilding6.transform; //parenting
		oDoor_bck.renderer.material.mainTexture = Resources.Load("door_corfu2"); //import texture for door
		oDoor_bck.name = "back door";
		oDoor_bck.transform.localScale.x = 0.189462;
		oDoor_bck.transform.localScale.y = 0.1475996;
		oDoor_bck.transform.localScale.z = 0.019;
		aCollectionObj_6.Add(oDoor_bck);
	}//end if
	//End back side:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Windows(RandX, RandZ)
//------------End Windows----------------------------------------------------------------------------


//------------------Start Eaves---------------------------------------------------------------------
public function Eaves(RandX, RandZ){
	oCube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oCube);
	
	var eaves_posX: float = this.RandX;
	var eaves_posY: float = 12.374193; 
	var eaves_posZ: float = this.RandZ;
	
	for(i=0; i<=2; i++){
		if(oCube){
			var oEaves_ = Instantiate(oCube, Vector3(eaves_posX, eaves_posY, eaves_posZ), Quaternion.identity);
			oEaves_.transform.parent = oBuilding6.transform; //parenting
			oEaves_.name = "eaves " + (++c);
			if(i == 1){
				oEaves_.transform.localScale.x = 1.061839;
				oEaves_.transform.localScale.z = 1.058063;
			}//end if
			else if(i == 2){
				oEaves_.transform.localScale.x = 1.089062;
				oEaves_.transform.localScale.z = 1.07113;
			}//end else if
			else{
				oEaves_.transform.localScale.x = 1.025;
				oEaves_.transform.localScale.z = 1.045;
			}//else
			oEaves_.transform.localScale.y = 0.01419581;
			aCollectionObj_6.Add(oEaves_);
		}//end if
		eaves_posY += 0.1;
	}//end for
	c = 0;
}//end function Eaves(RandX, RandZ)
//---------------End Eaves-----------------------------------------------------------------------------------



//--------Start Roof-------------------------------------------------------------------------------------
public function Roof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Roof";
	tmpobj.transform.parent = oBuilding6.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles
	
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 2.5, 12.7, this.RandZ - 5.5); //P1 
	verts[1] = new Vector3(this.RandX - 2.5, 12.7, this.RandZ + 5.5); //P2
	verts[2] = new Vector3(this.RandX, 13.7, this.RandZ + 4); //P3
	
	verts[3] = new Vector3(this.RandX + 2.5, 12.7, this.RandZ + 5.5); //P4
	verts[4] = new Vector3(this.RandX + 2.5, 12.7, this.RandZ - 5.5); //P5
	verts[5] = new Vector3(this.RandX, 13.7, this.RandZ - 4); //P6


	uv[0] = new Vector2(1, 1);
	uv[1] = new Vector2(1, 0);
	uv[2] = new Vector2(0.5, 0.2);
	
	uv[3] = new Vector2(0, 0);
	uv[4] = new Vector2(0, 1);
	uv[5] = new Vector2(0.5, 0.8);
	
	
	//triangles 
	tri[0] = 5; //refer to vertices: verts[0]
	tri[1] = 4; //refer to vertices: verts[1]
	tri[2] = 0; //refer to vertices: verts[2]
       
	tri[3] = 5; 
	tri[4] = 0; 
	tri[5] = 2;
	
	tri[6] = 2;
	tri[7] = 0;
	tri[8] = 1;
	
	tri[9] = 2;
	tri[10] = 1;
	tri[11] = 3;
	
	tri[12] = 2;
	tri[13] = 3;
	tri[14] = 4;
	
	tri[15] = 2;
	tri[16] = 4;
	tri[17] = 5;
	
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
//----------------------------------------End Roof--------------------------------------------------------

