import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto"
  },
  gridList: {
    width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  },
  images: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    width: "100%"
  }
});

function SingleLineGridList(props) {
  const { classes, data } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {data.map(nasa => (
          <GridListTile key={nasa.data[0].description + Math.random()} rows={3}>
            <img
              className={classes.images}
              src={nasa.links[0].href}
              alt={nasa.data[0].description}
            />
            <GridListTileBar
              title={nasa.data[0].description}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.nasaReducer.data
});
export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(SingleLineGridList));

// {data.map(nasa => (
//     <GridListTile className={classes.images}>
//       <img
//         className={classes.images}
//         src={nasa.links[0].href}
//         alt={"..."}
//       />
//       <GridListTileBar
//         title={nasa.data[0].description}
//         classes={{
//           root: classes.titleBar,
//           title: classes.title
//         }}
//         actionIcon={
//           <IconButton>
//             <StarBorderIcon className={classes.title} />
//           </IconButton>
//         }
//       />
//     </GridListTile>
//   ))}
