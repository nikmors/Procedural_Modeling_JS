public var h6: House_6; 

public var pln: GameObject; 
pln = GameObject.Find("Plane_lvl_5a");

function Start() {

	h6 = gameObject.AddComponent("House_6");
	h6.RandX = pln.transform.position.x;
	h6.RandZ = pln.transform.position.z;
	h6.mainDO();
}