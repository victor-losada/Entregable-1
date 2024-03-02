import React, { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utils/arrimages.json'


const App = () => {
  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)
  // cargar imagenes de forma aleatoria usanso un archivo json
  const initialImage = getRandomFromArray(arrImages)

  const [imageSelected, setImageSelectd] = useState(initialImage)
  const objStyle = {
    backgroundImage: `url("/fondo${imageSelected}.png")`
}

  return (

    <div className='app' style={objStyle}>
      <h1 className='app__title' > Galleta de la fortuna</h1>
      <article className='app__card'>
      <PhraseCard phraseRandom={phraseRandom} />
      <BtnPhrase 
      setPhraseRandom={setPhraseRandom}
      setImageSelectd={setImageSelectd}
      />
      </article>
    </div>
    
  )
}

export default App