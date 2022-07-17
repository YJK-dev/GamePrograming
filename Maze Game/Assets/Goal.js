#pragma strict

private var ballCount : int;
private var counter : int;
private var cleared : boolean;
var labelStyle : GUIStyle;

function Start () 
{
	cleared = false;
	ballCount = GameObject.FindGameObjectsWithTag("Ball").length;
	Debug.Log("Start!");
	counter = 0;
}

function Update () 
{

}
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Ball")
	{
		counter ++;

		if(cleared == false && counter == ballCount)
		{
			cleared = true;
			yield WaitForSeconds(2.0);
			Application.LoadLevel("Title");
		}
	}
}

function OnTriggerExit(other:Collider)
{
	if(other.gameObject.tag == "Ball")
	counter --;
}

function OnGUI()
{
	if(cleared == true){
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		GUI.Label(Rect(sw/6, sh/3, sw*2/3, sh/3), "CLEARED!!", labelStyle);
	}
}