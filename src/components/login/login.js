import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./login.module.css";
import Input from "../ui/input";
import { URL } from "../routes/urls";
import { connect } from "react-redux";
import { auth } from "../../actions/auth";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Login extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "Введите здесь Вашу почту",
        errorMessage: "Введите корректный email!",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        name: "password",
        placeholder: "Пароль не менее 3 символов",
        errorMessage: "Неверный пароль!",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 3
        }
      }
    }
  };

  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };

  onSubmitHandler = event => {
    event.preventDefault();
  };

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          name={control.name}
          placeholder={control.placeholder}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  };

  render() {
    return (
      <div className={classes.login}>
        <form onSubmit={this.onSubmitHandler}>
          <div className={classes.login__inner}>
            <div className={classes.login__title}>
              <h2>Учетная запись</h2>
            </div>

            <div className={classes.login__content}>
              <div className={classes.login__inputs}>{this.renderInputs()}</div>
            </div>

            <div className={classes.login__btn}>
              <Link to={URL.HOME} className={classes.link}>
                <input
                  type="success"
                  value="Войти"
                  onClick={this.loginHandler}
                  disabled={!this.state.isFormValid}
                ></input>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(auth())
  };
};

export default connect(null, mapDispatchToProps)(Login);
