import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PieChartIcon from '@material-ui/icons/PieChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChart from '../Pite';
import { connect } from 'react-redux';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={1}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const koltesek = props.transactions;
  console.log(koltesek);

  const data = koltesek.map(koltes => {
    return { id: koltes.category, label: koltes.category, value: koltes.amount };
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab icon={<PieChartIcon />} label="Pite" {...a11yProps(0)} />
          <Tab icon={<TimelineIcon />} label="Csík" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ height: '275px' }} value={value} index={0}>
        <div style={{ height: '250px' }}>
          <PieChart data={data} />
        </div>
      </TabPanel>
      <TabPanel style={{ height: '275px' }} value={value} index={1}>
        <div style={{ height: '250px' }}>
          {/* <LineChart data={data} /> */}
        </div>
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
}

export default connect(mapStateToProps, null)(SimpleTabs);
