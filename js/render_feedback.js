function renderFeedback() {
    const listFeedback = [
        {
            image: 'feedback1.jpg',
            imageTransform: '1',
            imageTitle: 'Mr.John',
            headingTitle: 'Thank for your guide',
            headingDescription: 'Thank you, I have learned a lot from you. Once again I feel very happy. My skills increased a lot, and I started working on real projects. I felt more interested in the lines of code that I created',
        },

        {
            image: 'feedback2.jpg',
            imageTransform: '2',
            imageTitle: 'Ae Long',
            headingTitle: 'Thank you',
            headingDescription: 'Thank you for your support, we will constantly improve the quality of our services and will help you on your journey to pursue your passion.',
        },
    ]

    let feedbacks = $('.section__feedback-box--content')
    let feedback = ''
      
    for(getFeedback of listFeedback) {
        feedback += `   
                    <div class="section__feedback-content">
                        <div class="section__feedback-content--img">
                            <img src="./img/${getFeedback.image}" alt="Client" class="img-feedback-${getFeedback.imageTransform}">
                               <span>${getFeedback.imageTitle}</span>
                        </div>
                        <div class="heading__main mb-medium section__feedback-content--heading">
                            <h3 class="heading__main-content mb-small section__feedback-content--heading-main">
                               ${getFeedback.headingTitle}
                            </h3>

                            <div class="heading__main-content--desc">
                                <p class="heading__main-content--desc-p">
                                   ${getFeedback.headingDescription}
                                </p>
                            </div>
                        </div>
                  </div>
        `
        feedbacks.innerHTML = feedback;
    }
}

renderFeedback()