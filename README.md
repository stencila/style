# 📐 Designa

#### Visual design components for executable documents

[![Build Status](https://github.com/stencila/designa/workflows/Build%20and%20Publish%20packages/badge.svg?branch=master)](https://github.com/stencila/designa/actions?query=workflow%3A%22Build+and+Publish+packages%22)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://stencila.github.io/designa/)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://discord.gg/uFtQtk9)

## 👋 Introduction

This is the place for Stencila's visual design resources (e.g. CSS, icons,
logos), styles and Web Components. The resources here are reused across a number of
other repositories including our main [`website`](https://github.com/stencila/website), the
[`hub`](https://github.com/stencila/hub), and [`thema`](https://github.com/stencila/thema).

We aim to maintain browser support for popular browsers according to [Browserslist](https://github.com/browserslist/browserslist#best-practices), [excluding IE11 and below](https://github.com/stencila/designa/blob/d3b70de5206d7e0380455cbc7f81ff64612b80c6/package.json#L10-L14).

## 📦 Packages

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo), and contains the following packages.

| Name                                        | Description                                                                                                      | NPM                                                                                                                                    |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [components](./packages/components)         | Web Components built using [StencilJS](https://stenciljs.com), styled using the `style-*` packages listed below. | [![NPM](https://img.shields.io/npm/v/@stencila/components.svg?style=flat)](https://www.npmjs.com/package/@stencila/components)         |
| [style-stencila](./packages/style-stencila) | CSS for styling semantic HTML markup in Stencila's own visual language.                                          | [![NPM](https://img.shields.io/npm/v/@stencila/style-stencila.svg?style=flat)](https://www.npmjs.com/package/@stencila/style-stencila) |
| [style-material](./packages/style-material) | CSS for styling semantic HTML markup in Google's Material Design visual language.                                | [![NPM](https://img.shields.io/npm/v/@stencila/style-material.svg?style=flat)](https://www.npmjs.com/package/@stencila/style-material) |
| [brand](./packages/brand)                   | Stencila branding elements such as fonts, logos, and illustrations.                                              | [![NPM](https://img.shields.io/npm/v/@stencila/brand.svg?style=flat)](https://www.npmjs.com/package/@stencila/brand)                   |

## 📜 Documentation

See the [guide](./packages/components) for getting started with integrating our Web Components into your site. Then, more detailed, interactive documentation for each component is available at https://stencila.github.io/designa/. For example, see the docs on the [code editor](https://stencila.github.io/designa/?path=/docs/atoms-editor-) and executable [code chunk](https://stencila.github.io/designa/?path=/docs/schema-nodes-code-chunk) components.

## 🛠 Development

To get started with development, clone this repo:

`git clone git@github.com:stencila/designa.git`

Then install the necessary Node packages:

`npm install`

Build packages and watch for changes:

- `components`: `npm run build:components:watch`
- Styles:
  - `style-stencila`: `npm run build:styles:stencila:watch`
  - `style-material` `npm run build:styles:stencila:watch`
  - 🏎 Note: To significantly reduce development build times you can disable the `cssnano` PostCSS plugins from the respective project’s `.postcssrs.json` file

In a _separate terminal window_ start Storybook:

`npm run storybook`

> An issue to improve the development experience when using Storybook [can be seen here](https://github.com/stencila/designa/issues/113)

### Adding Components

Create a [new Storybook story](https://storybook.js.org/docs/basics/writing-stories/)
and avoid using CSS classes as much as possible. Use semantic HTML tags and WAI-ARIA
attributes instead. See the [External Resources](#External-Resources) section
below for useful references.

Once the story is written, you will need to add appropriate styles for each design system.
Currently we support:

- [Stencila's own design system](./packages/style-stencila)
- [Material Design system](./packages/style-stencila)

### Commit Messages

Please use [conventional
changelog](https://github.com/conventional-changelog/conventional-changelog)
style commit messages e.g. `docs(readme): fixed spelling mistake`.
[`semantic-release`](https://github.com/semantic-release/semantic-release) is
enabled to automate version management: minor version releases are done if
any `feat(...)` commits are pushed, patch version releases are done if any
`fix(...)` commits are pushed. See [the
specifications](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for
full details.

Package builds and Storybook generation are done on [Travis
CI](https://travis-ci.org/stencila/designa). Releases are made to the sub-packages
found inside the packages directory.

### External Resources

- [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1)
- [Inclusive Components](https://inclusive-components.design)
- [TailwindCSS](https://tailwindcss.com)

## 🙏 Acknowledgments

We rely on many tools and services for which we are grateful ❤ to their developers and contributors for all their time and energy.

| Tool                                                                                                                    | Use                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <a href="Sauce Labs"><img src="./.github/PoweredBySauceLabs.svg" width="150" alt="Testing powered by Sauce Labs" /></a> | Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com). |
