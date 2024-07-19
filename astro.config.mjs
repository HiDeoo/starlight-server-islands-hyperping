import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
  output: 'hybrid',
  site:
    (process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL) || 'https://localhost:4321',
})
