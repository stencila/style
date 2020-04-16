import { select } from '@storybook/addon-knobs'
import { html } from 'lit-html'

export default {
  title: 'Molecules/Navbar',
  component: 'stencila-nav-bar',
  excludeStories: ['props'],
}

export const props = (overrides = {}) => ({
  color: select(
    'color',
    [
      'primary',
      'success',
      'warn',
      'danger',
      'neutral',
      'stock',
      'key',
      'brand',
    ],
    overrides.color || 'primary'
  ),
  position: select(
    'position',
    ['static', 'fixed'],
    overrides.position || 'static'
  ),
})

export const navbar = () => {
  const { color, position } = props()

  return html`
    <div>
      <stencila-nav-bar color=${color} position=${position}>
        <stencila-menu slot="start">
          <stencila-button
            ?icon-only=${true}
            color="stock"
            icon="menu"
            minimal
            size="small"
            slot="toggle"
            aria-label="Toggle menu"
          ></stencila-button>

          <stencila-menu-item icon="grid">Projects</stencila-menu-item>
          <stencila-menu-item icon="user" }}>Profile</stencila-menu-item>
          <stencila-menu-item icon="log-out">Sign Out</stencila-menu-item>
        </stencila-menu>

        <span slot="middle">Node List</span>

        <span slot="end">
          <stencila-button
            color="stock"
            minimal
            disabled
            icon="play"
            ?icon-only=${true}
            size="small"
            tooltip="Run"
          ></stencila-button>
          <stencila-button
            color="stock"
            minimal
            icon="save"
            ?icon-only=${true}
            size="small"
            tooltip="Save"
          ></stencila-button>
        </span>
      </stencila-nav-bar>
    </div>
  `
}