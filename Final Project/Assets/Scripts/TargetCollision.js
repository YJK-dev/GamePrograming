#pragma strict
private var beenHit : boolean = false;
private var targetRoof : Animation;
var hitSound : AudioClip;
var resetSound : AudioClip;
var resetTime : float = 3.0;


function Start () {
	targetRoof = transform.parent.transform.parent.animation;
}

function Update () {

}

function OnCollisionEnter(theObject : Collision){
	if(beenHit == false && theObject.gameObject.name == "coconut"){
		StartCoroutine("targetHit");
	}
}

function targetHit(){
	audio.PlayOneShot(hitSound);
	targetRoof.Play("down");
	beenHit = true;
	CoconutWin.targets++;
	
	yield new WaitForSeconds(resetTime);
	
	audio.PlayOneShot(resetSound);
	targetRoof.Play("up");
	beenHit = false;
	CoconutWin.targets--;
	
}

@script RequireComponent(AudioSource)