
class Menu {
    _off(top, middle, bottom) {
        anime({
            targets: top,
            x1: 6.3,
            y1: 8.8,
            x2: 25.7,
            y2: 8.8,
            duration: 512
        });
        anime({
            targets: middle,
            x1: 6.3,
            y1: 16,
            x2: 25.7,
            y2: 16,
            duration: 512
        });
        anime({
            targets: bottom,
            x1: 6.3,
            y1: 23.2,
            x2: 25.7,
            y2: 23.2,
            duration: 512
        });
    }
    _on(top, middle, bottom) {
        anime({
            targets: top,
            x1: 16,
            y1: 16,
            x2: 16,
            y2: 16,
            duration: 512
        });
        anime({
            targets: middle,
            x1: 9.1,
            y1: 9.1,
            x2: 22.9,
            y2: 22.9,
            duration: 512
        });
        anime({
            targets: bottom,
            x1: 9.1,
            y1: 22.9,
            x2: 22.9,
            y2: 9.1,
            duration: 512
        });
    }
    _menu_in(menu) {
        anime({
            targets: [menu],
            right: 0,
            duration: 256,
            easing: 'easeOutQuad'
        })
    }
    _menu_out(menu) {
        anime({
            targets: [menu],
            right: -256,
            duration: 256,
            easing: 'easeOutQuad'
        })
    }

    init() {
        const item = document.querySelector('#menu');

        const top = document.querySelector('#top');
        const middle = document.querySelector('#middle');
        const bottom = document.querySelector('#bottom');
        const float = document.querySelector('#floater');

        let toggle = false;

        item.addEventListener('click', () => {
            if (!toggle) {
                this._on(top, middle, bottom);
                this._menu_in(float);
            } else {
                this._off(top, middle, bottom);
                this._menu_out(float);
            }
            toggle = !toggle;
        })
    }
}

const menu = new Menu();
