function kalkulatorDark(){
    Height = document.getElementById("writeDarkHeight").value;
    Width = document.getElementById("writeDarkWidth").value;

    Height = Height / 100;
    Width = Width / 100;

    uVerdiOld = document.getElementById("dropdownDarkUOld").value;
    uverdiNew = document.getElementById("dropdownDarkUNew").value;

    tempUte = -7;
    tempInne = document.getElementById("writeDarkTemp").value;

    if(document.getElementById("dropdownDarkLocation").value == "Bergen") {
        prisStrøm = 155.673
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Bodø") {
        prisStrøm = 31.34
    };

    saveMoney = ((Height * Width) * (uverdiNew - uVerdiOld) * (tempInne - tempUte)) / 1000 * 182 * prisStrøm;

    document.getElementById("kalkDarkResultBox").innerHTML = saveMoney;
}

console.log()