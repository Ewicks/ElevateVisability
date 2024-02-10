import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from 'sweetalert2';


const SERVICE_ID = "service_byry0id";
const TEMPLATE_ID = "template_e7pm57l";
const USER_ID = "dwyA3aNUaqZqc51RC";

const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-light my-5 d-flex justify-content-start align-items-center flex-column">
          <h1>Get In Touch With Us</h1>
          <p className="about-subtitle">We will get back to you as soon as possible</p>
          <hr className="contact-hr"/>

          <Form className="my-5" onSubmit={handleOnSubmit}>
            <div className="form-content">
              <div className="contact-form-border"></div>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                name="user_email"
                placeholder="Email"
                required
                icon="mail"
                iconPosition="left"
                className="my-3"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                name="user_name"
                placeholder="Name"
                required
                icon="user circle"
                iconPosition="left"
                className="my3"
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                name="user_message"
                placeholder="Message…"
                className="my-5"
                required
              />
              <Button type="submit" color="purple" className="btn contact-btn mb-5">
                Submit
              </Button>

              </div>
            
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
