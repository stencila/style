import { html } from 'lit-html'

export default {
  title: 'Molecules/Tab List/Web Component',
  component: 'stencila-tab-list'
}

const tabs = [
  { label: 'Overview' },
  { label: 'Files' },
  { label: 'Activity' },
  { label: 'Sharing' },
  { label: 'Settings' }
]

export const singleTab = () => html`
  <stencila-tab-list .tabs=${tabs.slice(0, 1)}></stencila-tab-list>
`

export const twoTabs = () => html`
  <stencila-tab-list .tabs=${tabs.slice(0, 2)}></stencila-tab-list>
`

export const multipleTabs = () => html`
  <stencila-tab-list .tabs=${tabs}></stencila-tab-list>
`
