document.addEventListener('DOMContentLoaded', () => {
  const fullName = document.querySelector('.fullname')
  const contactMe = document.querySelector('.cnt')

  const fonts = ['sans-serif', 'trebuchet-ms', 'arial', 'roboto', 'sylfaen', 'times-new-roman', 'open-sans', 'Gill Sans', 'Impact', 'Bahnschrift', 'Bradley Hand']
  const colors = ['#56c740','#7ad65e', '#9ef07e', '#a9f28d', '#bef7a1', '#d0fab6', '#e7ffcc', '#f0ffde', '#000000', '#f9fff2', '#ffffff']

  const randomFont = () => {
    fullName.style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)]
  }

  setInterval(() => {
    randomFont()
  }, 500)

  const randomColor = () => {
    contactMe.style.color = colors[Math.floor(Math.random()*colors.length)]
  
  }
  setInterval(() => {
    randomColor()
  }, 100)





})