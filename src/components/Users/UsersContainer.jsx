import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Loader from "../../assets/loader/Loader";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleFollowInProgress,
    toggleIsFetching
} from "../../redux/users-reducer";
import {usersAPI} from "../api/api";


class UsersContainer extends React.Component {
    getUsers = (pageNumber = 1) => {
        this.props.toggleIsFetching();
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.toggleIsFetching();
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Loader/>}
                <Users usersList={this.props.usersList} toggleFollow={this.props.toggleFollow}
                       setUsers={this.props.setUsers} totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       toggleFollowInProgress={this.props.toggleFollowInProgress}
                       usersToggleFollowInProgress={this.props.usersToggleFollowInProgress} changePage={this.changePage}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        usersToggleFollowInProgress: state.usersPage.usersToggleFollowInProgress,
    }
}

export default connect(mapStateToProps, {
    toggleFollow, toggleIsFetching, setUsers, setCurrentPage, setTotalUsersCount, toggleFollowInProgress
})(UsersContainer);