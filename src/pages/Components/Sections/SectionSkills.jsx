import React from "react";
// plugin that creates slider
// import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// React icons
// import { FaUsers } from 'react-icons/fa';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx"

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import { CardHeader, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from  "@material-ui/core/Paper"



class SectionSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Skills</h2>
          </div>
          <div id="skills">
            <div className={classes.root}>
              <GridContainer spacing={3}>
                <GridItem>
                  <Paper className={classes.paper}>xs</Paper>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionSkills);
