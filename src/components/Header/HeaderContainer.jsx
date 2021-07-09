import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserAuthData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData();
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>;
    }
}

const mapStateToProps = (state) => ({
    login: state.userAuthData.login,
    isAuth: state.userAuthData.isAuth,
});

export default connect(mapStateToProps, {getUserAuthData})(HeaderContainer);