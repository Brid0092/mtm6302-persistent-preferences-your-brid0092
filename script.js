const $item = document.getElementById('item')

const $list = document.getElementById('list')

let items = ['The Try Guys', 'Good Mythical Morning', 'Trixie Mattel', 'Naomi Jon', 'Good Mythical Kitchen', 'The Watcher']

function buildList() {
    const html = []
    for (
        let i = 0; i < items.length; i++) {
        html.push(`<li class="list-group-item"> ${items[i]} </li>`)
    }
}
$list.innerHTML = html.join(' ')


buildList()