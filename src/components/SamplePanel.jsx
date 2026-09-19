import { useEffect, useState } from 'react'
import { librarySummary, countSounds } from '../domain/librarySummary.js'
import ClickCounter from './ClickCounter.jsx'

export default function SamplePanel({ noctivago }) {
  const [soundCount, setSoundCount] = useState(null)

  useEffect(() => {
    countSounds(noctivago.library).then(setSoundCount)
  }, [noctivago])

  return (
    <div style={{ padding: 16 }}>
      <h2>Hello from a plugin!</h2>
      <p>{librarySummary(soundCount)}</p>
      <ClickCounter />
    </div>
  )
}
