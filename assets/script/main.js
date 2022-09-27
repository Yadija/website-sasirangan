const motives = [
    "gigi-haruan", 
    "kulat-kurikit", 
    "iris-pundak", 
    "bayam-raja", 
    "ombak-sinapur-karang", 
    "kembang-kacang", 
    "naga-balimbur", 
    "turun-dayang", 
    "kembang-tampuk-manggis", 
    "bintang-bahambur", 
    "kambang-sasaki", 
    "gagatas"
];

const motifPicture = document.getElementById("motifPicture");

for (const motive of motives) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", `assets/image/motif/${motive}.png`);
    motifPicture.appendChild(newImage);
}