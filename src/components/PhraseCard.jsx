 import React from 'react'
// desestructurar las props
const PhraseCard = ({phraseRandom}) => {
    const {phrase} =phraseRandom

  return (
    <div>
        <p className='card__phrase'>{phrase}</p>
    </div>
  )
}

export default PhraseCard