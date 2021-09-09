const radioCheck1 = $('.radio-create-1')
const radioCheck2 = $('.radio-create-2')
const radioChange1 = $('.radio-create-1--after-1')
const radioChange2 = $('.radio-create-2--after-2')

radioCheck1.addEventListener('click', () => {
    radioChange1.classList.add('active')
    radioChange2.classList.remove('active')

})

radioCheck2.addEventListener('click', () => {
    radioChange1.classList.remove('active')
    radioChange2.classList.add('active')
})
