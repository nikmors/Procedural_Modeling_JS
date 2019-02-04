
function OnGUI () {
	//create background boxes and buttons, available on GUI
	GUI.Box(Rect(0,0,120,65), "Top-left Camera"); //GUI background Box for Top-left Camera
	GUI.Box(Rect(Screen.width - 350,0,120,65), "Top-middle Camera");//GUI background Box for Top-middle Camera
	GUI.Box(Rect(Screen.width - 120,0,120,65), "Top-right Camera"); //GUI background Box for Top-right Camera

	//create buttons
	if(GUI.Button(Rect(40,25,37,37), Resources.Load("top_left_cam"))){
		print("button1");
	}//end if 
	
	if(GUI.Button(Rect(Screen.width - 310,25,37,37), Resources.Load("top_cam"))){
		print("button2");
	}//end if
	
	if(GUI.Button(Rect(Screen.width - 80,25,37,37), Resources.Load("top_right_cam"))){
		print("button3");
	}//end if
	
	if(GUI.Button(Rect(Screen.width - 310,Screen.height - 45,50,50),Resources.Load("town"))){
		print("generate");
	}//end if
	
}//end function onGUI