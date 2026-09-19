import { libraryNotice } from '../domain/notice.js'

// Shows an in-app notification (bottom-left of the window) with the library
// count. The title defaults to the plugin's name.
export default function NotifyButton({ notifications, soundCount }) {
  return <button onClick={() => notifications.show(libraryNotice(soundCount))}>Show a notification</button>
}
