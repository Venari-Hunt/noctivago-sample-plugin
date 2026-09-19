import { useEffect, useState } from 'react'
import { librarySummary, countSounds } from '../domain/librarySummary.js'
import { canNotify } from '../domain/notice.js'
import ClickCounter from './ClickCounter.jsx'
import NotifyButton from './NotifyButton.jsx'

export default function SamplePanel({ app }) {
  const { noctivago } = app
  const [soundCount, setSoundCount] = useState(null)

  useEffect(() => {
    countSounds(noctivago.library).then(setSoundCount)
  }, [noctivago])

  return (
    <div style={{ padding: 16 }}>
      <h2>Hello from a plugin!</h2>
      <p>{librarySummary(soundCount)}</p>
      <ClickCounter />{' '}
      {canNotify(app) && <NotifyButton notifications={app.notifications} soundCount={soundCount} />}
    </div>
  )
}
