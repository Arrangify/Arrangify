import alt from '../alt';

class Actions {
  login(args) {
    return (dispatch) => {
      var user = {
        email: args.email
      };

      dispatch(user);
    };
  }

  logout() {
    return (dispatch) => {
      dispatch();
    };
  }
}

export default alt.createActions(Actions);
