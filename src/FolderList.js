import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>       
        <ListItemText primary={this.props.feeling} secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
      
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      
    </List>
  );
}
