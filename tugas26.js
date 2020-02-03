function tugas26(){
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    var hasil;

    for (let index = 0; index < angka.length; index++) {
        hasil = isFinite(angka[index]);
        
        if(hasil){
            console.log("Angka ",angka[index]," NOT Infinity");
        }else{
            console.log("Angka ",angka[index]," IS Infinity")
        }
        
    }
}

tugas26();