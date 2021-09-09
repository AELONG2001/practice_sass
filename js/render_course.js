function renderCourses() {
    const listCourses = [
        {
          image: '1',
          slogen_first: 'Control',
          slogen_second: 'Your time',
          hour: '3 hour',
          student: '400 student',
          vote: '5 rated',
          price: '20',
        },

        {
            image: '2',
            slogen_first: 'Make',
            slogen_second: 'MindMap',
            hour: '6 hour',
            student: '600 student',
            vote: '5 rated',
            price: '25',
        },

        {
            image: '3',
            slogen_first: 'Make',
            slogen_second: 'Your target',
            hour: '10 hour',
            student: '800 student',
            vote: '5 rated',
            price: '30',
        },

    ]

    let courses = $('.section__courses-content')
    let course = ''

    for(getCourse of listCourses) {
        course += `
                <div class="card">
                    <div class="card-main card-front">
                        <div class="card-front-img card-front-img-${getCourse.image}">
                            
                        </div>

                        <div class="card-front-slogen">
                            <div class="card-front-slogen--content card-front-slogen--content">
                                <span class="card-front-slogen--content-main card-front-slogen--content-main--${getCourse.image}">${getCourse.slogen_first}</span>
                            </div>
                            
                            <div class="card-front-slogen--content card-front-slogen--content">
                                <span class="card-front-slogen--content-main card-front-slogen--content-main--${getCourse.image}">${getCourse.slogen_second}</span>
                            </div>
                        </div>

                        <ul class="card-front-list">
                            <li class="card-front-list--item">
                                ${getCourse.hour}
                            </li>

                            <li class="card-front-list--item">
                                ${getCourse.student}
                            </li>

                            <li class="card-front-list--item">
                                ${getCourse.vote}
                            </li>
                        </ul>
                    </div>

                    <div class="card-main card-back card-back-${getCourse.image}">
                        <div class="card-back--content mt-large">
                            <p class="card-back--heading">
                                Only
                                </p>
                                <p class="card-back--price">
                                    $${getCourse.price}
                                </p>
                                <a href="" class="btn btn-active mt-large">Enroll now</a>
                        </div>
                    </div>
            </div>
        `

        courses.innerHTML = course
    }
}

renderCourses()