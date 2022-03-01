function ejecuta(){
	v1=document.f_ciclos.v1.value;
	if (v1.length==0){
		alert("Error, se debe indicar el valor de X");
		document.f_ciclos.v1.style.background="red";
	}
	else{
		v1=parseInt(v1);
		if (!(v1>=1 && v1<=10)){
				alert("Error, X debe de estar dentro de 1 y 10");
				document.f_ciclos.v1.style.background="red";
		}
			else{
				v2=document.f_ciclos.v2.value;
				if (v2.length==0){
					alert("Error, se debe indicar el valor de Y");
					document.f_ciclos.v2.style.background="red";
				}
				else{
					v2=parseInt(v2);
					if (!(v2>=1 && v2<=5)){
						alert("Error, Y debe de estar dentro de 1 y 5");
						document.f_ciclos.v2.style.background="red";	
					} // Termina el ciclo
					else{
						res=Math.pow(v1, v2);
						document.f_ciclos.res.value=res;
					}
			}
		}
	}
}

function campo_v1(){
	document.f_ciclos.v1.style.background="blue";
}

function campo_v2(){
	document.f_ciclos.v2.style.background="blue";
}