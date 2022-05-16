import { useState } from "react";

export default function FlashCard(props) {

    const {
        count,
        setCount,
        name,
        question,
        answer,
    } = props
    
    const [state, setState] = useState("openQuestion");

    if (state === "openQuestion") {
        return (
            <div className="pergunta" onClick={() => {setState("question")}}>
                {name}
                <ion-icon class="icon" name="play-outline"></ion-icon>
            </div>
        );
    }

    if (state === "question") {
        return (
          <div className="perguntaAberta">
            <p>{question}</p>
            <img src="/img/setinha.png" className="setinha" onClick={() => setState("answer")} />
          </div>
        );
      }

    function nao () {
        let aux = count + 1;
        setCount(aux);
        setState("naoLembrei");
    }
    
    
    if (state === "answer") {
        return (
            <>
                <div className="perguntaAberta">
                    <p>{answer}</p>
                    <button className="nãoLembrei" onClick={() => {setState("naoLembrei")}}><h5>Não lembrei</h5></button>
                    <button className="quaseNãoLembrei" onClick={() => {setState("quaseNaoLembrei")}}><h5>Quase não lembrei</h5></button>
                    <button className="zap" onClick={() => {setState("zap")}}><h5>Zap!</h5></button>
                </div>
            </>

        )
    }

    if (state === "naoLembrei") {
        return (
                <div className="pergunta">
                    <div className="riscoVermelho">
                    <h6>{name}</h6>
                </div>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
        )
    }

    if (state === "quaseNaoLembrei") {
        return (
            <div className="pergunta">
                <div className="riscoLaranja">
                    <h7>{name}</h7>
                </div>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        )
    }

    if (state === "zap") {
        return (
            <div className="pergunta">
                <div className="riscoVerde">
                    <h8>{name}</h8>
                </div>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        )
    }

}
