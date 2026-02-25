import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'VITE_REACT_APP_SANITY_PROJECT_ID',
    dataset: 'production'
  }
})
