// Plugin entry. `npm run build` bundles it (React included) into main.js at
// the repo root, the file manifest.json names and the app loads.
//
// Layout, the same as every Noctívago screen:
//   src/domain/      rules and utilities, no DOM (tested in test/)
//   src/components/  small React components, one job each
//
// The plugin contract is framework-free: the tab hands over a plain DOM
// container, and the plugin decides what renders into it.
import { createRoot } from 'react-dom/client'
import SamplePanel from './components/SamplePanel.jsx'

export default class SamplePlugin {
  /**
   * @param {import('../types/plugin').PluginApp} app
   * @param {import('../types/plugin').PluginManifest} manifest
   */
  constructor(app, manifest) {
    this.app = app
    this.manifest = manifest
    this.root = null
  }

  async onload() {
    this.unregister = this.app.tabs.register({
      id: 'sample-plugin',
      title: 'Sample',
      mount: (container) => {
        this.root = createRoot(container)
        this.root.render(<SamplePanel app={this.app} />)
      }
    })
  }

  async onunload() {
    this.root?.unmount()
    this.unregister?.()
  }
}
