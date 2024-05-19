/**
 * 
 */
const bilgiSatiri = "Sonuçlar burada gösterilecek...";

function sayfaYukle(){
	document.getElementById("p1").innerHTML = bilgiSatiri;
	document.getElementById("buton2").disabled = true;
}

function veriGirisi(){
	if( document.getElementById("buton2").disabled ){
		document.getElementById("buton2").disabled = false;
	}
}

function listele(){
	var sayiAdedi = ~~document.getElementById("input1").value;
	var ikiOnce, birOnce, Fibonacci;
	var geciciDizgi ="";
	var donguDenetim;
	
	if(sayiAdedi < 3)
		alert("2'den fazla sayı giriniz. İlk iki Fibonacci sayısı: 1,1'dir.")		
	else{
		geciciDizgi = "İlk " + sayiAdedi + " adet Fibonacci sayısı: 1,1";
		ikiOnce = 1;
		birOnce = 1;
		
		for(donguDenetim = 0; donguDenetim < sayiAdedi - 2; donguDenetim++){
			Fibonacci = birOnce+ikiOnce;
			ikiOnce = birOnce;
			birOnce = Fibonacci;
			geciciDizgi = geciciDizgi + "," + Fibonacci;
		}
		document.getElementById("p1").innerHTML = geciciDizgi;
	}
	
}

function temizle(){
	 document.getElementById("input1").value = "";
	 document.getElementById("p1").innerHTML = bilgiSatiri;
	 document.getElementById("buton2").disabled = true;
}