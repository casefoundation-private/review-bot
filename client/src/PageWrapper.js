import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Form, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  clearMessage
} from './actions/message';

class PageWrapper extends Component {
  clearAlert() {
    this.props.clearMessage();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.message.message !== nextProps.message.message) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.clearAlert();
      },5000);
    }
  }

  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarBrand href="#/">Review-O-Matic</NavbarBrand>
          <Nav className="ml-auto" navbar>
            { this.props.user.user.role === 'admin' && (
                <NavItem>
                  <Link to="/users" className="nav-link">Users</Link>
                </NavItem>
            ) }
            { this.props.user.user.role === 'admin' && (
                <NavItem>
                  <Link to="/submissions" className="nav-link">Submissions</Link>
                </NavItem>
            ) }
            <NavItem>
              <Link to="/account" className="nav-link">My Review Queue</Link>
            </NavItem>
            <NavItem>
              <Link to={'/users/'+this.props.user.user.id} className="nav-link">My Account</Link>
            </NavItem>
          </Nav>
          <Form className="form-inline">
            <Link to="/logout" className="btn btn-danger">Logout</Link>
          </Form>
        </Navbar>
        <div className="container-fluid" style={{paddingTop: 12}} role="main">
          { this.props.title && (<h1 className="page-header">{this.props.title}</h1>) }
          { this.props.message.message ? <Alert color={this.props.message.messageType} toggle={() => this.clearAlert()}>{this.props.message.message}</Alert> : null }
          { this.props.children }
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    user: state.user,
    message: state.message
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearMessage
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(PageWrapper);