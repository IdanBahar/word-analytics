import { useState } from 'react'

export default function Textarea() {
  const [text, setText] = useState('')

  function handleChange(e) {
    let newText = e.target.value

    if (newText.includes('<script>')) {
      alert('No Script tag allowed!')
      newText = newText.replace('<script>', '')
    }
    setText(newText)
  }

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className='textarea'
      placeholder='Enter your text'
      spellCheck='false'
    />
  )
}
