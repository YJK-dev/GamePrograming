#pragma strict
var winSequence : GameObject;
var fader : GUITexture;
var winClip : AudioClip;

function Start () {

}

function Update () {

}

function GameOver(){
	//yield WaitForSeconds(5.0);
	AudioSource.PlayClipAtPoint(winClip, transform.position);
	Instantiate(winSequence);
	
	yield WaitForSeconds(10.0);
	Instantiate(fader);
}