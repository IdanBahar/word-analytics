import Warning from './Warning'

export default function Stats({ stats }) {
  return (
    <section className='stats'>
      <Stat number={stats.numberOfWord} label='word' />
      <Stat number={stats.numberOfCharacters} label='characters' />
      <Stat number={stats.twitterCharactersLeft} label='Twitter' />
      <Stat number={stats.linkedinCharactersLeft} label='LinkedIn' />
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <section className='stat'>
      <span className='stat__number'>{number.toLocaleString(number)}</span>
      <h2 className='second-heading'>{label}</h2>
    </section>
  )
}
