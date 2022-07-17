#pragma strict
var crosshair : GUITexture;
var textHints : GUIText;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
	CoconutThrower.canThrow = true;
	crosshair.enabled = true;
	
		if(!CoconutWin.haveWon){
		textHints.SendMessage("ShowHint", "\n\n\n\n\n There's a power cell attached to this game, \n maybe I'll win it if I can knock down all the targets...");
		}
	}
}

function OnTriggerExit(col : Collider){
	if(col.gameObject.tag == "Player"){
	CoconutThrower.canThrow = false;
	crosshair.enabled = false;
	}
}
