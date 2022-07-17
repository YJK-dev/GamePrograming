#pragma strict

var labelStyle : GUIStyle;

function Start () {

}

function Update () 
{
	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("Maze Game");
	}
}

function OnGUI()
{
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.Label(Rect(0, sh/4, sw, sh/4), "BALL MAZE", labelStyle);
	GUI.Label(Rect(0, sh/2, sw, sh/4), "Hit Space Key", labelStyle);
	
}