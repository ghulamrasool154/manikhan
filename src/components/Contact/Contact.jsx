import React, { useEffect, useRef, useState } from "react";
import InputField from "../SubComponents/InputField/InputField";
import IconBox from "../SubComponents/IconBox/IconBox";
import icon1 from "../../assests/Image/icon9.png";
import icon2 from "../../assests/Image/icon10.png";
import icon3 from "../../assests/Image/icon11.png";
import icon4 from "../../assests/Image/icon12.png";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import TitleDisc from "../SubComponents/TitleDisc/TitleDisc";
const Contact = () => {
  const form = useRef();
  // const [name, setname] = useState();
  // const [email, setemail] = useState();
  // const [phoneno, setphoneno] = useState();
  // const [message, setmessage] = useState();

  const initialivalues = { Name: "", Email: "", Telephone: "", Message: "" };

  const [formValues, setformValues] = useState(initialivalues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const _submitDataafterEmptyFiled = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gdqsv14",
        "template_y4i4yqz",
        form.current,
        "RQ0YoqCClN9P2VU1c"
      )
      .then(
        (result) => {
          console.log("Result For Form", result.text);
        },
        (error) => {
          console.log("Result For Form", error.text);
        }
      );
    setformValues({
      Name: "",
      Email: "",
      Telephone: "",
      Message: "",
    });

    // setformValues()
    // e.preventDefault();

    // setemail('');
    // setname('');
    // setmessage('');
    // setphoneno('');
  };

  useEffect(() => {
    console.log("formErrors", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("formValues", formValues);
    }
    // }, [formErrors]);
  });

  const validate = (values) => {
    const error = {};

    if (!values.Name) {
      error.Name = "Name is Required";
    }
    if (!values.Email) {
      error.Email = "Email is Required";
    }
    if (!values.Telephone) {
      error.Telephone = "Telephone is Required";
    }
    if (!values.Message) {
      error.Message = "Message is Required";
    }

    return error;
  };

  const _hanldeonChange = (e) => {
    // console.log(e.target);

    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log(formValues);
    // console.log(formValues);
  };

  const _hanldClick = () => {
    console.log(formValues);
    setformErrors(validate(formValues));
    setisSubmit(true);
  };
  return (
    <section className="contact" id="Contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="row justify-content-center titleDiscription">
              <TitleDisc title="CONTACT" subtitle="Let’s Have A Chat!" />
              <p>
                You may contact me by filling in this form any time you need
                professional support or have any questions. You can also fill in
                the form to leave your comments or feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-5">
            <div className="contactme">
              <IconBox
                // icon={<BiMap />}
                icon={icon1}
                text="	884-D Raja Chowk, Ghulam Muhammad Abad, 
								Faisalabad 38000, Pakistan"
              />
              <IconBox
                icon={icon2}
                // icon={<BiMap />}
                text="+92-321-7841926"
              />
              <IconBox
                icon={icon3}
                // icon={<BiEnvelopeOpen />}
                text="admin@itsmanikhan.com
								khanattari7@gmail.com"
              />
              <IconBox
                icon={icon4}
                // icon={<BiMobile />}
                text="WordPressChampion"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form text-start">
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <b className="thankyou"> Thank You !.......</b>
              ) : (
                ""
              )}
              <form ref={form} onSubmit={_submitDataafterEmptyFiled}>
                <div className="d-flex flex-column">
                  <InputField
                    text="text"
                    place="Name *"
                    name="Name"
                    value={formValues.Name}
                    pressed={_hanldeonChange}
                    // pressed={(e) => setname(e.target.value)}
                  />
                  <span className="requiredmessage">{formErrors.Name}</span>
                  <InputField
                    text="email"
                    place="Email *"
                    name="Email"
                    value={formValues.Email}
                    // pressed={(e) =>
                    // 	setemail(e.target.value)
                    // }
                    pressed={_hanldeonChange}
                  />
                  <span className="requiredmessage"> {formErrors.Email} </span>
                  <InputField
                    text="text"
                    place="Telephone *"
                    name="Telephone"
                    value={formValues.Telephone}
                    // pressed={(e) => setphoneno(e.target.value)}
                    pressed={_hanldeonChange}
                  />
                  <span className="requiredmessage">
                    {" "}
                    {formErrors.Telephone}
                  </span>

                  <textarea
                    type="textarea"
                    placeholder="Message *"
                    rows={4}
                    className="form-control rounded-0 text-start mb-3"
                    value={formValues.Message}
                    // onChange={(e) => setmessage(e.target.value)}

                    name="Message"
                    onChange={_hanldeonChange}
                    required={true}
                  />
                  <span className="requiredmessage">{formErrors.Message}</span>
                </div>

                <input
                  type="submit"
                  className="sendmessage"
                  onClick={_hanldClick}
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
