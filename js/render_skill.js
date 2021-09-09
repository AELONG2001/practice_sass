const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function renderLanguages () {
    const listLanguages = [
        {
          image: 'html5.png',
          title: 'HTML',
          description: 'HTML is a markup language designed to create web pages on the World Wide Web. It can be helped by technologies like CSS and JavaScript-like scripting languages',
        },

        {
            image: 'css3.png',
            title: 'CSS',
            description: 'CSS is a language for styling web pages – Cascading Style Sheet language. It is used to style and style elements written in a markup language, such as HTML',
        },

        {
            image: 'sass.png',
            title: 'Sass',
            description: 'Sass stands for Syntactically Awesome Stylesheet, Sass is an extension to CSS, Sass is a CSS pre-processor, Sass is completely compatible with all versions of CSS',
        },

        {
            image: 'javascript.png',
            title: 'JavaScript',
            description: 'JavaScript is a popular website programming language today, it is integrated and embedded in HTML to make the website more vivid. JavaScript acts as part of the web page',
        },
    ]

    let languages = $('.section__languages-box')
    let language = ''

    for(getLanguage of listLanguages) {
        language += `
            <div class="section__languages-box--content">
                <img src="./img/${getLanguage.image}" alt="HTML5 skill" class="section__languages-box--content-img">
                <div class="heading__main mb-medium">
                    <h3 class="heading__main-content mb-small mt-small text-center">
                       ${getLanguage.title}
                    </h3>

                    <div class="heading__main-content--desc">
                        <p class="heading__main-content--desc-p text-center">
                            ${getLanguage.description}
                        </p>
                    </div>
                </div>
            </div>
        `

        languages.innerHTML = language
    }
}

renderLanguages()