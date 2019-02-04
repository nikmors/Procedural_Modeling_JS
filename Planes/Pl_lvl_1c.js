public var h1: House_1; 
public var h3: House_3;
public var h4: House_4;

public var pln: GameObject; 
pln = GameObject.Find("Plane_lvl_1c");

function Start() {
	
	var rand: int = Random.Range(0,3); //random choice between integer numbers 0-2, which means h1 or h3 or h4
	
	if( rand == 0 ){
		h4 = gameObject.AddComponent("House_4");
		h4.RandX = pln.transform.position.x;
		h4.RandZ = pln.transform.position.z;
		h4.transform.rotation.y = pln.transform.rotation.y;
		h4.mainDO();
	}
	else if( rand == 1 ){
		h1 = gameObject.AddComponent("House_1");
		h1.RandX = pln.transform.position.x;
		h1.RandZ = pln.transform.position.z;
		h1.transform.rotation.y = pln.transform.rotation.y;
		h1.mainDO();
	}
	else if( rand == 2 ){
		h3 = gameObject.AddComponent("House_3");
		h3.RandX = pln.transform.position.x;
		h3.RandZ = pln.transform.position.z;
		h3.transform.rotation.y = pln.transform.rotation.y;
		h3.mainDO();
	}
	
}