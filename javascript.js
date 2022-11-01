//tebak angka

var angka = Math.floor(Math.random()*10);
console.log(angka);

var result = false;
var kesempatan = 3;

while(result==false && kesempatan > 0){
    var tebakan = prompt('Tebak angka 1 - 10 yang disebut komputer. Kesempatan tersisa: ' + kesempatan);

    if(tebakan == angka){
        hasil = 'benar! angka yang di simpan komputer adalah ' + angka;
        result = true;
    }else{
        kesempatan -= 1;
        if(tebakan > angka){
            kondisi = 'lebih dari';
        }else{
            kondisi = 'kurang dari';
        }
        hasil = 'sayang sekali jawabanmu masih salah! angka tebakan ' + kondisi + ' angka milik komputer.\nSisa kesempatan: ' + kesempatan;
    }

    alert(hasil);
}