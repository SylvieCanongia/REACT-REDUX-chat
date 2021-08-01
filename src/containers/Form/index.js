import { connect } from 'react-redux';

// presentation component import
import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  value: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Form);