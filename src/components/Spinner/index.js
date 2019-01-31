import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  linearColorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  linearBarColorPrimary: {
    backgroundColor: "#00695c"
  },
  zIndex: {
    zIndex: 2
  }
});

function CustomizedProgress(props) {
  const { classes } = props;
  return (
    <LinearProgress
      classes={{
        colorPrimary: classes.linearColorPrimary,
        barColorPrimary: classes.linearBarColorPrimary
      }}
      className={classes.zIndex}
    />
  );
}

CustomizedProgress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedProgress);
