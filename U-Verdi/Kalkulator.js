function kalkulatorDark(){
    Height = document.getElementById("writeDarkHeight").value;
    Width = document.getElementById("writeDarkWidth").value;

    Height = Height / 100;
    Width = Width / 100;

    uVerdiOld = document.getElementById("dropdownDarkUOld").value;
    uverdiNew = document.getElementById("dropdownDarkUNew").value;

    if(document.getElementById("dropdownDarkLocation").value == "Bergen") {
        tempUte = 3.4
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Bodø") {
        tempUte = 0
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Fagernes") {
        tempUte = -6
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Hamar") {
        tempUte = -5.6
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Hammerfest") {
        tempUte = -3,2
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Hovden") {
        tempUte = 3
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Kristiansand") {
        tempUte = 1.8
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Lillehammer") {
        tempUte = -4
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Namsos") {
        tempUte = -0.6
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Narvik") {
        tempUte = -1.8
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Oslo") {
        tempUte = -1
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Stavanger") {
        tempUte = 3.4
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Tromsø") {
        tempUte = -2
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Trondheim") {
        tempUte = 0
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Ålesund") {
        tempUte = 3.8
    };
    tempInne = document.getElementById("writeDarkTemp").value;

    if(document.getElementById("dropdownDarkLocation").value == "Bergen") {
        prisStrøm = 162.822
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Bodø") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Fagernes") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Hamar") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Hammerfest") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Hovden") {
        prisStrøm = 163.834
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Kristiansand") {
        prisStrøm = 163.834
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Lillehammer") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Namsos") {
        prisStrøm = 41.424
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Narvik") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Oslo") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Stavanger") {
        prisStrøm = 163.834
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Tromsø") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Trondheim") {
        prisStrøm = 41.424
    }
    else if(document.getElementById("dropdownDarkLocation").value == "Ålesund") {
        prisStrøm = 41.424
    };

    saveMoney = ((Height * Width) * (uverdiNew - uVerdiOld) * (tempInne - tempUte)) / 1000 * 182 * prisStrøm;

    document.getElementById("kalkDarkResultBox").innerHTML = saveMoney;
}

function kalkulatorLight(){
    Height = document.getElementById("writeLightHeight").value;
    Width = document.getElementById("writeLightWidth").value;

    Height = Height / 100;
    Width = Width / 100;

    uVerdiOld = document.getElementById("dropdownLightUOld").value;
    uverdiNew = document.getElementById("dropdownLightUNew").value;

    if(document.getElementById("dropdownLightLocation").value == "Bergen") {
        tempUte = 3.4
    }
    else if(document.getElementById("dropdownLightLocation").value == "Bodø") {
        tempUte = 0
    }
    else if(document.getElementById("dropdownLightLocation").value == "Fagernes") {
        tempUte = -6
    }
    else if(document.getElementById("dropdownLightLocation").value == "Hamar") {
        tempUte = -5.6
    }
    else if(document.getElementById("dropdownLightLocation").value == "Hammerfest") {
        tempUte = -3,2
    }
    else if(document.getElementById("dropdownLightLocation").value == "Hovden") {
        tempUte = 3
    }
    else if(document.getElementById("dropdownLightLocation").value == "Kristiansand") {
        tempUte = 1.8
    }
    else if(document.getElementById("dropdownLightLocation").value == "Lillehammer") {
        tempUte = -4
    }
    else if(document.getElementById("dropdownLightLocation").value == "Namsos") {
        tempUte = -0.6
    }
    else if(document.getElementById("dropdownLightLocation").value == "Narvik") {
        tempUte = -1.8
    }
    else if(document.getElementById("dropdownLightLocation").value == "Oslo") {
        tempUte = -1
    }
    else if(document.getElementById("dropdownLightLocation").value == "Stavanger") {
        tempUte = 3.4
    }
    else if(document.getElementById("dropdownLightLocation").value == "Tromsø") {
        tempUte = -2
    }
    else if(document.getElementById("dropdownLightLocation").value == "Trondheim") {
        tempUte = 0
    }
    else if(document.getElementById("dropdownLightLocation").value == "Ålesund") {
        tempUte = 3.8
    };
    tempInne = document.getElementById("writeLightTemp").value;

    if(document.getElementById("dropdownLightLocation").value == "Bergen") {
        prisStrøm = 162.822
    }
    else if(document.getElementById("dropdownLightLocation").value == "Bodø") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownLightLocation").value == "Fagernes") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownLightLocation").value == "Hamar") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownLightLocation").value == "Hammerfest") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownLightLocation").value == "Hovden") {
        prisStrøm = 163.834
    }
    else if(document.getElementById("dropdownLightLocation").value == "Kristiansand") {
        prisStrøm = 163.834
    }
    else if(document.getElementById("dropdownLightLocation").value == "Lillehammer") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownLightLocation").value == "Namsos") {
        prisStrøm = 41.424
    }
    else if(document.getElementById("dropdownLightLocation").value == "Narvik") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownLightLocation").value == "Oslo") {
        prisStrøm = 163.842
    }
    else if(document.getElementById("dropdownLightLocation").value == "Stavanger") {
        prisStrøm = 163.834
    }
    else if(document.getElementById("dropdownLightLocation").value == "Tromsø") {
        prisStrøm = 33.218
    }
    else if(document.getElementById("dropdownLightLocation").value == "Trondheim") {
        prisStrøm = 41.424
    }
    else if(document.getElementById("dropdownLightLocation").value == "Ålesund") {
        prisStrøm = 41.424
    };

    saveMoney = ((Height * Width) * (uverdiNew - uVerdiOld) * (tempInne - tempUte)) / 1000 * 182 * prisStrøm;

    document.getElementById("kalkLightResultBox").innerHTML = saveMoney;
}

console.log()