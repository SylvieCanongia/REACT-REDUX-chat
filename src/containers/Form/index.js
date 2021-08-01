import { connect } from 'react-redux';

import { setInputValue } from 'src/actions/chatActions';

// presentation component import
import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  value: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (newValue) => {
    const action = setInputValue(newValue);
    dispatch(action);
  },
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Form);