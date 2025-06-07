import { useState } from 'react'
import Stats from './Stats'
import Textarea from './Textarea'

export default function Container() {
  const [text, setText] = useState('')

  const stats = {
    numberOfWord: text.split(/\s/).filter((word) => word !== '').length,
    numberOfCharacters: text.length,
    twitterCharactersLeft: 280 - text.length,
    linkedinCharactersLeft: 125000 - text.length,
  }
  return (
    <main className='container'>
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  )
}
