let main = document.querySelector('.main')
let container = ''

container += `
    <nav>
    <input hidden type="checkbox" id="box-check" class="menu-click">
    <label for="box-check" class="box-icon">
    <span class="box-icon-menu">
    </span>
    </label>
    <div class="background-nav">
    </div>
    <div class="box-nav">
    <ul class="box-nav-list">
        <li class="box-nav-item">
        <a href="#" class="box-nav-link">
            About us
        </a>
        </li>

        <li class="box-nav-item">
        <a href="#" class="box-nav-link">
            Our skills
        </a> 
        </li>

        <li class="box-nav-item">
        <a href="#" class="box-nav-link">
            Our courses
        </a>
        </li>

        <li class="box-nav-item">
        <a href="#" class="box-nav-link">
            Feedback
        </a> 
        </li>

        <li class="box-nav-item">
        <a href="#" class="box-nav-link">
            EnrollForm
        </a>
        </li>
    </ul>
    </div>
    </nav>
    <header class="header">
    <div class="header__logo">
    <a href="http://long2001.tk/">
    <i class="bx bx-code-alt header__logo-icon"></i>
    </a>
    </div>
    <div class="header__text-box">
    <h3 class="heading-primary">
        <span class="heading-primary__main">
        Front-end Developer
        </span>
        <span class="heading-primary__sub">
        Nothing is impossible!
        </span>
    </h3>
    <a href="#" class="btn btn-active">Study with me</a>
    </div>
    </header>

    <div class="section__about mb-large">
    <div class="section__heading mb-large">
    <h3 class="section__heading-content text-center">
        About me
    </h3>
    </div>
    <div class="section__about-content">
    <div class="section__about-content-left">
        <div class="heading__main mb-medium">
            <h3 class="heading__main-content mb-small">
                Who Am I
            </h3>

            <div class="heading__main-content--desc">
                <p class="heading__main-content--desc-p">
                    I am a Front-End Developer, I love travel and music, I want to travel around the world. This is my blogger, it's for sharing
                    programming knowledge and self-study.
                </p>
            </div>
        </div>

        <div class="heading__main">
            <h3 class="heading__main-content mb-small">
                My skill
            </h3>

            <div class="heading__main-content--desc">
                <p class="heading__main-content--desc-p">
                    HTML,CSS, SASS, JavaScript
                </p>
            </div>
        </div>

    <a href="#" class="btn-text mt-small">Learn more →</a>
    </div>

    <div class="section__about-content-right">
    <div class="img__first">
            <img src="./img/humangroups1.jpg" alt="human-1" class="img__first-main img__first-1">
            <img src="./img/humangroups2.jpg" alt="human-2" class="img__first-main img__first-2">
            <img src="./img/humangroups3.jpg" alt="human-3" class="img__first-main img__first-3">
    </div>
    </div>
    </div>
    </div>

    <div class="section__languages">
    <div class="section__languages-box">              
    </div>
    </div>

    <div class="section__courses">
    <div class="section__heading mb-large">
    <h3 class="section__heading-content text-center">
        Our Courses
    </h3>
    </div>

    <div class="section__courses-content">

    </div>

    <div class="text-center section-btn" style="margin-top: 45rem;">
    <a href="#" class="btn btn-blue mt-large">See All Our Courses</a>
    </div>

    </div>

    <div class="section__feedback">
    <div class="bg__video">
    <div class="section__heading mt-large">
        <h3 class="section__heading-content text-center">
        Feedback
        </h3>
    </div>
    <video class="bg__video-main" autoplay muted loop>
        <source src="./img/Boulevard.mp4" type="video/mp4">
        Your browser is not supported
    </video>
    </div>

    <div class="section__feedback-box">

    <div class="section__feedback-box--content">
        
    </div>     

    <div class="text-center mt-medium section__feedback-btn">
    <a href="#" class="btn-text mt-small">Read all the feedback →</a>
    </div>
    </div>
    </div>

    <div class="section__enroll">
    <div class="section__enroll-img">
    <div class="section__enroll-box">
        <div class="section__heading">
            <h3 class="section__heading-content">
            Enroll Now
            </h3>
        </div>
        <div class="section__enroll-input">
            <input type="text" class="section__enroll-input--main" placeholder="Full Name">
            <input type="text" class="section__enroll-input--main" placeholder="Email">
        </div>

        <div class="section__enroll-radio">
            <div class="section__enroll-radio--box">
                <input hidden type="radio" class="section__enroll-radio--main">
                <label for="">
                    Male
                    <span class="radio-create-1">
                        <span class="radio-create-1--after-1">
                        </span>
                    </span>
                </label>
            </div>
            <div class="section__enroll-radio--box">
                <input hidden type="radio" class="section__enroll-radio--main">
                <label for="">
                    Female
                    <span class="radio-create-2">                                   
                        <span class="radio-create-2--after-2">                                   
                        </span>
                    </span>
                </label>
            </div>
        </div>

        <div class="section__enroll-submit">
            <a href="#" class="btn btn-blue">Submit →</a>
        </div>
    </div>
    </div>
    </div>

    <footer class="footer">
    <div class="footer__box">
    <div class="footer__logo">
        <div class="footer__logo-main text-center">
            <a href="http://long2001.tk/">
            <i class="bx bx-code-alt footer__logo-main--icon"></i>
            </a>
        </div>
        <div class="footer__logo-desc text-center">
            <a href="http://long2001.tk/" class="footer__logo-desc--content">
                long2001.tk
            </a>
        </div>
    </div>
    <div class="footer__info">
        <ul class="footer__info-list">
            <li class="footer__info-item">
                <a href="#" class="footer__info-link">
                    Address
                </a>
            </li>

            <li class="footer__info-item">
                <a href="#" class="footer__info-link">
                    Contacts
                </a>
            </li>

            <li class="footer__info-item">
                <a href="#" class="footer__info-link">
                    Policy
                </a>
            </li>

            <li class="footer__info-item">
                <a href="#" class="footer__info-link">
                    Sponsors
                </a>
            </li>
        </ul>

        <div class="footer__info-license">
            <p class="footer__info-license--content">
                Copyright © by Selftaught Team. You are 100% allowed to use this webpages for both personal and commercial use, but NOT to claim it as your personal design.
            </p>
        </div>
    </div>
    </div>
    </footer>
`

main.innerHTML = container

