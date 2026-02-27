
class CardDetails {
    constructor(index, heading, details){
        this.index = index;
        this.heading = heading;
        this.details = details;
    }
};

let cardInfo = {
    card_1 : [
                new CardDetails ( 1, 'Consultation', ' 1 During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' )
    ],
    card_2 : [
                new CardDetails (2, 'Research and Strategy Development', ' 2 During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' )
    ],
    card_3 : [
                new CardDetails (3, 'Implementation', '3 During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' )
    ],
    card_4 : [
                new CardDetails (4, 'Monitoring and Optimization', ' 4 During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' )
    ],
    card_5 : [
                new CardDetails (5, 'Reporting and Communication', ' 5 During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' )
    ],
    card_6 : [
                new CardDetails (6, 'Continual Improvement', ' 6 During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' )
    ]
};

let cardSection = document.getElementById('card-section');

for (let cards of Object.values(cardInfo)) {
    // console.log(cards)
    for(let values of cards){

        let {index, heading, details} = values;
        
        let card = `
        
                    <div class="container border rounded-5 p-4 parent-card mb-3"  >
                    <div class="row">
                        <div class="col   process-card parent-btn ">
                            <h3>${index} </h3>
                            <h4>${heading}</h4>
                            <button class="btn border rounded-5 detailsbtn " >+</button>                    
                        </div>
                </div>
                <hr>
                    <div class="row">
                        <div class="col details" >
                            <p >
                                ${details}
                            </p>
                        </div>
                    </div>
                </div>

        `;
        cardSection.innerHTML += card;        
    };
};

let detailsBtn = document.querySelectorAll('.detailsbtn');

detailsBtn = Array.from(detailsBtn);
console.log(detailsBtn);

detailsBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        let cardParent = btn.closest('.parent-card');
       let detaislToshow = cardParent.querySelector('.details');
       detaislToshow.classList.toggle('show');
       btn.textContent = detaislToshow.classList.contains('show')? '-' : '+';
       cardParent.classList.toggle('active-bg')
    });
});








