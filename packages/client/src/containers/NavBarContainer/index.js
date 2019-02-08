import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import * as actions from "../SidebarContainer/actions";

const mapDispatchToProps = dispatch => ({
  openSidebar: () => dispatch(actions.openSidebar()),
  closeSidebar: () => dispatch(actions.closeSidebar())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
