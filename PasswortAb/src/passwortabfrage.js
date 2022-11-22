let abfrage = () => {
    let password = "Hallo";
    let ok = true;
    for (let i = 0; i < 3 && ok; i++){
        if (password === prompt((i+1)+".Versuch:Was bedeutet DQM", "nope")){
            location.href = "https://r.mtdv.me/giveaways/ouXmoGfVTD"
            ok = false;
        }
        else if (i === 2) {
            document.getElementById("text").innerHTML = "";

        }

    }

}