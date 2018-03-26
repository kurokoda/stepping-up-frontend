import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryPie, VictoryStack, VictoryTheme} from 'victory';
import Panel from '../../../shared/Panel';
import DetaineeTable from '../../../shared/table/detainee';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

class AdminDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panelOneOpen: true,
      panelTwoOpen: true,
    }
  }

  render() {
    return (
      <div className={`container ${css(styles.container)}`}>
        <h6>ROOT DASHBOARD</h6>
        <div className='row'>
          <div className='col-sm-12 col-md-4'>
            <Panel title='FOO' closed={true}/>
          </div>
          <div className='col-sm-12 col-md-4'>
            <Panel title='FOO' closed={true}/>
          </div>
          <div className='col-sm-12 col-md-4'>
            <Panel title='FOO' closed={true}>
              <div className={css(
                styles.tileContainer
              )}>
                <div className={css(
                  styles.tile,
                  styles.topLeft
                )}/>
                <div className={css(
                  styles.tile,
                  styles.topRight
                )}/>
                <div className={css(
                  styles.tile,
                  styles.bottomLeft
                )}/>
                <div className={css(
                  styles.tile,
                  styles.bottomRight
                )}/>
              </div>
            </Panel>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Panel title='FOO' closed={true}>
              <svg viewBox="0 0 400 400">
                <VictoryPie
                  standalone={false}
                  width={400} height={400}
                  data={[
                    {x: 1, y: 120}, {x: 2, y: 150}, {x: 3, y: 75}
                  ]}
                  innerRadius={68} labelRadius={100}
                  style={{labels: {fontSize: 20, fill: "white"}}}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{fontSize: 20}}
                  x={200} y={200}
                  text="Pie!"
                />
              </svg>
            </Panel>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Panel title='FOO' closed={true}>
              <VictoryChart
                domainPadding={20}
                theme={VictoryTheme.material}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4]}
                  tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryStack
                  colorScale={"warm"}
                >
                  <VictoryBar
                    data={data2012}
                    x="quarter"
                    y="earnings"
                  />
                  <VictoryBar
                    data={data2013}
                    x="quarter"
                    y="earnings"
                  />
                  <VictoryBar
                    data={data2014}
                    x="quarter"
                    y="earnings"
                  />
                  <VictoryBar
                    data={data2015}
                    x="quarter"
                    y="earnings"
                  />
                </VictoryStack>
              </VictoryChart>
            </Panel>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <Panel title='Detainees'>
              <DetaineeTable detainees={this.props.detainees}/>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

AdminDashboard.propTypes = {};

AdminDashboard.defaultProps = {};

export default withRouter(AdminDashboard);

const styles = StyleSheet.create({
  container    : {},
  tileContainer: {
    height  : '170px',
    position: 'relative',
  },
  topLeft      : {
    backgroundColor: 'purple',
    top : '0px',
    left: '0px',
  },
  topRight     : {
    backgroundColor: 'red',
    top  : '0px',
    right: '0px',
  },
  bottomLeft   : {
    backgroundColor: 'red',
    bottom         : '0px',
    left           : '0px',
  },
  bottomRight  : {
    backgroundColor: 'blue',
    bottom         : '0px',
    right          : '0px',
  },
  tile         : {
    position       : 'absolute',
    backgroundColor: '#999',
    width          : 'calc(50% - 5px)',
    height         : 'calc(50% - 5px)',
  },
});