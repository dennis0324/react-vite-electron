import {build} from 'vite'

const buildReact = async function(){

  return build({
    configFile: 'src/react/vite.config.ts',
    mode: 'development',
    build: {
      watch: true,
    },
  })
}
function buildPreload() {
  return build({
    configFile: 'src/electron/preload/vite.config.ts',
    mode: 'development',
    plugins: [{
      name: 'electron-preload-watcher',
    }],
    build: {
      watch: true,
    },
  })
}

const buildElectron = async function(){

  return build({
    configFile: 'src/electron/main/vite.config.ts',
    mode: 'development',
    build: {
      resolveJsonModule: true,
      watch: true,
    },
  })
}




await buildReact()
await buildPreload()
await buildElectron()