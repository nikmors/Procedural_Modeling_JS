public var h5: House_5; 

public var pln: GameObject; 
pln = GameObject.Find("Plane_lvl_3g");

function Start() {

	h5 = gameObject.AddComponent("House_5");
	h5.Rand_X = pln.transform.position.x;
	h5.Rand_Z = pln.transform.position.z;
	h5.mainDO();
}