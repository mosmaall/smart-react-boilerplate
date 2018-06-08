import { observable, action, computed } from 'mobx'

export default class UserStore {
  @observable currentUser
  @observable loadingUser
  @observable updatingUser
  @observable updatingUserErrors

  @action
  pullUser() {
    this.loadingUser = true
    return agent.Auth.current()
      .then(
        action(({ user }) => {
          this.currentUser = user
        })
      )
      .finally(
        action(() => {
          this.loadingUser = false
        })
      )
  }

  @action
  updateUser(newUser) {
    this.updatingUser = true
    return agent.Auth.save(newUser)
      .then(
        action(({ user }) => {
          this.currentUser = user
        })
      )
      .finally(
        action(() => {
          this.updatingUser = false
        })
      )
  }

  @action
  forgetUser() {
    this.currentUser = undefined
  }
}
