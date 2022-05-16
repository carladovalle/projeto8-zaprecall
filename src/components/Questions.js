import React from "react";
import FlashCard from "./FlashCard";

const deck = {
    exemplo: [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
        },
        {
            question: "O React é _",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Componentes devem iniciar com _",
            answer: "letra maiúscula",
        },
        {
            question: "Podemos colocar _ dentro do JSX",
            answer: "expressões",
        },
        {
            question: "O ReactDOM nos ajuda _",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para _",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para _",
            answer: "passar diferentes informações para componentes",
        },
        {
            question: "Usamos estado (state) para _",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        },
]}

const flascards = [ 
    {
        name: "Pergunta 1",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 2",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 3",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 4",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 5",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 6",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 7",
        question: "",
        answer: "",
    },
    {
        name: "Pergunta 8",
        question: "",
        answer: "",
    },
]

export default function Questions () {

    function comparador () {
        return Math.random() - 0.5;
    }

    let objetc = {...deck}

        objetc.exemplo.sort(comparador);
        objetc.exemplo.forEach((question,index) => {
        flascards[index].question = question.question;
        flascards[index].answer = question.answer;
    })

    return (
        <div className="perguntas">
                {flascards.map((item,index) => <FlashCard key={index} name={item.name} question={item.question} answer={item.answer} />)}
                
        </div>
    )
}