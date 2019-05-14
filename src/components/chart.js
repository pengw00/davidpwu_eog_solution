import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeaderRaw from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Plot from 'react-plotly.js';

const styles = ({
  graph: {
    height: '50%',
    width: '100%'
  },
  grid: {
    paddingTop: 50
  },
  card: {
    margin: '5% 25%'
  },
  center:{
      textAlign: 'center'
  },
  position: {
      width: '100%',
      height:'80%'
  }
});

const Chart = props => {
  const { classes } = props;
    // console.log(props.droneData.data);
  const xData = props.droneData.data.map(data =>
    moment(data.timestamp).format('kk:mm:ss')
  );
  const yData = props.droneData.data.map(data => data.metric);
  return (
    <Grid className={classes.position} container>
      <Grid item xs={12}>
        <Card className={classes.card}>
          {/* <CardHeader className={classes.center} title="Sample Drone Temperature" /> */}
          <CardContent>
            <Plot
              className={classes.graph}
              data={[
                {
                  x: xData,
                  y: yData,
                  type: 'linear',
                  marker: { color: 'blue' }
                }
              ]}
              layout={{
                title: 'Sample Drone Temperature',
                xaxis: {
                  autotick: false,
                  dtick: 40
                },
                margin: {
                  l: 30,
                  r: 35,
                  t: 30,
                  b: 40
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Chart);
