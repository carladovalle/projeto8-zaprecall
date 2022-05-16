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
        setCount(count + 1);
    }
    
    
    if (state === "answer") {
        return (
            <>
                <div className="perguntaAberta">
                    <p>{answer}</p>
                    <button class="nãoLembrei" onClick={nao}><h5>Não lembrei</h5></button>
                    <button class="quaseNãoLembrei" onClick={() => {setState("quaseNaoLembrei")}}><h5>Quase não lembrei</h5></button>
                    <button class="zap" onClick={() => {setState("zap")}}><h5>Zap!</h5></button>
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
