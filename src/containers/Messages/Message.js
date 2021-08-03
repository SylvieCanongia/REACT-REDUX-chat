import { connect } from 'react-redux';

// presentation component import
import Message from 'src/components/Messages/Message';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Message);
