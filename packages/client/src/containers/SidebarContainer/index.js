import { connect } from "react-redux";

import Sidebar from "../../components/Sidebar";
import * as selectors from "./selectors";
import * as actions from "./actions";

const mapStateToProps = state => ({
  isOpen: selectors.getIsOpen(state)
});

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(actions.openSidebar()),
  closeSidebar: () => dispatch(actions.closeSidebar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
