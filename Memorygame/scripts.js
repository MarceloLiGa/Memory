document.addEventListener("DOMContentLoaded", () => {
  const botaoBuscar = document.getElementById('botaoBuscar');
  const inputImagem = document.getElementById('inputImagem');
  const imagemPreview = document.getElementById('imagemPreview');


  const cards = [
    {
      name: 'table',
      img: 'images/table.png',
    },
    {
      name: 'chair',
      img: 'images/chair.png',

    },
    {
      name: 'book',
      img: 'images/book.png',
    },
    {
      name: 'notebook',
      img: 'images/notebook.png',
    },
    {
      name: 'magazine',
      img: 'images/magazine.png',
    },
    {
      name: 'newspaper',
      img: 'images/newspaper.png',

    },
    {
      name: 'pen',
      img: 'images/pen.png',
    },
    {
      name: 'pencil',
      img: 'images/pencil.png',
    },
    {
      name: 'sharpener',
      img: 'images/sharpener.png',
    }, 
    {
      name: 'ruler',
      img: 'images/ruler.png',
    }, 
    {
      name: 'eraser',
      img: 'images/eraser.png',
    },
     {
      name: 'notepad',
      img: 'images/notepad.png',
    },
    
    {
      name: 'stapler',
      img: 'images/stapler.png',
    }, {
      name: 'scissors',
      img: 'images/scissors.png',
    }, {
      name: 'glue',
      img: 'images/glue.png',
    },
    {
      name: 'table',
      img: 'images/table1.png',
    },
    {
      name: 'chair',
      img: 'images/chair1.png',

    },
    {
      name: 'book',
      img: 'images/book1.png',
    },
    {
      name: 'notebook',
      img: 'images/notebook1.png',
    },
    {
      name: 'magazine',
      img: 'images/magazine1.png',
    },
    {
      name: 'newspaper',
      img: 'images/newspaper1.png',

    },
    {
      name: 'pen',
      img: 'images/pen1.png',
    },
    {
      name: 'pencil',
      img: 'images/pencil1.png',
    },
    {
      name: 'sharpener',
      img: 'images/sharpener1.png',
    }, {
      name: 'ruler',
      img: 'images/ruler1.png',
    }, {
      name: 'eraser',
      img: 'images/eraser1.png',
    }, {
      name: 'notepad',
      img: 'images/notepad1.png',
    },
    {
      name: 'stapler',
      img: 'images/stapler1.png',
    }, {
      name: 'scissors',
      img: 'images/scissors1.png',
    }, {
      name: 'glue',
      img: 'images/glue1.png',
    }
  ]

  cards.sort(() => 0.5 - Math.random())

  //recupaerar elementos
  const board = document.querySelector('.board')
  const resultView = document.querySelector('#result')
  const pag = document.querySelector('.botao')
  let cardsChosen = [] //cartas escolhidas
  let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
  let cardsWon = [] //cartas combinadas

  //criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/board.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

  //checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    //verificar clique na mesma imagem 
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/board.png')
      cards[optionTwoId].setAttribute('src', 'images/board.png')
      alert('Você clicou na mesma imagem')
    }
    //verificar combinação se click em imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou uma combinação')
      cards[optionOneId].setAttribute('src', 'images/check.png')
      cards[optionTwoId].setAttribute('src', 'images/check.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/board.png')
      cards[optionTwoId].setAttribute('src', 'images/board.png')

    }
    cardsChosen = []
    cardsChosenId = []
    //mostrar placar
    resultView.textContent = 'Pares Encontrados: ' + cardsWon.length
    if (cardsWon.length === cards.length / 2) {
      resultView.textContent = 'Parabéns!' + '\n' + 'Você conseguiu encontrar todos os ' + cardsWon.length + ' pares de cartas'
      board.style.display = "none"
      pag.style.display="flex"
      resultView.style.display = "flex"
      

    }
  }

  //virar as cartas
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }


  createBoard()
})