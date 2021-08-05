import { connect } from 'react-redux';

import { setNewEmailValue, setNewPasswordValue } from 'src/actions/chatActions';

// presentation component import
import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  emailValue: state.email,
  passwordValue: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailValue: (newValue) => {
    dispatch(setNewEmailValue(newValue));
  },

  setPasswordValue: (newValue) => {
    dispatch(setNewPasswordValue(newValue));
  },
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
