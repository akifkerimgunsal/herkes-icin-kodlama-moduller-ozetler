/**
 * 
 */

  function sirala() {
	 var birinciSayi=+document.getElementById("input1").value;
	 var ikinciSayi=+document.getElementById("input2").value;
	 var ucuncuSayi=+document.getElementById("input3").value;
	 var buyukSayi = "";
	 var ortaSayi = "";
	 var kucukSayi = "";
	 
	 if(birinciSayi > ikinciSayi){
		 buyukSayi = birinciSayi;
		 kucukSayi = ikinciSayi;
	 }
	 else {
		 buyukSayi = ikinciSayi;
		 kucukSayi = birinciSayi;
	 }
	 
	 if(ucuncuSayi > buyukSayi){
		 ortaSayi = buyukSayi;
		 buyukSayi = ucuncuSayi;
	 }
	 else{
		 if(ucuncuSayi > kucukSayi){
		 	ortaSayi = ucuncuSayi;
		 	}
		 else{
		 	ortaSayi = kucukSayi;
		 	kucukSayi = ucuncuSayi;
		 }
	 }
	 
	 document.getElementById("p1").innerHTML = buyukSayi + ">" + ortaSayi + ">" + kucukSayi;
 }
 
 function temizle(){
	 document.getElementById("input1").value = " ";
	 document.getElementById("input2").value = " ";
	 document.getElementById("input3").value = " ";
	 document.getElementById("p1").innerHTML = "Sonuçlar burada gösterilecek...";
 }
 