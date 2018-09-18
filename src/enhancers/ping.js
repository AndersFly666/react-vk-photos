/* eslint-disable */
export const ping = store => next => action => {
  console.log(`[${action.type}]: ${action.payload}`)
  return next(action)
}
/* eslint-enable */
