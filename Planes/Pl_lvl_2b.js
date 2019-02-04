public var h2: House_2; 
public var h7: House_7;
public var h8: House_8;

public var pln: GameObject; 
pln = GameObject.Find("Plane_lvl_2b");

function Start() {
	
	var rand: int = Random.Range(0,3); //random choice between integer numbers 0-3, which means h2 or h6 or h7 or h8
	
	if( rand == 0 ){
		h2 = gameObject.AddComponent("House_2");
		h2.RandX = pln.transform.position.x;
		h2.RandZ = pln.transform.position.z;
		h2.mainDO();
	}
	else if( rand == 1 ){
		h7 = gameObject.AddComponent("House_7");
		h7.RandX = pln.transform.position.x;
		h7.RandZ = pln.transform.position.z;
		h7.mainDO();
	}
	else if( rand == 2 ){
		h8 = gameObject.AddComponent("House_8");
		h8.RandX = pln.transform.position.x;
		h8.RandZ = pln.transform.position.z;
		h8.mainDO();
	}
}