import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [gerador, setGerador] = useState(false);
  const [nome, setNome] = useState('');
  const [fraseAleatoria, setFraseAleatoria] = useState('');

  useEffect(() => {
    if (nome === "isac" || nome === "isaac" || nome === "isaac silva borges") {
      setFraseAleatoria("qual foi sua ultima cirurgia?");
    } else {
      setFraseAleatoria(getPhraseAleatoria());
    }
  }, [nome]);

  const getPhraseAleatoria = () => {
    const phrases = ["qual é o seu filme favorito de todos os tempos?",
    "se pudesse viajar no tempo, para qual época iria?",
    "quais são seus hobbies preferidos?",
    "qual é o último livro que você leu e gostou?",
    "se pudesse ter qualquer superpoder, qual escolheria?",
    "qual é a sua memória mais engraçada da infância?",
    "se ganhasse na loteria, o que faria primeiro?",
    "qual é o destino dos seus sonhos para uma viagem?",
    "se pudesse jantar com qualquer pessoa, viva ou morta, quem seria?",
    "o que você faria se tivesse um dia livre sem responsabilidades?",
    "qual é a sua música favorita e por quê?",
    "se fosse um animal, qual você seria e por quê?",
    "quais são suas metas para o próximo ano?",
    "se tivesse que escolher apenas uma comida para comer pelo resto da vida, qual seria?",
    "qual é a sua estação do ano preferida e por quê?",
    "se pudesse aprender instantaneamente uma habilidade, qual escolheria?",
    "qual é o seu maior medo?",
    "se pudesse estar em qualquer lugar do mundo agora, onde estaria?",
    "o que mais te inspira na vida?",
    "se pudesse mudar algo no mundo, o que seria?",
    "qual seria sua profissão dos sonhos?",
"se pudesse ter um animal de estimação exótico, qual escolheria?",
"se fosse criar uma nova tradição para celebrar aniversários, o que seria?",
"se pudesse ter um encontro com um personagem de desenho animado, quem escolheria?",
"qual é o seu lugar mais exótico que gostaria de visitar?",
"se pudesse experimentar um prato de qualquer lugar do mundo agora, qual seria?",
"se tivesse que escolher uma cor para representar sua personalidade, qual seria?",
"se pudesse ter um talento artístico instantâneo, qual escolheria?",
"se fosse inventar uma nova palavra, qual seria o significado?",
"qual é o objeto mais estranho que você possui?","vc gostaria de smt?"];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  return (
    <>
      <main>
        <div>
          <p>Gerador de perguntas COMPLETAMENTE aleatórias</p>
          {!gerador && <p> Digite seu nome e clique em gerar pergunta</p>}
        </div>
        <div className="card">
          {!gerador && (
            <button
              className='buton'
              onClick={() => setGerador(true)}
              disabled={(nome==="" || nome==="talita")} // Desabilita o botão se o nome estiver vazio
            >
              Gerar pergunta
            </button>
          )}
          {gerador && <p>{nome+","} {fraseAleatoria}</p>}
        </div>
        <div className='inputs'>
          {!gerador && (
            <input
              className='input'
              placeholder='Digite seu nome aqui'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
