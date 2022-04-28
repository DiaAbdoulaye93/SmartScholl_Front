import Form from "react-validation/build/form";
import React, { useState, Component } from "react";
import CheckButton from "react-validation/build/button";

import AuthService from "../../../services/auth.service";
import BasicLayout from "../components/BasicLayout";
import { Button, Card, Switch } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import bgImage from "assets/images/bg.svg";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "layouts/dashboard";
import { RememberMe } from "@mui/icons-material";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      alert();
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          <Navigate to="/dashboard" />
          // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <BasicLayout image={bgImage}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h2" fontWeight="medium" color="white" mt={1}>
              Smart header
            </MDTypography>
            <MDTypography variant="h6" fontWeight="medium" color="white" mt={1}>
              Authentication
            </MDTypography>
          </MDBox>
          <Form

            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <MDBox pt={4} pb={3} px={3}>
              <MDBox mb={2}>
                <MDInput type="text" label="login" fullWidth
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[required]}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="password" label="mot de pass" name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required]}
                  fullWidth />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <Button variant="contained" text="primary"  type="submit" on
                  fullWidth>
                  Connexion
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                </Button>
                <CheckButton
                  ref={d => {
                    this.checkBtn = d;
                  }}
                />
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  pas encore inscrit?{" "}
                  <MDTypography
                    component={Link}
                    to="/authentication/sign-up"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Inscription
                  </MDTypography>
                </MDTypography>
              </MDBox>
              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}

            </MDBox>
          </Form>

        </Card>
      </BasicLayout >
    );
  }
}
