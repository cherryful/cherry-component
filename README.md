# Vue 3 + TypeScript + Vite

# Unocss + Tailwind UI

# VueRouter + Pinia

# Fetch

# Base Component

- Button
- Modal
- Tag
- ...

# Github pages

The default github action will build to `gh-page` when pushing on `main` branch.

For a project page, the base path of the repository must be specified. Add the following variable in the Github repository Settings > Secrets and variables > Actions

| Name                        | Value                    |
| --------------------------- | ------------------------ |
| VITE_BASE_PUBLIC_PATH       | `/repository-name/`      |
