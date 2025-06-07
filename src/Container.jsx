import { useState } from 'react'
import Stats from './Stats'
import Textarea from './Textarea'

export default function Container() {
  const [text, setText] = useState('')
  const numberOfWord = text.split(/\s/).filter((word) => word !== '').length
  const numberOfCharacters = text.length
  const twitterCharactersLeft = 280 - text.length
  const linkedinCharactersLeft = 125000 - text.length
  const stats = {
    numberOfWord,
    numberOfCharacters,
    twitterCharactersLeft,
    linkedinCharactersLeft,
  }
  return (
    <main className='container'>
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  )
}
