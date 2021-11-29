function Footer() {
    return (
        <footer>
            <div className="footer-elements">
                <div className="about">
                    <h4>O Nas</h4>
                    Jesteśmy fanowskim zespołem, zajmującym się interpretacją filmów po godzinach,
                    dogłębna analiza przekazów jakie płyną ze scenariuszy jest naszą pasją!
                    Dołącz do nas, abyśmy mogli wspólnie prowadzić oraz stale porzerzać nasz własny świat.
                    <div className="socials-container">
                        <div className="social-item">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-hyperlink"><i className="icon-facebook-rect"></i></a>
                        </div>
                        <div className="social-item">
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="social-hyperlink"><i className="icon-youtube-play"></i></a>
                        </div>
                        <div className="social-item">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-hyperlink"><i className="icon-twitter-bird"></i></a>
                        </div>
                    </div>
                </div>

                <div className="join">
                    <h4>Dołącz jeżeli:</h4>
                    <ul>
                        <li>Lubisz filmy</li>
                        <li>Masz swoje własne teorie na temat filmów</li>
                        <li>Nie zgadzasz się z publiczną oceną filmów</li>
                        <li>Chciałbyś uczestniczyć w konwersacjach na temat filmów które lubisz</li>
                    </ul>
                </div>
            </div>

            {/* <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> --> */}
            {/* <!-- Photo by <a href="https://unsplash.com/@ewitsoe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik Witsoe</a> on <a href="https://unsplash.com/s/photos/movie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> --> */}
            <span>WebMaster Konrad Nowak - wk.k.nowak@gmail.com &copy; Wszelkie prawa zastrzeżone</span>
        </footer>
    );
}

export default Footer;