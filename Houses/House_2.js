//--Main Building Objects-----------------------------------------------------------
var oBuilding2 : GameObject;
var oWindow : GameObject; 
var oBalconyWind : GameObject;
var oDoor : GameObject;
var oAttic : GameObject;
var oRails : GameObject;
//var oCube : GameObject; //= GameObject.CreatePrimitive(PrimitiveType.Cube);


//-------------------start public variables--------------------------------------------------------
public var aCollectionObj_2 = new Array(); // an Array - a collection- for the  objects of House_2
public var i: int = 0;
public var j: int = 0;
public var c: int = 0;

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
	Attic(RandX, RandZ);
	Balcony(RandX, RandZ);
	Doors(RandX, RandZ);
	MainRoof(RandX, RandZ);
	AtticRoof(RandX, RandZ);
}//end function Start ()


//----Start MainBuilding-------------------------------------------
public function MainBuilding(RandX, RandZ){
	//create object oBuilding2
	oBuilding2 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//Positioning the oBuilding2 object
	oBuilding2.transform.position = Vector3(this.RandX, 6.35569, this.RandZ);
	//name the object oBuilding2
	 oBuilding2.name = "House_2";
	 //oBuilding2.renderer.material.mainTexture = Resources.Load("wall_");
	 oBuilding2.renderer.material.color = Color(Random.Range(1,0.9), Random.Range(0.980,0.880), Random.Range(0.804,0.704), 0); //set color 
	//Random ranges between X, Y coordinates
	//Scaling the oBuilding2 object
	oBuilding2.transform.localScale.x = 7.0;
	oBuilding2.transform.localScale.y = 12.0;
	oBuilding2.transform.localScale.z = 7.0;
	aCollectionObj_2.Add(oBuilding2);
}//end MainBuilding(RandX, RandZ)
//----End function MainBuilding-------------------------------------------



//---------------------------START WINDOWS-------------------------------------------------------------------
public function Windows(RandX, RandZ){
//::::::::::::::::::::::::::::::::::::::::::Start FACADE::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("window_corfu2");  //import texture for windows
	//Positioning the oWindow object
	wind_X = this.RandX + 2.82102;
	wind_Y = 11.474193;
	wind_Z = this.RandZ + 3.5051424;
	oWindow.transform.position = Vector3(wind_X,wind_Y,wind_Z);
	oWindow.name = "window0";
	oWindow.transform.parent = oBuilding2.transform;	
	//Scaling the oWindow object
	oWindow.transform.localScale.x =0.1;
	oWindow.transform.localScale.y = 0.116753;
	oWindow.transform.localScale.z = 0.019;
	
	
	var nPosY_: float = wind_Y - 2.5;
	
	for(i=0; i<=2; i++){
		if(oWindow){ //if the oWindow object exists
			var cloneWindow_leftColumn = Instantiate(oWindow, Vector3(wind_X, nPosY_, wind_Z), Quaternion.identity);
			cloneWindow_leftColumn.transform.parent = oBuilding2.transform; //parenting
			cloneWindow_leftColumn.name = "window" + (++c);
			cloneWindow_leftColumn.transform.localScale.x =0.1;
			cloneWindow_leftColumn.transform.localScale.y = 0.116753;
			cloneWindow_leftColumn.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneWindow_leftColumn);
			nPosY_-=2.5;
		}//end if
	}//end for
	c = 0;
	
	for(i=0; i<=2; i++){
		if(oWindow){
			var cloneWindow_3rd_flr = Instantiate(oWindow, Vector3(wind_X - 1.45, wind_Y - 2.5, wind_Z), Quaternion.identity);
			cloneWindow_3rd_flr.transform.parent = oBuilding2.transform; //parenting
			cloneWindow_3rd_flr.name = "3rd flr window" + (++c);
			cloneWindow_3rd_flr.transform.localScale.x =0.1;
			cloneWindow_3rd_flr.transform.localScale.y = 0.116753;
			cloneWindow_3rd_flr.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneWindow_3rd_flr);
			wind_X -= 1.45;
		}//end if
	}//end for
	c = 0;
	
	var tmpWind_X = this.RandX + 2.82102;
	for(i=0; i<=2; i++){
		if(oWindow){
			var cloneWindow_1st_flr = Instantiate(oWindow, Vector3(tmpWind_X - 1.45, wind_Y - 7.5, wind_Z), Quaternion.identity);
			cloneWindow_1st_flr.transform.parent = oBuilding2.transform; //parenting
			cloneWindow_1st_flr.name = "1st flr window" + (++c);
			cloneWindow_1st_flr.transform.localScale.x = 0.1;
			cloneWindow_1st_flr.transform.localScale.y = 0.116753;
			cloneWindow_1st_flr.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneWindow_1st_flr);
			tmpWind_X -= 1.45;
		}//end if
	}//end for
	c = 0;
	
	var tmp_Wind_Y = 11.474193;
	var tmp_Wind_X = this.RandX + 2.82102;
	for(i=0; i<=3; i++){
		if(oWindow){
			var cloneWindow_rightColumn = Instantiate(oWindow, Vector3( tmp_Wind_X - 5.7, tmp_Wind_Y, wind_Z), Quaternion.identity);
			cloneWindow_rightColumn.transform.parent = oBuilding2.transform; //parenting
			cloneWindow_rightColumn.name = "window" + (++c);
			cloneWindow_rightColumn.transform.localScale.x = 0.1;
			cloneWindow_rightColumn.transform.localScale.y = 0.116753;
			cloneWindow_rightColumn.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneWindow_rightColumn);
			tmp_Wind_Y-= 2.5;
		}//end if
	}//end for
	c = 0;
	
	tmpWind_X = this.RandX + 2.82102;
	for(i=0; i<=1; i++){
		if(oWindow){
			var cloneGND_wind = Instantiate(oWindow, Vector3(tmpWind_X - 1.45, 1.35569, wind_Z), Quaternion.identity);
			cloneGND_wind.transform.parent = oBuilding2.transform; //parenting
			cloneGND_wind.name = "gnd flr window" + (++c);
			cloneGND_wind.transform.localScale.x = 0.1;
			cloneGND_wind.transform.localScale.y = 0.116753;
			cloneGND_wind.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneGND_wind);
			tmpWind_X -= 2.9;
		}//end if
	}//end for
	c = 0;
	//::::::::::::::::::::::::::::::::::::::::::End FACADE::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	//::::::::::::::::::::::::::::::::::::::::::Start Left Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	/* var wind_X = RandX + 2.82102;
	var wind_Y = 11.474193;
	var wind_Z = RandZ + 3.4551424;*/
	
	wind_X = this.RandX + 3.50;
	wind_Y = 11.474193;
	wind_Z = this.RandZ - 1.82102;
	for(i=0; i<=2; i++){
		for(j=0; j<=4; j++){
			if(oWindow){
			var cloneSideLeftWindow = Instantiate(oWindow, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
			cloneSideLeftWindow.transform.parent = oBuilding2.transform; //parenting
			cloneSideLeftWindow.name = "left side window " + (++c);
			cloneSideLeftWindow.transform.localScale.x = 0.1;
			cloneSideLeftWindow.transform.localScale.y = 0.116753;
			cloneSideLeftWindow.transform.localScale.z = 0.019;
			cloneSideLeftWindow.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
			aCollectionObj_2.Add(cloneSideLeftWindow);
			wind_Y-=2.5;
			if( (i==1) && (j==4) )
				cloneSideLeftWindow.active = false;
			}//end if
		}//end for
		wind_Y = 11.474193;
		wind_Z += 1.45;
	}//end for
	c = 0;
	//::::::::::::::::::::::::::::::::::::::::::End Left Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//::::::::::::::::::::::::::::::::::::::::::Start Right Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	wind_X = this.RandX - 3.50;
	wind_Y = 11.474193;
	wind_Z = this.RandZ - 1.82102;
	for(i=0; i<=2; i++){
		for(j=0; j<=4; j++){
			if(oWindow){
			var cloneSideRightWindow = Instantiate(oWindow, Vector3(wind_X, wind_Y, wind_Z), Quaternion.identity);
			cloneSideRightWindow.transform.parent = oBuilding2.transform; //parenting
			cloneSideRightWindow.name = "right side window " + (++c);
			cloneSideRightWindow.transform.localScale.x =0.1;
			cloneSideRightWindow.transform.localScale.y = 0.116753;
			cloneSideRightWindow.transform.localScale.z = 0.019;
			cloneSideRightWindow.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
			aCollectionObj_2.Add(cloneSideRightWindow);
			wind_Y-=2.5;
			if( (i==1) && (j==4))
			cloneSideRightWindow.active = false;
			}//end if
		}//end for
		wind_Y = 11.474193;
		wind_Z += 1.45;
	}//end for
	c = 0;
	//::::::::::::::::::::::::::::::::::::::::::End Right Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Windows(RandX, RandZ)
//---------------------------END WINDOWS-------------------------------------------------------------------



//----------------------------START ATTIC-------------------------------------------------------------------
public function Attic(RandX, RandZ){
//:::::::::::::::::::::::::::::::::::::::::::Start facade:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	oAttic = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	//Positioning the oAttic object
	oAttic.transform.position = Vector3( this.RandX, 13.20, this.RandZ + 2.7851424);
	oAttic.transform.parent = oBuilding2.transform;
	oAttic.name = "Attic";
	//Scaling the oAttic object
	oAttic.transform.localScale.x = 0.30;
	oAttic.transform.localScale.y =  0.15;
	oAttic.transform.localScale.z = 0.20;
	
	oAttic.renderer.material.color = Color(1, 0.980, 0.804, 0);
	//Attic window
	var wind_Z = this.RandZ + 3.4551424;
	
	oWindow = GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy(oWindow);
	//transparent windows
	//oWindow.transform.renderer.material.color = Color.clear; 
	oWindow.renderer.material.mainTexture = Resources.Load("window_corfu2"); //import texture for attic window
	
	var cloneAtticWind = Instantiate(oWindow, Vector3(this.RandX, 13.20, wind_Z), Quaternion.identity);
	cloneAtticWind.transform.parent = oBuilding2.transform; //parenting
	cloneAtticWind.name = "attic window";
	cloneAtticWind.transform.localScale.x =0.1;
	cloneAtticWind.transform.localScale.y = 0.070753;
	cloneAtticWind.transform.localScale.z = 0.019;
	aCollectionObj_2.Add(cloneAtticWind);
	
	var eaves_Y: float = 12.674193;
		if(oAttic){
			var lft_upper_eaves = Instantiate(oAttic, Vector3(this.RandX + 1.90102, eaves_Y, this.RandZ), Quaternion.identity);
			lft_upper_eaves.transform.parent = oBuilding2.transform; //parenting
			lft_upper_eaves.name = "left upper eaves";
			lft_upper_eaves.transform.localScale.x = 0.332;
			lft_upper_eaves.transform.localScale.y = 0.0125;
			lft_upper_eaves.transform.localScale.z = 1.119;
			aCollectionObj_2.Add(lft_upper_eaves);
			
			var main_upper_eaves =Instantiate(oAttic, Vector3(this.RandX, eaves_Y - 0.20, this.RandZ), Quaternion.identity);
			main_upper_eaves.transform.parent = oBuilding2.transform; //parenting
			main_upper_eaves.name = "main upper eaves";
			main_upper_eaves.transform.localScale.x = 1.052;
			main_upper_eaves.transform.localScale.y = 0.0110;
			main_upper_eaves.transform.localScale.z = 1.090;
			aCollectionObj_2.Add(main_upper_eaves);
			
			var rgt_upper_eaves = Instantiate(oAttic, Vector3(this.RandX - 1.90102, eaves_Y, this.RandZ), Quaternion.identity);
			rgt_upper_eaves.transform.parent = oBuilding2.transform; //parenting
			rgt_upper_eaves.name = "right upper eaves";
			rgt_upper_eaves.transform.localScale.x = 0.332;
			rgt_upper_eaves.transform.localScale.y = 0.0125;
			rgt_upper_eaves.transform.localScale.z = 1.119;
			aCollectionObj_2.Add(rgt_upper_eaves);
			
			var main_lower_eaves =Instantiate(oAttic, Vector3(this.RandX, eaves_Y - 0.30, this.RandZ), Quaternion.identity);
			main_lower_eaves.transform.parent = oBuilding2.transform; //parenting
			main_lower_eaves.name = "main lower eaves";
			main_lower_eaves.transform.localScale.x = 1.025;
			main_lower_eaves.transform.localScale.y = 0.0110;
			main_lower_eaves.transform.localScale.z = 1.045;
			aCollectionObj_2.Add(main_lower_eaves);
		}//end if
	
	var eavesWind_X = this.RandX + 2.82102;
	var eavesWind_Y = 9.694193;
	for(i=0; i<=1; i++){
		if(oAttic){
			var thrd_flr_eavesWind = Instantiate(oAttic, Vector3(eavesWind_X, eavesWind_Y, wind_Z + 0.1), Quaternion.identity);
			thrd_flr_eavesWind.transform.parent = oBuilding2.transform; //parenting
			thrd_flr_eavesWind.name = "3rd floor window eaves " + (++c);
			thrd_flr_eavesWind.transform.localScale.x = 0.15;
			thrd_flr_eavesWind.transform.localScale.y = 0.0125;
			thrd_flr_eavesWind.transform.localScale.z = 0.025;
			aCollectionObj_2.Add(thrd_flr_eavesWind);
			eavesWind_X -= 5.8;
		}//end if
	}//end for
	c = 0;
	
	eavesWind_X = this.RandX + 2.82102;
	eavesWind_Y = 7.094193;
	for(i=0; i<=4; i++){
		if(oAttic){
			var scnd_flr_eavesWind = Instantiate(oAttic, Vector3(eavesWind_X, eavesWind_Y, wind_Z + 0.1), Quaternion.identity);
			scnd_flr_eavesWind.transform.parent = oBuilding2.transform; //parenting
			scnd_flr_eavesWind.name = "2nd floor window eaves " + (++c);
			scnd_flr_eavesWind.transform.localScale.x = 0.15;
			scnd_flr_eavesWind.transform.localScale.y = 0.0125;
			scnd_flr_eavesWind.transform.localScale.z = 0.025;
			aCollectionObj_2.Add(scnd_flr_eavesWind);
			eavesWind_X -= 1.45;
		}//end if
	}//end for
	c = 0;
	
	eavesWind_X = this.RandX + 2.82102;
	eavesWind_Y = 4.694193;
	for(i=0; i<=1; i++){
		if(oAttic){
			var frst_flr_eavesWind = Instantiate(oAttic, Vector3(eavesWind_X, eavesWind_Y, wind_Z + 0.1), Quaternion.identity);
			frst_flr_eavesWind.transform.parent = oBuilding2.transform; //parenting
			frst_flr_eavesWind.name = "1st floor window eaves " + (++c);
			frst_flr_eavesWind.transform.localScale.x = 0.15;
			frst_flr_eavesWind.transform.localScale.y = 0.0125;
			frst_flr_eavesWind.transform.localScale.z = 0.025;
			aCollectionObj_2.Add(frst_flr_eavesWind);
			eavesWind_X -= 5.8;
		}//end if
	}//end for
	c = 0;
	//:::::::::::::::::::::::::::::::::::::::::::End facade:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	//::::::::::::::::::::::::::::::::::::::::::Start Left Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	var eaves_X = this.RandX + 3.55;
	var n_eaves_Y = 12.174193;
	var eaves_Z = this.RandZ - 1.82102;
	for(i=0; i<=2; i++){
		for(j=0; j<=4; j++){
		if(oAttic){
			var cloneSideLeftEaves = Instantiate(oAttic, Vector3(eaves_X, n_eaves_Y, eaves_Z), Quaternion.identity);
			cloneSideLeftEaves.transform.parent = oBuilding2.transform; //parenting
			cloneSideLeftEaves.name = "left side eaves " + (++c);
			cloneSideLeftEaves.transform.localScale.x = 0.15;
			cloneSideLeftEaves.transform.localScale.y = 0.0125;
			cloneSideLeftEaves.transform.localScale.z = 0.025;
			cloneSideLeftEaves.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
			aCollectionObj_2.Add(cloneSideLeftEaves);
			n_eaves_Y-=2.5;
			if( (i==1) && (j==4) )
				cloneSideLeftEaves.active = false;
			}//end if
		}//end for
		n_eaves_Y = 12.174193;
		eaves_Z += 1.45;
	}//end for
	c = 0;
	//::::::::::::::::::::::::::::::::::::::::::End Left Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::Start Right Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	eaves_X = this.RandX - 3.55;
	n_eaves_Y = 12.174193;
	eaves_Z = this.RandZ - 1.82102;
	for(i=0; i<=2; i++){
		for(j=0; j<=4; j++){
			if(oAttic){
			var cloneSideRightEaves = Instantiate(oAttic, Vector3(eaves_X, n_eaves_Y, eaves_Z), Quaternion.identity);
			cloneSideRightEaves.transform.parent = oBuilding2.transform; //parenting
			cloneSideRightEaves.name = "right side eaves " + (++c);
			cloneSideRightEaves.transform.localScale.x = 0.15;
			cloneSideRightEaves.transform.localScale.y = 0.0125;
			cloneSideRightEaves.transform.localScale.z = 0.025;
			cloneSideRightEaves.transform.eulerAngles.y = 90; //rotates y angle 90 degrees
			aCollectionObj_2.Add(cloneSideRightEaves);
			n_eaves_Y-=2.5;
			if( (i==1) && (j==4))
				cloneSideRightEaves.active = false;
			}//end if
		}//end for
		n_eaves_Y = 12.174193;
		eaves_Z += 1.45;
	}//end for
	c = 0;
	//::::::::::::::::::::::::::::::::::::::::::End Right Side::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}//end function Attic(RandX, RandZ)
//----------------------------END ATTIC-------------------------------------------------------------------



//------------------------------START BALCONY-------------------------------------------
public function Balcony(RandX, RandZ){

	oBalconyWind = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	//oBalconyWind.transform.renderer.material.color = Color.clear; 
	
	oBalconyWind.renderer.material.mainTexture = Resources.Load("window_corfu1");  //import texture for balcony windows
	//Positioning the oBalconyWind object
	var Balcwind_X = this.RandX + 2.82102;
	var Balcwind_Y = 11.074193;
	var Balcwind_Z = this.RandZ + 3.5051424;
	oBalconyWind.transform.position = Vector3(Balcwind_X - 1.45,Balcwind_Y,Balcwind_Z);
	oBalconyWind.transform.parent = oBuilding2.transform;
	oBalconyWind.name = "Balcony window 0";
	//Scaling the oBalconyWind object
	oBalconyWind.transform.localScale.x = 0.109;
	oBalconyWind.transform.localScale.y = 0.176753;
	oBalconyWind.transform.localScale.z = 0.019;

	for(i=0; i<=1; i++){
		if(oBalconyWind){
			var cloneBalconyWind_4th_flr = Instantiate(oBalconyWind,Vector3(Balcwind_X - 2.9, Balcwind_Y, Balcwind_Z), Quaternion.identity);
			cloneBalconyWind_4th_flr.transform.parent = oBuilding2.transform; //parenting
			cloneBalconyWind_4th_flr.name = "4th floor balcony window " + (++c);
			cloneBalconyWind_4th_flr.transform.localScale.x = 0.109;
			cloneBalconyWind_4th_flr.transform.localScale.y = 0.176753;
			cloneBalconyWind_4th_flr.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneBalconyWind_4th_flr);
			Balcwind_X -= 1.45;
		}//end if
	}//end for
	c = 0;
	
	var nBalcwind_X= this.RandX + 2.82102;
	var nBalcwind_Y = 11.074193;
	for(i=0; i<=2; i++){
		if(oBalconyWind){
			var cloneBalconyWind_2nd_flr = Instantiate(oBalconyWind,Vector3(nBalcwind_X - 1.45, nBalcwind_Y- 5.0, Balcwind_Z), Quaternion.identity);
			cloneBalconyWind_2nd_flr.transform.parent = oBuilding2.transform; //parenting
			cloneBalconyWind_2nd_flr.name = "2nd floor balcony window " + (++c);
			cloneBalconyWind_2nd_flr.transform.localScale.x = 0.109;
			cloneBalconyWind_2nd_flr.transform.localScale.y = 0.176753;
			cloneBalconyWind_2nd_flr.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneBalconyWind_4th_flr);
			nBalcwind_X -= 1.45;
		}//end if
	}//end for
	c = 0;
	
	//::::::::::::::::::Start Balcony::::::::::::::::::::::::::::::::::::::::::::::::
	oAttic = GameObject.CreatePrimitive(PrimitiveType.Cube);
	//solving an issue appearing: destroy visible instances appear as common cubes on the scene
	Destroy (oAttic);
	
	oAttic.renderer.material.color = Color(1, 0.980, 0.804, 0);
	
	var balcny_Y: float =  9.904193;
	if(oAttic){
		for(i=0; i<=1; i++){
			var balcony_flat = Instantiate(oAttic,Vector3(this.RandX, balcny_Y, wind_Z + 1.4 ), Quaternion.identity);
			balcony_flat.transform.parent = oBuilding2.transform; //parenting
			balcony_flat.name = "balcony flat " + (++c);
			balcony_flat.transform.localScale.x = 0.55;
			balcony_flat.transform.localScale.y = 0.0125;
			balcony_flat.transform.localScale.z = 0.128;
			aCollectionObj_2.Add(balcony_flat);
			balcny_Y -= 5.00;
		}//end for
	}//end if
	c = 0;
	//::::::::::::::::::End Balcony::::::::::::::::::::::::::::::::::::::::::::::::
	
	//::::Start Rails::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	oRails= GameObject.CreatePrimitive(PrimitiveType.Cube);
	Destroy (oRails);
	
	oRails.renderer.material.color = Color.white;  
	
	var rail_Y:float =  10.604193;
	var raildn_Y:float = 10.004193;
	wind_Z = this.RandZ + 4.32102;
	var nRail_updn_X:float = this.RandX + 1.82102;
	var nRail_lfup_lfdn_X:float = this.RandX + 1.83102;
	var nRail_rgup_rgdn_X:float = this.RandX + 1.730;
	
	//::::::::Start front Rails:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	for(i=0; i<=1; i++){
		if(oRails){
			var rail_up = Instantiate(oRails,Vector3(nRail_updn_X - 1.8195569, rail_Y, wind_Z), Quaternion.identity);
			rail_up.transform.parent = oBuilding2.transform; //parenting
			rail_up.name = "rail up " + (++c);
			rail_up.transform.localScale.x = 0.5539678;
			rail_up.transform.localScale.y = 0.002;
			rail_up.transform.localScale.z = 0.002;
			aCollectionObj_2.Add(rail_up);
		
			var rail_down = Instantiate(oRails,Vector3(nRail_updn_X - 1.8195569, raildn_Y, wind_Z), Quaternion.identity);
			rail_down.transform.parent = oBuilding2.transform; //parenting
			rail_down.name = "rail down " + (++c);
			rail_down.transform.localScale.x = 0.5539678;
			rail_down.transform.localScale.y = 0.002;
			rail_down.transform.localScale.z = 0.002;
			aCollectionObj_2.Add(rail_down);
			
			rail_Y -= 5;
			raildn_Y -= 5;
		}//end if
	}//end for 
	c = 0;
	
	nRail_updn_X = this.RandX + 1.82102;
	rail_Y = 10.604193;
	raildn_Y = 10.004193;
	
	for(i=0; i<=16; i++){
		for(j=0; j<=1; j++){
			if(oRails){
				var rail_lfup = Instantiate(oRails,Vector3(nRail_lfup_lfdn_X, rail_Y - 0.18, wind_Z), Quaternion.identity);
				rail_lfup.transform.parent = oBuilding2.transform; //parenting
				rail_lfup.name = "rail left up " + (++c);
				rail_lfup.transform.localScale.x = 0.030;
				rail_lfup.transform.localScale.y = 0.002;
				rail_lfup.transform.localScale.z = 0.002;
				rail_lfup.transform.eulerAngles.z = 310;
				aCollectionObj_2.Add(rail_lfup);
		
				
				var rail_rgup = Instantiate(oRails,Vector3(nRail_rgup_rgdn_X, rail_Y - 0.18, wind_Z), Quaternion.identity);
				rail_rgup.transform.parent = oBuilding2.transform; //parenting
				rail_rgup.name = "rail right up " + (++c);
				rail_rgup.transform.localScale.x = 0.030;
				rail_rgup.transform.localScale.y = 0.002;
				rail_rgup.transform.localScale.z = 0.002;
				rail_rgup.transform.eulerAngles.z = -310;
				aCollectionObj_2.Add(rail_rgup);
		
				
				var rail_lfdn = Instantiate(oRails,Vector3(nRail_lfup_lfdn_X, rail_Y - 0.45, wind_Z), Quaternion.identity);
				rail_lfdn.transform.parent = oBuilding2.transform; //parenting
				rail_lfdn.name = "rail left down " + (++c);
				rail_lfdn.transform.localScale.x = 0.030;
				rail_lfdn.transform.localScale.y = 0.002;
				rail_lfdn.transform.localScale.z = 0.002;
				rail_lfdn.transform.eulerAngles.z = -310;
				aCollectionObj_2.Add(rail_lfdn);
				
				
				var rail_rgdn = Instantiate(oRails,Vector3(nRail_rgup_rgdn_X, rail_Y - 0.45, wind_Z), Quaternion.identity);
				rail_rgdn.transform.parent = oBuilding2.transform; //parenting
				rail_rgdn.name = "rail right down " + (++c);
				rail_rgdn.transform.localScale.x = 0.030;
				rail_rgdn.transform.localScale.y = 0.002;
				rail_rgdn.transform.localScale.z = 0.002;
				rail_rgdn.transform.eulerAngles.z = 310;
				aCollectionObj_2.Add(rail_rgdn);
				
				
				rail_Y -= 5;
				raildn_Y -= 5;
			}//end if
		}//end for
		rail_Y =  10.604193;
		raildn_Y = 10.004193;
		nRail_updn_X -= 0.22102;
		nRail_lfup_lfdn_X -= 0.22102;
		nRail_rgup_rgdn_X -= 0.22102;
	}//end for 
	c = 0;
	//::::::::End front Rails:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		
		//::::::::Start left/right up/down Main Side Rails:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		var rail_Z = this.RandZ + 4.32102;
		nRail_updn_X = this.RandX + 1.92102;
		nRail_lfup_lfdn_X = this.RandX + 1.88102;
		nRail_rgup_rgdn_X = this.RandX + 1.780;
		
		for(i=0; i<=1; i++){
			for(j=0; j<=1; j++){
				if(oRails){
					var rail_up_left = Instantiate(oRails,Vector3(nRail_updn_X , rail_Y, rail_Z -0.4), Quaternion.identity);
					rail_up_left.transform.parent = oBuilding2.transform; //parenting
					rail_up_left.name = "rail up left " + (++c);
					rail_up_left.transform.localScale.x = 0.1189484;
					rail_up_left.transform.localScale.y = 0.002;
					rail_up_left.transform.localScale.z = 0.002;
					rail_up_left.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_up_left);
			
					var rail_down_left = Instantiate(oRails,Vector3(nRail_updn_X, raildn_Y, rail_Z -0.4), Quaternion.identity);
					rail_down_left.transform.parent = oBuilding2.transform; //parenting
					rail_down_left.name = "rail down left " + (++c);
					rail_down_left.transform.localScale.x = 0.1189484;
					rail_down_left.transform.localScale.y = 0.002;
					rail_down_left.transform.localScale.z = 0.002;
					rail_down_left.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_down_left);
				
					rail_Y -= 5;
					raildn_Y -= 5;
				}//end if
			}//end for
			rail_Y =  10.604193;
			raildn_Y = 10.004193;
			nRail_updn_X -= 3.85102;
		}//end for
		c = 0;
		
		rail_Z = this.RandZ + 4.12102;
		var rail_Z_rg = this.RandZ + 4.22204;
		nRail_updn_X = this.RandX + 1.92102;
		nRail_lfup_lfdn_X = this.RandX + 1.92102; 
		nRail_rgup_rgdn_X = this.RandX + 1.92102; 
		
		for(i=0; i<=3; i++){
			for(j=0; j<=1; j++){
				if(oRails){
					var rail_lfup_left = Instantiate(oRails,Vector3(nRail_lfup_lfdn_X, rail_Y - 0.18, rail_Z), Quaternion.identity);
					rail_lfup_left.transform.parent = oBuilding2.transform; //parenting
					rail_lfup_left.name = "rail left up left (left side)" + (++c);
					rail_lfup_left.transform.localScale.x = 0.030;
					rail_lfup_left.transform.localScale.y = 0.002;
					rail_lfup_left.transform.localScale.z = 0.002;
					rail_lfup_left.transform.eulerAngles.z = 310;
					rail_lfup_left.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_lfup_left);
					
					
					var rail_rgup_left = Instantiate(oRails,Vector3(nRail_rgup_rgdn_X, rail_Y - 0.18, rail_Z_rg), Quaternion.identity);
					rail_rgup_left.transform.parent = oBuilding2.transform; //parenting
					rail_rgup_left.name = "rail right up left (left side)" + (++c);
					rail_rgup_left.transform.localScale.x = 0.030;
					rail_rgup_left.transform.localScale.y = 0.002;
					rail_rgup_left.transform.localScale.z = 0.002;
					rail_rgup_left.transform.eulerAngles.z = -310;
					rail_rgup_left.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_rgup_left);
					
					
					var rail_lfdn_left = Instantiate(oRails,Vector3(nRail_lfup_lfdn_X, rail_Y - 0.45, rail_Z), Quaternion.identity);
					rail_lfdn_left.transform.parent = oBuilding2.transform; //parenting
					rail_lfdn_left.name = "rail left down left (left side)" + (++c);
					rail_lfdn_left.transform.localScale.x = 0.030;
					rail_lfdn_left.transform.localScale.y = 0.002;
					rail_lfdn_left.transform.localScale.z = 0.002;
					rail_lfdn_left.transform.eulerAngles.z = -310;
					rail_lfdn_left.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_lfdn_left);
					
					
					var rail_rgdn_left = Instantiate(oRails,Vector3(nRail_rgup_rgdn_X, rail_Y - 0.45, rail_Z_rg), Quaternion.identity);
					rail_rgdn_left.transform.parent = oBuilding2.transform; //parenting
					rail_rgdn_left.name = "rail right down left (left side)" + (++c);
					rail_rgdn_left.transform.localScale.x = 0.030;
					rail_rgdn_left.transform.localScale.y = 0.002;
					rail_rgdn_left.transform.localScale.z = 0.002;
					rail_rgdn_left.transform.eulerAngles.z = 310;
					rail_rgdn_left.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_rgdn_left);
					
					rail_Y -= 5;
					raildn_Y -= 5;
				}//end if
			}//end for
			rail_Y =  10.604193;
			raildn_Y = 10.004193;
			rail_Z -= 0.22102;
			rail_Z_rg -= 0.22102;
		}//end for 
		c = 0;
		
		rail_Z = this.RandZ + 4.12102;
		rail_Z_rg = this.RandZ + 4.22204;
		nRail_updn_X = this.RandX - 1.82102;
		nRail_lfup_lfdn_X = this.RandX - 1.92102;
		nRail_rgup_rgdn_X = this.RandX - 1.92102;
		
		for(i=0; i<=3; i++){
			for(j=0; j<=1; j++){
				if(oRails){
					var rail_lfup_right = Instantiate(oRails,Vector3(nRail_lfup_lfdn_X, rail_Y - 0.18, rail_Z), Quaternion.identity);
					rail_lfup_right.transform.parent = oBuilding2.transform; //parenting
					rail_lfup_right.name = "rail left up left (right side)" + (++c);
					rail_lfup_right.transform.localScale.x = 0.030;
					rail_lfup_right.transform.localScale.y = 0.002;
					rail_lfup_right.transform.localScale.z = 0.002;
					rail_lfup_right.transform.eulerAngles.z = 310;
					rail_lfup_right.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_lfup_right);
					
					
					var rail_rgup_right = Instantiate(oRails,Vector3(nRail_rgup_rgdn_X, rail_Y - 0.18, rail_Z_rg), Quaternion.identity);
					rail_rgup_right.transform.parent = oBuilding2.transform; //parenting
					rail_rgup_right.name = "rail right up left (right side)" + (++c);
					rail_rgup_right.transform.localScale.x = 0.030;
					rail_rgup_right.transform.localScale.y = 0.002;
					rail_rgup_right.transform.localScale.z = 0.002;
					rail_rgup_right.transform.eulerAngles.z = -310;
					rail_rgup_right.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_rgup_right);
					
					
					var rail_lfdn_right = Instantiate(oRails,Vector3(nRail_lfup_lfdn_X, rail_Y - 0.45, rail_Z), Quaternion.identity);
					rail_lfdn_right.transform.parent = oBuilding2.transform; //parenting
					rail_lfdn_right.name = "rail left down left (right side)" + (++c);
					rail_lfdn_right.transform.localScale.x = 0.030;
					rail_lfdn_right.transform.localScale.y = 0.002;
					rail_lfdn_right.transform.localScale.z = 0.002;
					rail_lfdn_right.transform.eulerAngles.z = -310;
					rail_lfdn_right.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_lfdn_right);
					
					
					var rail_rgdn_right = Instantiate(oRails,Vector3(nRail_rgup_rgdn_X, rail_Y - 0.45, rail_Z_rg), Quaternion.identity);
					rail_rgdn_right.transform.parent = oBuilding2.transform; //parenting
					rail_rgdn_right.name = "rail right down left (right side)" + (++c);
					rail_rgdn_right.transform.localScale.x = 0.030;
					rail_rgdn_right.transform.localScale.y = 0.002;
					rail_rgdn_right.transform.localScale.z = 0.002;
					rail_rgdn_right.transform.eulerAngles.z = 310;
					rail_rgdn_right.transform.eulerAngles.y = 90;
					aCollectionObj_2.Add(rail_rgdn_right);
					
					rail_Y -= 5;
					raildn_Y -= 5;
				}//end if
			}//end for
			rail_Y =  10.604193;
			raildn_Y = 10.004193;
			rail_Z -= 0.22102;
			rail_Z_rg -= 0.22102;
		}//end for 
		c = 0;
		
		//::::::::End left/right up/down Main Side Rails:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//:::End Rails:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
}//end Balcony(RandX, RandZ)
//----------------------END BALCONY---------------------------------------------------------------------------



//-----------------------START DOORS---------------------------------------------------------
public function Doors(RandX, RandZ){	
	oDoor = GameObject.CreatePrimitive(PrimitiveType.Cube);
	
	//oDoor.transform.renderer.material.color = Color.clear;
	
	oDoor.renderer.material.mainTexture = Resources.Load("door_corfu2");  //import texture for doors
	//Positioning the oDoor object
	var door_X = this.RandX + 2.82102;
	var door_Z = this.RandZ + 3.5051424;
	var Balcwind_Z = this.RandZ + 3.4551424;
	oDoor.transform.position = Vector3(door_X, 1.35569, Balcwind_Z);
	
	oDoor.transform.parent = oBuilding2.transform;
	oDoor.name = "Door 0";
	//Scaling the oDoor object
	oDoor.transform.localScale.x = 0.122;
	oDoor.transform.localScale.y = 0.176753;
	oDoor.transform.localScale.z = 0.019;
	
	for(i=0; i<=1; i++){
		if(oDoor){
			var cloneDoor = Instantiate(oDoor, Vector3(door_X - 2.89, 1.35569, door_Z), Quaternion.identity);
			cloneDoor.transform.parent = oBuilding2.transform; //parenting
			cloneDoor.name = "door " + (++c);
			cloneDoor.transform.localScale.x = 0.122;
			cloneDoor.transform.localScale.y = 0.176753;
			cloneDoor.transform.localScale.z = 0.019;
			aCollectionObj_2.Add(cloneDoor);
			door_X -= 2.89;
		}//end if
	}//end for
	c = 0;
}//end Doors(RandX, RandZ)
//------------------------------------END DOORS---------------------------------------------------------

//---------------------------------------START ROOF------------------------------------------------------
//Attic Roof
public function AtticRoof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Attic Roof";
	tmpobj.transform.parent = oBuilding2.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX, 14.4, this.RandZ + 3.6); //P1 
	verts[1] = new Vector3(this.RandX - 1.2, 14.1, this.RandZ + 3.6); //P2
	verts[2] = new Vector3(this.RandX + 1.2, 14.1, this.RandZ + 3.6); //P3
	
	verts[3] = new Vector3(this.RandX, 14.4, this.RandZ + 2); //P4
	verts[4] = new Vector3(this.RandX + 1.2, 14.1, this.RandZ + 2); //P5
	verts[5] = new Vector3(this.RandX - 1.2, 14.1, this.RandZ + 2); //P6


	uv[0] = new Vector2(0.5, 0);
	uv[1] = new Vector2(1, 0);
	uv[2] = new Vector2(0, 0);
	
	uv[3] = new Vector2(0.5, 1);
	uv[4] = new Vector2(0, 1);
	uv[5] = new Vector2(1, 1);
	
	
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
	mesh.name = "Attic Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	mf.mesh = mesh;
	tmpobj.renderer.material.mainTexture = Resources.Load("tiled_roof_red_grey");
}//end function AtticRoof(RandX, RandZ)

//Main Roof
public function MainRoof(RandX, RandZ){
	var tmpobj: GameObject = new GameObject();
	var mf: MeshFilter = tmpobj.AddComponent(MeshFilter);
	
//	tmpobj.AddComponent(MeshFilter);
	tmpobj.AddComponent(MeshRenderer);
	tmpobj.name = "Main Roof";
	tmpobj.transform.parent = oBuilding2.transform;	
	
	var verts: Vector3[] = new Vector3[6];
	var normals: Vector3[] = new Vector3[6];
	var uv: Vector2[] = new Vector2[6];
	var tri: int[] = new int[18]; //3 vertices * 6 triangles =18
	
	
	//vertices positioning
	verts[0] = new Vector3(this.RandX - 3.5, 14, this.RandZ + 0.5); //P1 
	verts[1] = new Vector3(this.RandX - 3.5, 12.7, this.RandZ - 4); //P2
	verts[2] = new Vector3(this.RandX - 3.5, 12.7, this.RandZ + 4); //P3
	
	verts[3] = new Vector3(this.RandX + 3.5, 14, this.RandZ + 0.5); //P4
	verts[4] = new Vector3(this.RandX + 3.5, 12.7, this.RandZ + 4); //P5
	verts[5] = new Vector3(this.RandX + 3.5, 12.7, this.RandZ - 4); //P6


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
	mesh.name = "Main Roof";
	mesh.vertices = verts;
	mesh.triangles = tri;
	mesh.uv = uv;
	mesh.normals = normals;
	mesh.RecalculateNormals();
	mf.mesh = mesh;
	tmpobj.renderer.material.mainTexture = Resources.Load("tiled_roof_red_grey");
}//end function  MainRoof(RandX, RandZ)
//----------------------------------------END ROOF--------------------------------------------------------

