//get all accordions
const accordions = document.querySelectorAll(".accordion");

// add event listener in for each accordion
for(let i=0; i<accordions.length; i++) {
    accordions[i].addEventListener("click", function toggleAccordion() {
        this.classList.toggle("active");

        const sectionDetails = this.nextElementSibling;

        if(sectionDetails.style.display === "none") {
            sectionDetails.style.display = "block";
        } else {
            sectionDetails.style.display = "none"
        }

    })
}

