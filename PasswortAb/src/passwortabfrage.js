let abfrage = () => {
    let password = "Hack";
    let ok = true;
    for (let i = 0; i < 3 && ok; i++){
        if (password === prompt((i+1)+".Wie Lautet der Code?", "nope")){
            location.href = "https://r.mtdv.me/giveaways/ouXmoGfVTD"
            ok = false;
        }
        else if (i === 2) {
            document.getElementById("text").innerHTML = "";

        }

    }

}