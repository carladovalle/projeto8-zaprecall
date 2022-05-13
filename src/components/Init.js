export default function Init ({setTela}) {
    return (
        <div class="corpoTela1"> 
            <img class="logo" src="./img/logo.png" />
            <span>ZapRecall</span>
            <button onClick={() => setTela('tela')}>Iniciar Recall!</button>
        </div>
    )
}