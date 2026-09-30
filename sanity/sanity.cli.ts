import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'j088vign',
    dataset: 'production'
  },
  studioHost: 'middleeasttravels',
  deployment: {
    appId: 'mu0iujqp4u3vr3hc2bf92kyi',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
