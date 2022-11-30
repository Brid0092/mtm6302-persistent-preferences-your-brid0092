const $item = document.getElementById('item')

const $list = document.getElementById('list')

let items = ['The Try Guys', 'Good Mythical Morning', 'Trixie Mattel', 'Naomi Jon', 'Good Mythical Kitchen', 'The Watcher']

function buildList() {
    const html = []
    for (
        let i = 0; i < items.length; i++) {
        html.push(`<li class="list-group-item"> ${items[i]} </li>`)
    }
    $list.innerHTML = html.join(' ')
}

buildList()

const $pink = document.getElementById('pink')
const $purple = document.getElementById('purple')
const $blue = document.getElementById('blue')

const $body = document.querySelector('body')

let backgroundcolor = []
let textcolor = []


function setBackgroundColor(color) {
    $body.style.backgroundColor = color
    localStorage.setItem('backgroundcolor', color)

}

function setTextColor(color) {
    $body.style.color = color
    localStorage.setItem('textcolor', color)

}

$pink.addEventListener('click', function () {
    if ($pink) {
        setBackgroundColor('pink')
        setTextColor('black')
    }
})

$purple.addEventListener('click', function () {
    if ($purple) {
        setBackgroundColor('#a56088')
        setTextColor('black')
    }
})

$blue.addEventListener('click', function () {
    if ($blue) {
        setBackgroundColor('#93dbe5')
        setTextColor('black')
    }
})

if (localStorage.getItem('backgroundcolor')) {
    backgroundcolor = localStorage.getItem('backgroundcolor')
    setBackgroundColor(backgroundcolor)
}

if (localStorage.getItem('textcolor')) {
    textcolor = localStorage.getItem('textcolor')
    setTextColor(textcolor)
}



const $normal = document.getElementById('normal')
const $large = document.getElementById('large')
const $small = document.getElementById('small')


let space = []

function textSize(space) {
    $list.style.lineHeight = space
    localStorage.setItem('space', space)
}

$normal.addEventListener('click', function () {
    if ($normal) {
        textSize('2rem')
    }
})

$large.addEventListener('click', function () {
    if ($large) {
        textSize('3rem')

    }
})
$small.addEventListener('click', function () {
    if ($small) {
        textSize('1rem')
    }
})

if (localStorage.getItem('space')) {
    space = localStorage.getItem('space')
    textSize(space)
}
