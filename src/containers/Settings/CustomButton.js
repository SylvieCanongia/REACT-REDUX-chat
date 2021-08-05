import { connect } from 'react-redux';

import { handleClick } from 'src/actions/chatActions';

// presentation component import
import CustomButton from 'src/components/Settings/CustomButton';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  manageClick: () => {
    dispatch(handleClick());
  },
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);
