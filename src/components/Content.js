import Questions from "./Questions";
import Footer from "./Footer";

export default function Content () {
    return (
        <div className="corpoTela2">
            <img class="logoPequena" src="./img/logo-pequeno.png" />
            <h1>ZapRecall</h1>
            <Questions />
            <Footer />
        </div>
    )
}