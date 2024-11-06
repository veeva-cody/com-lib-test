/**
 * Create 3 rows of logo divs
 * each row contains 7 logos and twice their clones
 */
export function duplicateLogoWallAnimatedLogos() {

    const logoWallAnimated = document.querySelectorAll(".logo-wall-animated--count-21");
    
    if (!logoWallAnimated.length) return;

    logoWallAnimated.forEach((logoWall) => {

        const wrapper = logoWall.querySelector(".logo-wall-animated__logos");
        const PER_ROW_COUNT = 7;
        const logos = wrapper.querySelectorAll("img");

        for (let i = 0; i < logos.length; i += PER_ROW_COUNT) {
        
            const row = document.createElement("div");
            const logoClonesList1 = [];
            const logoClonesList2 = [];
        
            row.classList.add("logo-wall-animated__logo-row");
        
            for (let j = i; j < i + PER_ROW_COUNT; j++) {
                if (logos[j]) {
                    row.append(logos[j]);
                    logoClonesList1.push(logos[j].cloneNode(true));
                    logoClonesList2.push(logos[j].cloneNode(true));
                }
            }

            row.append(...logoClonesList1, ...logoClonesList2);
            wrapper.append(row);
        
        }

    });

}