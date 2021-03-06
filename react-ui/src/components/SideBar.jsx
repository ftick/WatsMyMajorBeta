import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { setView } from '../actions/index';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import MyCoursesIcon from 'material-ui/svg-icons/social/person';
import ScheduleIcon from 'material-ui/svg-icons/action/schedule';
import BrowseIcon from 'material-ui/svg-icons/action/subject';
import Avatar from './Avatar'
import {
	DASHBOARD_VIEW,
	COURSE_LIST_VIEW,
	MY_COURSE_VIEW
} from '../constants/views';

const styles = {
	drawer: {
		zIndex: 1000,
		position: 'absolute',
		textAlign: 'left'
	},
	avatarMenuItem: {
		marginTop: '60px',
		paddingTop: '20px',
		paddingBottom: '5px',
		backgroundColor: 'rgb(54, 65, 80)'
	}
}


class SideBar extends Component {

	static propTypes = {
		open: PropTypes.bool.isRequired,
		onDashboardClick: PropTypes.func.isRequired,
		onMyCoursesClick: PropTypes.func.isRequired,
		onBrowseCoursesClick: PropTypes.func.isRequired
	};

	render() {
		return (
			<Drawer open={this.props.open} style={styles.drawer}>
				<MenuItem
					style={styles.avatarMenuItem}
					>
					<Avatar />
				</MenuItem>
					<List>
	            <ListItem
                primaryText="Dashboard"
                leftIcon={<DashboardIcon />}
                onClick={this.props.onDashboardClick}
                />
	            <ListItem
	              primaryText="Courses"
	              leftIcon={<SchoolIcon />}
	              initiallyOpen={false}
	              primaryTogglesNestedList={true}
	              nestedItems={[
	                <ListItem
	                  key={1}
	                  primaryText="My Courses"
	                  leftIcon={<MyCoursesIcon />}
		                onClick={this.props.onMyCoursesClick}
	                />,
	                <ListItem
	                  key={2}
	                  primaryText="My Schedule"
	                  leftIcon={<ScheduleIcon />}
	                />,
	                <ListItem
	                  key={3}
	                  primaryText="Browse Courses"
	                  leftIcon={<BrowseIcon />}
		                onClick={this.props.onBrowseCoursesClick}
	                />
	              ]}
	            />
	          </List>
			</Drawer>
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onDashboardClick: () => {
      dispatch(setView(DASHBOARD_VIEW));
    },
		onMyCoursesClick: () => {
			dispatch(setView(MY_COURSE_VIEW));
		},
    onBrowseCoursesClick: () => {
      dispatch(setView(COURSE_LIST_VIEW));
    }
  };
};

export default connect(null, mapDispatchToProps)(SideBar);
