#pragma strict

var touchSE : AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter(coll : Collision)
{
	audio.PlayOneShot(touchSE);
}