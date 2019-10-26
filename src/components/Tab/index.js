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
import LineChart from '../LineChart';
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

const datas = [
  {
    "id": "japan",
    "color": "hsl(140, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 274
      },
      {
        "x": "helicopter",
        "y": 1
      },
      {
        "x": "boat",
        "y": 286
      },
      {
        "x": "train",
        "y": 296
      },
      {
        "x": "subway",
        "y": 132
      },
      {
        "x": "bus",
        "y": 110
      },
      {
        "x": "car",
        "y": 245
      },
      {
        "x": "moto",
        "y": 152
      },
      {
        "x": "bicycle",
        "y": 19
      },
      {
        "x": "horse",
        "y": 5
      },
      {
        "x": "skateboard",
        "y": 44
      },
      {
        "x": "others",
        "y": 18
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(8, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 289
      },
      {
        "x": "helicopter",
        "y": 206
      },
      {
        "x": "boat",
        "y": 219
      },
      {
        "x": "train",
        "y": 49
      },
      {
        "x": "subway",
        "y": 133
      },
      {
        "x": "bus",
        "y": 54
      },
      {
        "x": "car",
        "y": 218
      },
      {
        "x": "moto",
        "y": 195
      },
      {
        "x": "bicycle",
        "y": 21
      },
      {
        "x": "horse",
        "y": 233
      },
      {
        "x": "skateboard",
        "y": 117
      },
      {
        "x": "others",
        "y": 76
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(7, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 151
      },
      {
        "x": "helicopter",
        "y": 8
      },
      {
        "x": "boat",
        "y": 7
      },
      {
        "x": "train",
        "y": 54
      },
      {
        "x": "subway",
        "y": 151
      },
      {
        "x": "bus",
        "y": 215
      },
      {
        "x": "car",
        "y": 292
      },
      {
        "x": "moto",
        "y": 16
      },
      {
        "x": "bicycle",
        "y": 7
      },
      {
        "x": "horse",
        "y": 48
      },
      {
        "x": "skateboard",
        "y": 145
      },
      {
        "x": "others",
        "y": 144
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(172, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 253
      },
      {
        "x": "helicopter",
        "y": 261
      },
      {
        "x": "boat",
        "y": 134
      },
      {
        "x": "train",
        "y": 155
      },
      {
        "x": "subway",
        "y": 15
      },
      {
        "x": "bus",
        "y": 164
      },
      {
        "x": "car",
        "y": 109
      },
      {
        "x": "moto",
        "y": 257
      },
      {
        "x": "bicycle",
        "y": 172
      },
      {
        "x": "horse",
        "y": 135
      },
      {
        "x": "skateboard",
        "y": 136
      },
      {
        "x": "others",
        "y": 69
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(335, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 44
      },
      {
        "x": "helicopter",
        "y": 147
      },
      {
        "x": "boat",
        "y": 109
      },
      {
        "x": "train",
        "y": 247
      },
      {
        "x": "subway",
        "y": 107
      },
      {
        "x": "bus",
        "y": 22
      },
      {
        "x": "car",
        "y": 201
      },
      {
        "x": "moto",
        "y": 150
      },
      {
        "x": "bicycle",
        "y": 118
      },
      {
        "x": "horse",
        "y": 82
      },
      {
        "x": "skateboard",
        "y": 15
      },
      {
        "x": "others",
        "y": 274
      }
    ]
  }
];

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
          <LineChart data={datas} />
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
