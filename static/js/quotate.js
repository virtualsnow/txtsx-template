function datestr(){
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;
	return today;
};

function hourstr(){
	var today = new Date();
	var hour = today.getHours();
	if(hour == 0){
		return "Midnight";
	}
	else{
		return ((hour < 12)? String(hour) + " AM" : String(hour%12) + " PM");
	}
}


var quotes = [
	"can never have enough phones.",
	"donate pockets for all these phones.",
	"SIM card connoisseur.",
	"Tracfones are the new pokemon cards.",
	"testtesttesttesttest",
	"100% unhackable, guaranteed.",
	"shoutout to w00tw00t.at.blackhats.romanian.anti-sec, our biggest fan.",
	"Glocks don't have safeties.",
	"<insert dj airhorn noises here>",
	"REVERSEHACK.exe [--------84%    ]",
	"You've got mail.",
	"WARNING: This product contains chemicals known to the State of California to cause cancer and birth defects or other reproductive harm.",
	"They're watching you.",
	"I'm in.",
	"put kevin back",
	"when moon?",
	datestr() + ": Now running on 2048 qubits!",
	"IF YOU'RE READING THIS, YOU'VE BEEN IN A COMA FOR ALMOST 20 YEARS NOW. WE'RE TRYING A NEW TECHNIQUE. WE DON'T KNOW WHERE THIS MESSAGE WILL END UP IN YOUR DREAM, BUT WE HOPE WE'RE GETTING THROUGH.",
	"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
	"Get in the fucking robot, Shinji.",
	"running from the information-theoretic reaper",
	"Did you remember to turn the stove off?",
	"Do not operate heavy machinery while using this medication.",
	"Fuck Cloudflare.",
	"SALE! Quantum solvent superfluid helium-4! Buy one get one free TODAY ONLY!",
	"Served in 162ms from adiabatic superobject Jupiter Brain Zeus",
	"I don't really trust those folk from Kepler-90.",
	"CONGRATULATIONS!!! You're the 1,000,000th visitor to our site!! Click here to enter our drawing for a beautiful iphone 4 with a cracked screen and blacklisted IMEI. Charger not included. Terms and conditions apply.",
	"Feeling cute, might post 0days on full disclosure later.",
	"Hohlraum and a Raman laser for birthday please, daddy.",
	"New phone, who dis?",
	datestr() + ": In a Complicated Relationship with Russian Disinformation Bot.",
	"When I grow up I'm going to get out of this old town KBC Void and be a supermodel in a big galaxy cluster.",
	"Delegalize laws.",
	"Your neopet misses you.",
	"You're good with that computer stuff, right? I've got this idea for an app..",
	"hunter2",
	datestr() + ": Scheduled downtime today for all RSA-2048 and RSA-4096 instant cracking APIs.  Sorry for any inconvenience.",
	"46 DC EA D3 17 FE 45 D8 09 23 EB 97 E4 95 64 10 D4 CD B2 C2",
	"Is importing data from a combolist considered breaking datavegan?",
	datestr() + ": Breaking News: Corporate 'ex-blackhat' hacker gets free pass to heaven and wins Nobel Peace Prize for following 30 day responsible disclosure guidelines.",
	"Don't forget to annihilate that like button!",
	"For only 0.0013 BTC a month, you can have access to my premium snap, where I post lots of uncensored chip pics and you can have the full reverserfriend experience. Join today xoxo <33",
	"This site protected using Military Grade 256 bit encryption made by top scientists.",
	"swiper no swiping =oAeGZ1Mk1GNZl2NDBVZiVWZ3p3Ykdjeulld1ZWZNZjMrJUdXJlUKx0UyI1YTJHe2hEdYVDT",
	"5% tint and candy emerald paint on a Prius with a gen1 tamagochi hooked up to the CAN bus, level 5 autonomy achieved.",
	"Oh heck, it's " + hourstr() + " already, g2gttyl.",
	"It'll all be fine.",
	"rip peep, rip nipsey, rip hawking, rip xxx, rip juice",
	"Logging off, transferring full control to you, visitor. You're the captain now.",
	"You wouldn't download a car.",
	"Did you even ask before you downloaded all my stylesheets?",
	"Stay hydrated out there.",
	"RUN. No time to explain, just throw your drives in the microwave and RUN.",
	"Don't worry about breaking it, always take it apart.",
	"Process over product.",
	"Money as a sideproduct.",
	"Ziplocks and baking soda.",
	"Contact light. Okay, engine stop. ACA out of detent. Modes control both auto, descent engine command override, off.",
	"-cherry mx blue clickity noises-",
	"High Delta-O-18 ice cores, guaranteed.",

];

window.onload = function(){
	document.getElementById("logoquote").innerText = 
		quotes[Math.floor(Math.random()*quotes.length)];
};
