import alt from '../alt';
import { decorate, bind, datasource } from 'alt/utils/decorators';
import Actions from '../actions';

@decorate(alt)
class LoginStore {
  constructor() {
    this.state = { user: null };
  }

  @bind(Actions.login)
  login(user) {
    this.setState({ user: user });
  }

  @bind(Actions.logout)
  logout() {
    this.setState({ user: null });
  }
}

export default alt.createStore(LoginStore);
