document.querySelector('#horoscope').addEventListener('click', horoscope)

function horoscope () {

  const day = document.querySelector('#theDay').value
  const month = document.querySelector('#theMonth').value.toLowerCase()


  //Conditionals go here!

    if (( month === 'december' && day >= 22) || (month === 'january' && day <= 19)) {
      console.log('capricorn baby')
      document.querySelector('#starSign').innerText = 'capricorn'
      document.querySelector('.signResults').src = 'img/bob.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'practical, resourceful, ambitious'

    } else if ((month === 'january' && day >= 19) || (month === 'february' && day <= 18)) {
      document.querySelector('#starSign').innerText = 'aquarius'
      document.querySelector('.signResults').src = 'img/flurry.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'self-reliant, assertive, intellectual'

    } else if ((month === 'february' && day >= 19) || (month === 'march' && day <= 20)) {
      document.querySelector('#starSign').innerText = 'pisces'
      document.querySelector('.signResults').src = 'img/pate.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'dreamy, artistic, sensitive'

    } else if ((month === 'march' && day >= 21) || (month === 'april' && day <= 19)) {
      document.querySelector('#starSign').innerText = 'aries'
      document.querySelector('.signResults').src = 'img/resetti.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'determined, passionate, honest'

    } else if ((month === 'april' && day >= 20) || (month === 'may' && day <= 20)) {
      document.querySelector('#starSign').innerText = 'taurus'
      document.querySelector('.signResults').src = 'img/angus.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'dependable, stubborn, down-to-earth'

    } else if ((month === 'may' && day >= 21) || (month === 'june' && day <= 21)) {
      document.querySelector('#starSign').innerText = 'gemini'
      document.querySelector('.signResults').src = 'img/zell.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'sociable, versatile, witty'

    } else if ((month === 'june' && day >= 22) || (month === 'july' && day <= 22)) {
      document.querySelector('#starSign').innerText = 'cancer'
      document.querySelector('.signResults').src = 'img/static.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'nurturing, devoted, emotional'

    } else if ((month === 'july' && day >= 23) || (month === 'august' && day <= 22)) {
      document.querySelector('#starSign').innerText = 'leo'
      document.querySelector('.signResults').src = 'img/rex.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'big-heartedness, courageous, loyal'

    } else if ((month === 'august' && day >= 23) || (month === 'september' && day <= 22)) {
      document.querySelector('#starSign').innerText = 'virgo'
      document.querySelector('.signResults').src = 'img/fuschia.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'kind, methodical, detail-oriented'

    } else if ((month === 'september' && day >= 23) || (month === 'october' && day <= 23)) {
      document.querySelector('#starSign').innerText = 'libra'
      document.querySelector('.signResults').src = 'img/marshal.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'independent, compassionate, balanced'

    } else if ((month === 'october' && day >= 24) || (month === 'november' && day <= 21)) {
      document.querySelector('#starSign').innerText = 'scorpio'
      document.querySelector('.signResults').src = 'img/gaston.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'bold, mysterious, brave'

    } else if ((month === 'november' && day >= 22) || (month === 'december' && day <= 21)) {
      document.querySelector('#starSign').innerText = 'sagittarius'
      document.querySelector('.signResults').src = 'img/fang.png'
      document.querySelector('.traits').innerText = 'your traits:'
      document.querySelector('.info').innerText = 'optimistic, magnetic, intelligent'
    }
  }