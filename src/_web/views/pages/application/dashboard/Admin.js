import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PERSON from '../../../../../shared/constants/person';
import BarChart from '../../../shared/chart/bar';
import PieChart from '../../../shared/chart/pie';
import StackChart from '../../../shared/chart/stack';
import Panel from '../../../shared/Panel';
import CounselorTable from '../../../shared/table/counselor';
import DetaineeTable from '../../../shared/table/detainee';
import UserTable from '../../../shared/table/user';

import Tabs from '../../../shared/tabs';

const pieData = [
  {x: 1, y: 120}, {x: 2, y: 150}, {x: 3, y: 75}
];

const CHART_THEME = 'green';


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
        <h3>ADMIN DASHBOARD</h3>
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
          <div className='col-sm-6 col-md-4'>
            <Panel title='Screening Status Ratio' closed={false}>
              <PieChart
                theme={CHART_THEME}
                width='400'
                height='400'
                data={pieData}
              />
            </Panel>
          </div>
          <div className='col-sm-6 col-md-4'>
            <Panel title='Quarterly Screening Status Ratio ' closed={false}>
              <BarChart
                theme={CHART_THEME}
              />
            </Panel>
          </div>
          <div className='col-sm-6 col-md-4'>
            <Panel title='Counselor Meetings' closed={false}>
              <StackChart
                theme={CHART_THEME}
              />
            </Panel>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <Panel title='Personnel'>
              <Tabs data={[PERSON.DETAINEE, PERSON.USER, PERSON.COUNSELOR]}
                    content={[
                      <DetaineeTable
                        detainees={this.props.detainees}
                        getDetainees={this.props.getDetainees}
                        getDetaineesTotal={this.props.getDetaineesTotal}
                        onScreenButtonClick={this.props.onScreenButtonClick}/>,
                      <UserTable
                        users={this.props.users}
                        getUsers={this.props.getUsers}
                        getUsersTotal={this.props.getUsersTotal}
                        onScreenButtonClick={this.props.onScreenButtonClick}/>,
                      <CounselorTable
                        counselors={this.props.counselors}
                        getCounselors={this.props.getCounselors}
                        getCounselorsTotal={this.props.getCounselorsTotal}
                        onScreenButtonClick={this.props.onScreenButtonClick}/>,
                    ]}/>
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
    top            : '0px',
    left           : '0px',
  },
  topRight     : {
    backgroundColor: 'red',
    top            : '0px',
    right          : '0px',
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