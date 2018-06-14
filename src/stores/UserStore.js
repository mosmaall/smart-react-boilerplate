import { observable, action, computed } from 'mobx'

export default class UserStore {
  @observable currentUser
  @observable loadingUser
  @observable updatingUser
  @observable updatingUserErrors

  @action
  pullUser() {
    this.loadingUser = true
  }

  @action
  updateUser(newUser) {
    this.updatingUser = true
  }

  @action
  forgetUser() {
    this.currentUser = undefined
  }
}
