document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const result = document.getElementById("result");

    submitBtn.addEventListener("click", function () {
        // Groupe 1
        const q1 = parseInt(document.getElementById("q1").value);
        const q2 = parseInt(document.getElementById("q2").value);
        const q3 = parseInt(document.getElementById("q3").value);
        const q4 = parseInt(document.getElementById("q4").value);
        const q5 = parseInt(document.getElementById("q5").value);
        const q6 = parseInt(document.getElementById("q6").value);

        // Groupe 2
        const q7 = document.getElementById("q7").value;
        const q8 = document.getElementById("q8").value;

        // Groupe 3
        const q9 = document.getElementById("q9").value;
        const q10 = document.getElementById("q10").value;

        // Calcul des résultats en fonction des spécifications

        // Groupe 1 - Sous-groupes
        const sg1 = q1 + q4; // Sous-groupe 1
        const sg2 = q2 + q5; // Sous-groupe 2
        const sg3 = q3 + q6; // Sous-groupe 3

        // Calcul du niveau de risque pour chaque sous-groupe
let risqueSg1, risqueSg2, risqueSg3;

// Sous-groupe 1 (SG1)
if (sg1 <= 3) {
    risqueSg1 = "vert";
} else if (sg1 >= 4 && sg1 <= 5) {
    risqueSg1 = "orange";
} else {
    risqueSg1 = "rouge";
}

// Sous-groupe 2 (SG2)
if (sg2 <= 2) {
    risqueSg2 = "vert";
} else if (sg2 >= 3 && sg2 <= 4) {
    risqueSg2 = "orange";
} else {
    risqueSg2 = "rouge";
}

// Sous-groupe 3 (SG3)
if (sg3 <= 6) {
    risqueSg3 = "rouge";
} else if (sg3 >= 7 && sg3 <= 9) {
    risqueSg3 = "orange";
} else {
    risqueSg3 = "vert";
}
        // Calcul du résultat pour le Groupe 1
        let resultatG1 = "";

        if (risqueSg1 === "rouge" && risqueSg2 === "rouge" && risqueSg3 === "rouge") {
            resultatG1 = "Nous vous invitons à prendre contact avec notre aide médecin de médecins au 01.45.45.45.45";
        } else if ((risqueSg1 === "rouge" && risqueSg2 === "orange" && risqueSg3 === "orange") ||
            (risqueSg1 === "orange" && risqueSg2 === "rouge" && risqueSg3 === "orange") ||
            (risqueSg1 === "orange" && risqueSg2 === "orange" && risqueSg3 === "rouge")) {
            resultatG1 = "Nous vous invitons à prendre contact avec notre aide médecin de médecins au 01.45.45.45.45";
        } else if ((risqueSg1 === "rouge" && risqueSg2 === "orange" && risqueSg3 === "vert") ||
            (risqueSg1 === "rouge" && risqueSg2 === "vert" && risqueSg3 === "orange") ||
            (risqueSg1 === "vert" && risqueSg2 === "rouge" && risqueSg3 === "orange")) {
            resultatG1 = "Nous vous invitons à prendre contact avec notre aide médecin de médecins au 01.45.45.45.45";
        } else if ((risqueSg1 === "rouge" && risqueSg2 === "vert" && risqueSg3 === "vert") ||
            (risqueSg1 === "vert" && risqueSg2 === "rouge" && risqueSg3 === "vert") ||
            (risqueSg1 === "vert" && risqueSg2 === "vert" && risqueSg3 === "rouge")) {
            resultatG1 = "Nous vous invitons à prendre le temps de faire un test plus complet";
        } else {
            resultatG1 = "Tout va bien, nous vous invitons à continuer à prendre soin de vous, si vous le jugez utile faites un test plus complet";
        }

        // Calcul du résultat pour le Groupe 2
        let resultatG2 = "";

        if (q7 === "Non" && q8 === "Oui") {
            resultatG2 = "Prenez soin de vous, nous vous invitons à prendre contact avec notre aide médecin de médecins au 01.45.45.45.45";
        } else if (q7 === "Non" && q8 === "Non") {
            resultatG2 = "Pensez à consulter un confrère pour parler de votre santé dans les prochains mois";
        } else if (q7 === "Oui" && q8 === "Non") {
            resultatG2 = "Continuez à prendre soin de vous";
        } else if (q7 === "Oui" && q8 === "Oui") {
            resultatG2 = "Pensez à consulter un confrère pour parler de votre santé dans les prochains mois";
        }

        // Calcul du résultat pour le Groupe 3
        let resultatG3 = "";

        if (q9 === "Non" && q10 === "Non") {
            resultatG3 = "Pensez à prendre du temps pour vous";
        } else if (q9 === "Non" && q10 === "Oui") {
            resultatG3 = "Pensez à maintenir un équilibre vie professionnelle et vie personnelle";
        } else if (q9 === "Oui" && q10 === "Oui") {
            resultatG3 = "Continuez à maintenir cet équilibre entre vie professionnelle et vie personnelle";
        } else if (q9 === "Oui" && q10 === "Non") {
            resultatG3 = "Pensez à maintenir un équilibre vie professionnelle et vie personnelle";
        }

        // Affichage du résultat
        result.innerHTML = `<p>Groupe 1 : ${resultatG1}</p><p>Groupe 2 : ${resultatG2}</p><p>Groupe 3 : ${resultatG3}</p>`;
        result.style.display = "block";
    });
});