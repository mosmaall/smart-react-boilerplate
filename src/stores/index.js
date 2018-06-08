import UserStore from './UserStore'

export const initStore = () => ({
  UserStore: new UserStore(),
})

let instanceStores
export const getInstanceStores = () => {
  if (!instanceStores) {
    instanceStores = initStore()
  }
  return instanceStores
}
