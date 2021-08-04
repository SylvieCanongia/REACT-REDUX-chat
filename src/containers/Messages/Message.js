import { connect } from 'react-redux';

// presentation component import
import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownprops) => {
  // console.log(ownprops);
  return ({
    isOwn: state.pseudo === ownprops.username,
  });
};

const mapDispatchToProps = (dispatch) => ({
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Message);
