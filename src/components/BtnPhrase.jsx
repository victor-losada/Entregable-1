import React from 'react'
import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrimages.json'

const BtnPhrase = ({setPhraseRandom, setImageSelectd}) => {
    const handleClick = () => {
        const phrase = getRandomFromArray(phrases)
        setPhraseRandom(phrase)
        
        const background = getRandomFromArray(arrImages)
        setImageSelectd(background)
    }
  return (
    <div>
        <button className='card__btn' onClick={handleClick}>Probar mi suerte</button >

    </div>
  )
}

export default BtnPhrase