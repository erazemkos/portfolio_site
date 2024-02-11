const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("h1, p");

    elements.forEach(element => {
        function scrambleText() {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let iteration = 0;
            const originalText = element.dataset.value;

            const interval = setInterval(() => {
                element.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 1;
            }, 30);
        }

        // Run once on page load for each element
        scrambleText();

        // Set up mouseover event for each element
        element.onmouseover = scrambleText;
    });

    if (elements.length === 0) {
        console.log("No h1 or p elements found");
    }
});


