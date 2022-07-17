#pragma strict
static var charge : int = 0;
var collectSound : AudioClip;
var winObj : GameObject;

// HUD
var hudCharge : Texture2D[];
var chargeHudGUI : GUITexture;
// Generator
var meterCharge : Texture2D[];
var meter : Renderer;
// Matches
private var haveMatches : boolean = false;
var matchGUIprefab : GUITexture;
private var matchGUI : GUITexture;

var textHints : GUIText;
private var fireIsLit  : boolean = false;

function Start () {
	charge = 0;
}

function Update () {

}

function CellPickup(){
	HUDon();
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	chargeHudGUI.texture = hudCharge[charge];
	meter.material.mainTexture = meterCharge[charge];
}

function HUDon(){
	if(!chargeHudGUI.enabled){
		chargeHudGUI.enabled = true;
	}
}

function MatchPickup(){
	haveMatches = true;
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	var matchHUD : GUITexture = Instantiate(matchGUIprefab, Vector3(0.15, 0.1, 0), transform.rotation);
	matchGUI = matchHUD;
}

function OnControllerColliderHit(col : ControllerColliderHit){
	if(col.gameObject.name == "campfire"){
		if(haveMatches&& !fireIsLit){
			//yield WaitForSeconds(5.0);
			//textHints.SendMessage("ShowHint", "Nailed it!");
			LightFire(col.gameObject);
		}
		else if(!haveMatches&& !fireIsLit) {
			//yield WaitForSeconds(1.0);
			textHints.SendMessage("ShowHint", "I could use this campfire to signal for help.. if only I could light it..");
		}
	}
}

function LightFire(campfire : GameObject){
	var fireEmitterComponents : Component[] = campfire.GetComponentsInChildren(ParticleEmitter);
	var fireEmitter : ParticleEmitter;
	for (var i = 0; i < fireEmitterComponents.Length; i++){
		fireEmitter = fireEmitterComponents[i] as ParticleEmitter;
		fireEmitter.emit = true;
	}
	campfire.audio.Play();
	
	Destroy(matchGUI);
	haveMatches = false;
	fireIsLit = true;
	winObj.SendMessage("GameOver");
	
}