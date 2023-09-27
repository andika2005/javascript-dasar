
//object created
const methhodMahasiswa = {
    makan: function(porsi){
      this.energi += porsi;
      console.log(`Halo ${this.nama}, selamat makan`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main`);
      },
      tidur: function(jam){
        this.energi += jam *2;
        console.log(`Halo ${this.nama}, selamat tidur`);
      }
};

function Mahasiswa(nama, energi){
    let mahasiswa = Object.create(methhodMahasiswa);
    mahasiswa.nama = nama;  
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

const andika = Mahasiswa('andika', 10);
const dodit = Mahasiswa('dodit', 10);

//test input
function button(){
    const id = document.getElementById('id').value;
    const pw = document.getElementById('password').value;
    const ul = document.getElementById('ul');

    const buah = ["apel", "jeruk", "mangga", "pisang", "duren", "sirsak", "jambu"]

    //ini looping nya
    if(id == 'test' && pw == 'test123'){
        buah.forEach(function (nilai){
            const li = document.createElement('li');
            ul.appendChild(li);
            li.appendChild(document.createTextNode('ini buah'+ ' '+ nilai));
        });     
    }
    else{
        document.getElementById('p').textContent = 'salah woi';
    }

}

//object
const mobil = {
    type : 'avanza',
    color : 'merah',
    kecepatan : '120km/h',
    start : function(){
        // alert('mobil' + mobil.type+ 'melaju dengan' +mobil.kecepatan)
    }
}

mobil.start()
