import { connect } from 'react-redux';

// presentation component import
import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
