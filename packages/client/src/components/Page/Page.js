import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ContactBar from "../ContactBar";
import ScrollTopButton from "../../components/ScrollTopButton";
import Header from "../Header";
import NavBar from "../../containers/NavBarContainer";
import Sidebar from "../../containers/SidebarContainer";
import Loading from "../Loading";

const styles = {
  container: {
    padding: "0 1em 5em 1em"
  }
};

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScrollToTop: false
    };

    this.handleScroll = debounce(this.handleScroll.bind(this), 50);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.setState({
      showScrollToTop: document.scrollingElement.scrollTop !== 0
    });
  }

  render() {
    const {
      background,
      children,
      classes,
      headline,
      skinny,
      isLoading
    } = this.props;
    const styles = background
      ? {
          minHeight: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background}) no-repeat center center fixed`,
          backgroundSize: "cover"
        }
      : null;

    return (
      <Fragment>
        {!isLoading && (
          <div className="app" style={styles}>
            <ContactBar email="tgfischer6@gmail.com" />
            <NavBar title="Tom Fischer" />
            {Boolean(headline) && <Header text={headline} skinny={skinny} />}
            <Grid container className={classes.container} alignItems="center">
              <Grid item xs sm />
              <Grid item xs={12} sm={12} md={skinny ? 6 : 8}>
                {children}
              </Grid>
              <Grid item xs sm />
            </Grid>
            <Sidebar />
            {this.state.showScrollToTop && <ScrollTopButton />}
          </div>
        )}
        {isLoading && <Loading />}
      </Fragment>
    );
  }
}

Page.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  headline: PropTypes.string,
  isLoading: PropTypes.bool,
  skinny: PropTypes.bool
};

Page.defaultProps = {
  background: null,
  headline: null,
  isLoading: false,
  skinny: false
};

export default withStyles(styles)(Page);
