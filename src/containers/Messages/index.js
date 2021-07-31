import { connect } from 'react-redux';

// presentation component import
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
