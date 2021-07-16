
let hTrabajadas = Number(prompt("Ingrese horas trabajadas"));
document.write("Las horas trabajadas son:",hTrabajadas);

if(hTrabajadas>40){
    let salario=40*16.000;
    let hExtra=hTrabajadas-40;
    let salarioExtra=hExtra*20.0000;
    let salarioTotal=salario+salarioExtra;
   document.write("El salario total es:",  salarioTotal);

}
else{
    let salarioTotal=hTrabajadas*16.000;
    document.write("El salario total es:", salarioTotal);
}


