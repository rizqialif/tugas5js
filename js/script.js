function tambah() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let angka1 = frm.angka1.value;
    let angka2 = frm.angka2.value;
    let jumlah;
    /*
    logic jika mahasiwa sudah input namanya ada salam
    jika tidak input namanya, ada pesan belum input nama
    */
    if (isNaN(angka1)|| isNaN(angka2)) {
       alert("Maaf  yang anda masukan bukan angka!");
        
    } else {
        jumlah = angka1 ^ angka2;
        alert(jumlah);

    }
}

function pengurangan() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let angka1 = frm.angka1.value;
    let angka2 = frm.angka2.value;
    let jumlah;
    /*
    logic jika mahasiwa sudah input namanya ada salam
    jika tidak input namanya, ada pesan belum input nama
    */
    if (isNaN(angka1)|| isNaN(angka2)) {
        alert("Maaf  yang anda masukan bukan angka!");
     
    } else {
           jumlah = angka1 - angka2;
        alert(jumlah);

    }
}

function perkalian() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let angka1 = frm.angka1.value;
    let angka2 = frm.angka2.value;
    let jumlah;
    /*
    logic jika mahasiwa sudah input namanya ada salam
    jika tidak input namanya, ada pesan belum input nama
    */
    if (isNaN(angka1)|| isNaN(angka2)) {
        alert("Maaf  yang anda masukan bukan angka!");
        

    } else {
        jumlah = angka1 * angka2;
        alert(jumlah);
    }
}

function pembagian() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let angka1 = frm.angka1.value;
    let angka2 = frm.angka2.value;
    let jumlah;
    /*
    logic jika mahasiwa sudah input namanya ada salam
    jika tidak input namanya, ada pesan belum input nama
    */
    if (isNaN(angka1)|| isNaN(angka2)) {
        alert("Maaf  yang anda masukan bukan angka!");
       
    } else {
         jumlah = angka1 / angka2;
        alert(jumlah);

    }
}

function pangkat() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let angka1 = frm.angka1.value;
    let angka2 = frm.angka2.value;
    let jumlah;
    /*
    logic jika mahasiwa sudah input namanya ada salam
    jika tidak input namanya, ada pesan belum input nama
    */
    if (isNaN(angka1)|| isNaN(angka2)) {
         alert("Maaf  yang anda masukan bukan angka!");
        

    } else {
       
        jumlah = angka1 ** angka2;
        alert(jumlah);
    }
}

function kosongin1() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.angka1.value = "";
}

function kosongin2() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.angka2.value = "";
}
