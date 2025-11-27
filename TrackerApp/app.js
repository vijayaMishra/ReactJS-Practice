//get all accordions
const accordions = document.querySelectorAll(".accordion");

// add event listener in for each accordion
for(let i=0; i<accordions.length; i++) {
    accordions[i].addEventListener("click", function toggleAccordion() {
        this.classList.toggle("active");

        const sectionDetails = this.nextElementSibling; //it is getting div details that has class "section-details"

        if(sectionDetails.style.display === "none" || sectionDetails.style.display === "") {
            sectionDetails.style.display = "block";
        } else {
            sectionDetails.style.display = "none";
        }

    })
}

