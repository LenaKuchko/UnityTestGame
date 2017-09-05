function OnTriggerEnter (Info : Collider) {
	Destroy(gameObject);
	CoinSystem.coinscollect +=1;
}