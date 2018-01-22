const appMap = new Map()

export const registerApp = (appName, singleSPAApp, whenLoad = (func) => func()) => {
  appMap.set(appName, singleSPAApp)
  whenLoad(appMap.get(appName).mount)
}

export default registerApp