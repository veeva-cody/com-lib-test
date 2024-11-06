export const styleStatisticToolForSupElement = () => {
    const statisticToolElements = document.querySelectorAll('.statistic-tool');

    if (!statisticToolElements || statisticToolElements.length == 0) return;

    statisticToolElements.forEach((statsTool) => {
        const supElement = statsTool.querySelector('sup');
        const description = statsTool.querySelector('p');

        if (!supElement || !description || supElement.textContent.length == 0) return;

        const supText = supElement.textContent;

        if (supText == "+") {
            supElement.classList.add('sup--plus');
        }

        if (supText == "x") {
            supElement.classList.add('sup--x');
        }

        // move lengthy text to description if too long
        if (supText.length > 4) {
            supElement.textContent = "";
            description.textContent = `${supText} ${description.textContent}`;
        }

        if (supText.length == 3 || supText.length == 4) { 
            supElement.classList.add('sup--lengthy');
        }
    })
}