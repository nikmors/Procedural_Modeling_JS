public var ch: Church; 

public var pln: GameObject; 
pln = GameObject.Find("Plane_lvl_4");

function Start() {

	ch = gameObject.AddComponent("Church");
	ch.RandX = pln.transform.position.x;
	ch.RandZ = pln.transform.position.z;
	//ch.RandRotY = pln.transform.eulerAngles.y;
	//var rot = ch.transform.rotation; // The source of rotation
	//pln.transform.rotation = rot * Quaternion.Euler(0, 90, 0);
	
	//ch.transform.rotation = pln.transform.rotation;
	//Debug.Log("Rotation of plane: " + ch.transform.rotation);
	//var rot = ch.transform.eulerAngles; 
	//var pln_rot = pln.transform.eulerAngles.y;
	//rot = Vector3(0, pln_rot, 0);
	//ch.transform.rotation.y = 23.49296;
	ch.mainDO();
}