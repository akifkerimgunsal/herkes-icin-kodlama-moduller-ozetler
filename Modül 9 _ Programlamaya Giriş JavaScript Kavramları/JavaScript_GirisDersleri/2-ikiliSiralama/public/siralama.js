/**
 * 
 */

 function sirala() {
	 var birinciSayi=+document.getElementById("input1").value;
	 var ikinciSayi=+document.getElementById("input2").value;
	 var gecici = "";
	 
	 if(birinciSayi == ikinciSayi){
		 gecici = birinciSayi + " = " + ikinciSayi;
	 }
	 else if(birinciSayi > ikinciSayi)
	 	gecici = ikinciSayi + " > " + birinciSayi;
	 else
	 	gecici = ikinciSayi + " < " + birinciSayi;
	 
	 document.getElementById("p1").innerHTML = gecici;
 }
 
 function temizle(){
	 document.getElementById("input1").value = " ";
	 document.getElementById("input2").value = " ";
	 document.getElementById("p1").innerHTML = "Sonuçlar burada gösterilecek...";
 }
 
 