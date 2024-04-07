//select all filter buttons and filterable cards 

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//define filter cards function 
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");


//iterate over each filterable cards 
filterableCards.forEach(card => {

    console.log("Card:", card);
    console.log("Card dataset name:", card.dataset.name);
    console.log("Clicked button dataset name:", e.target.dataset.name);
    // add hide class  to hide the card initially 


    // check if the card matches selected filter or "all" is selected 

   

    if(card.dataset.name === e.target.dataset.name ||e.target.dataset.name === "all" ){
        card.classList.add("hide");
     };
    
     card.classList.remove("hide");
});


};

//add click event listener to each filter buttons 

filterButtons.forEach(button => button.addEventListener("click" , filterCards));