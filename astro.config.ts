import { defineConfig, envField } from 'astro/config'
import starlight from '@astrojs/starlight'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  experimental: {
    serverIslands: true,
    env: {
      schema: {
        HYPERPING_STATUS_PAGE_URL: envField.string({ context: 'server', access: 'secret' }),
      },
    },
  },
  integrations: [
    starlight({
      title: 'Starlight + Server Islands',
      components: {
        SocialIcons: './src/overrides/SocialIcons.astro',
      },
      pagefind: false,
      social: {
        github: 'https://github.com/hideoo/starlight-server-islands-hyperping',
      },
    }),
  ],
  output: 'hybrid',
  site:
    (process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL) || 'https://localhost:4321',
})
