function Pergunta (props) {
    return (
        <div className="pergunta">
            <h2>{props.name}</h2>
            <div className="play">
                <ion-icon name="play-outline" className="play"></ion-icon>
            </div>
        </div>
    )
}

export default function Questions () {

    const itens = [ 
        {
            name: "Pergunta 1",
        },
        {
            name: "Pergunta 2",
        },
        {
            name: "Pergunta 3",
        },
        {
            name: "Pergunta 4",
        },
        {
            name: "Pergunta 5",
        },
        {
            name: "Pergunta 6",
        },
        {
            name: "Pergunta 7",
        },
        {
            name: "Pergunta 8",
        },
    ]

    return (
        <div className="perguntas">
                {itens.map(item => <Pergunta name={item.name} />)}
        </div>
    )
}