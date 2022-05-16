import { useState } from "react";

function FlashCard(props) {

    const {
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
    
    if (state === "answer") {
        return (
            <>
                <div className="perguntaAberta">
                    <p>{answer}</p>
                    <button class="nãoLembrei"><h5>Não lembrei</h5></button>
                    <button class="quaseNãoLembrei"><h5>Quase não lembrei</h5></button>
                    <button class="zap"><h5>Zap!</h5></button>
                </div>
            </>

        )
    }

}

export default FlashCard;
