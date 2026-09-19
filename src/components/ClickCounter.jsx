import { useState } from 'react'

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0)
  return <button onClick={() => setClicks((c) => c + 1)}>Clicked {clicks} times</button>
}
