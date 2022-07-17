#pragma strict

var spawnSE : AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter(coll : Collision)
{
	audio.PlayOneShot(spawnSE);
}