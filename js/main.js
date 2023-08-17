const clockElement = document.getElementById("clock");
const timerButton = document.getElementById("timerButton");
const alarmButton = document.getElementById("alarmButton");
const translateButton = document.getElementById("translateButton");
const cyrillicButton = document.getElementById("cyrillicButton");
const inputText = document.getElementById("inputText");
const translation = document.getElementById("translation");

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

timerButton.addEventListener("click", function() {
    alert("Taymer ish bajarildi!");
});

alarmButton.addEventListener("click", function() {
    alert("Signal o'ynatildi!");
});

const translations = {
    "hello": "salom",
    "world": "dunyo",
    // Add more translations as needed
};

translateButton.addEventListener("click", function() {
    const input = inputText.value.toLowerCase();
    if (translations[input]) {
        translation.textContent = translations[input];
    } else {
        translation.textContent = "Tarjima topilmadi";
    }
});

const transliterate = (text) => {
    const cyrillic = {
        a: "а", b: "б", c: "ц", d: "д", e: "е", f: "ф", g: "г", h: "х", i: "и", j: "ж",
        k: "к", l: "л", m: "м", n: "н", o: "о", p: "п", q: "қ", r: "р", s: "с", t: "т",
        u: "у", v: "в", w: "в", x: "х", y: "й", z: "з",
    };

    return text.split("").map(char => cyrillic[char] || char).join("");
};

cyrillicButton.addEventListener("click", function() {
    const input = inputText.value.toLowerCase();
    const transliteratedText = transliterate(input);
    translation.textContent = transliteratedText;
});
