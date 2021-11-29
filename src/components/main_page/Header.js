import React from 'react';

class Header extends React.Component {

    componentDidMount() {
        const cite = document.getElementById('blockquote');
        const cites = [
            `Z wiekiem czas zaczyna nam odbierać różne rzeczy. To w życiu normalne. Ale dowiadujemy się o tym dopiero, gdy coś stracimy.`,
            `I panowie, kto zwycięży tu w środku, zwycięży również na zewnątrz.`,
            `Nie ma dwóch bardziej szkodliwych słów, niż “dobra robota”.`,
            `Nieważne, jak mocno uderzasz, ale jak dużo jesteś w stanie znieść i nadal iść do przodu.`,
            `Magia w przekraczaniu granic polega na ryzykowaniu wszystkiego dla marzenia, w które nie wierzy nikt oprócz ciebie.`,
            `Jeśli masz marzenie, musisz je chronić. Ludzie nie potrafią sami czegoś zrobić, więc mówią, że ty też nie możesz. Jeśli czegoś chcesz, to zdobądź to. Kropka.`
        ];
        let citeCounter = 0;
        setInterval(() => {
            if (citeCounter === cites.length - 1) citeCounter = 0;
            else citeCounter++;
            cite.textContent = cites[citeCounter];
        }, 4000);
    }
    render() {
        return (
            <header className="main-header">
                <h1>WebReview</h1>
                <p className="text-desktop">Dołącz do miłośników filmów, wystawiaj recenzje, oceniaj, pisz swoje własne teorie!</p>
                <p className="text-mobile">Dołącz do miłośników filmów, wystawiaj recenzje, oceniaj, pisz swoje własne teorie!</p>
                <div className="cites">
                    <blockquote id="blockquote">
                        Z wiekiem czas zaczyna nam odbierać różne rzeczy. To w życiu normalne. Ale dowiadujemy się o tym dopiero, gdy coś stracimy.
                    </blockquote>
                </div>
            </header>
        );
    }
}

export default Header;
