#pragma strict

var coinSE : AudioClip;
var damageSE : AudioClip;

var jumpSE : AudioClip;

function Start () {

}

function Update () 
{
}

function CatchCoin(amount : int)
{
	audio.PlayOneShot(coinSE);
}

function ApplyDamage(amount : int)
{
	audio.PlayOneShot(damageSE);
}

/*function DeathSound()
{
	audio.PlayOneShot(deathSE);
}*/

function OnCollisionEnter(coll : Collision)
{
	if(Input.GetButtonDown("Jump"))
	{
		audio.PlayOneShot(jumpSE);
	}
}