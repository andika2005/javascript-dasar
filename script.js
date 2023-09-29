
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
    const test = document.getElementById('test');

    const buah = ["apel", "jeruk", "mangga", "pisang", "duren", "sirsak", "jambu"]
    const nomor = [1, 2, 3, 4, 5, 6, 7, 8]

    //ini pengkondisian
    if(id == 'buah' && pw == 'buah123'){
        //ini looping nya
        buah.forEach(function (nilai){
            const li = document.createElement('li');
            ul.appendChild(li);
            li.appendChild(document.createTextNode('ini buah'+ ' '+ nilai));
        });
    }

    else if (id =='nomor' && pw == 'nomor123'){
        nomor.forEach(function (nilai2){
            let li = document.createElement('li');
            ul.appendChild(li);
            li.appendChild(document.createTextNode('test nomor'+ ' ' + nilai2))
      });
    }
    else{
        document.getElementById('p').textContent = 'salah woi';
    }

}

object = document.getElementById('object');
button2 = document.getElementById('button2');
const sekolah = ['bangku','meja', 'papantulis', 'spidol', 'jendela']

button2.addEventListener('click', function(){
    document.getElementById('input2').value = sekolah[0];
    //  document.writeln(sekolah[1]);
});

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

// kalkulator
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
