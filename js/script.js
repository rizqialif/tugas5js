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
    if (angka1 === Number && angka2 === Number) {
        jumlah = angka1 ^ angka2;
        alert(jumlah);

    } else {
        alert("Maaf  yang anda masukan bukan angka!");
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
    if (angka1 === Number && angka2 === Number) {
        jumlah = angka1 - angka2;
        alert(jumlah);

    } else {
        alert("Maaf  yang anda masukan bukan angka!");
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
    if (angka1 === Number && angka2 === Number) {
        jumlah = angka1 * angka2;
        alert(jumlah);

    } else {
        alert("Maaf  yang anda masukan bukan angka!");
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
    if (angka1 === Number && angka2 === Number) {
        jumlah = angka1 / angka2;
        alert(jumlah);

    } else {
        alert("Maaf  yang anda masukan bukan angka!");
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
    if (angka1 === Number && angka2 === Number) {
        jumlah = angka1 ** angka2;
        alert(jumlah);

    } else {
        alert("Maaf  yang anda masukan bukan angka!");
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