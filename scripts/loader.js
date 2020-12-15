
class Loader {
    load() {
        /*
        * Let us first load in the menu
        * */
        this._menu();
        /*
        * Then we load in the sections
        * */
        this._sections();
        /*
        * Then the titles
        * */
        this._titles();
    }

    _menu() {
        const menu = document.querySelector('.menu');

        menu.classList.add('load');
    }
    _sections() {
        const sections = Array.prototype.slice.call(document.querySelector('#sections').children);

        anime({
            targets: sections,
            translateX: [256, 0],
            duration: 160,
            delay: anime.stagger(100)
        })
    }
    _titles() {
        const sections = Array.prototype.slice.call(document.querySelector('#content').children);
        anime({
            targets: sections,
            translateX: [-256, 0],
            duration: 160,
            delay: anime.stagger(100)
        })
    }
}

const loader = new Loader();
