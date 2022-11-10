import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css"
import emailInfo from "../emailInfo.js"

const ContactForm = ( {fields}) => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        emailInfo.service,
        emailInfo.template,
        form.current,
        emailInfo.last
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  // Hide Results
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <div className={styles.row}>
        {/* <!--Name Field--> */}
        <div className="col-md-6 mb-5">
          <span className={styles.input}>
            <input
              className={styles.input__field/* , styles.cf-validate */}
              type="text"
              name="from_name"
              id="from_name"
              required
            />
            <label className={styles.input__label} htmlFor="cf-name">
            {fields[1]}
            </label>
          </span>
        </div>

        {/* <!--Email Field--> */}
        <div className="col-md-6 mb-5">
          <span className={styles.input}>
            <input
              className={styles.input__field} /* cf-validate */
              type="email"
              name="email"
              id="email"
              required
            />
            <label className={styles.input__label} htmlFor="cf-email">
              {fields[0]}
            </label>
          </span>
        </div>

        {/* <!--Message Box--> */}
        <div className="col-md-12 mb-5">
          <span className={styles.input}>
            <input
              className={`${styles.input__field} ${styles.input__fieldLast}`}/* cf-validate */
              name="message"
              id="message"
              rows="5"
              required
            />
            <label className={styles.input__label} htmlFor="cf-message">
            {fields[2]}
            </label>
          </span>
        </div>

        <div className="alert-container text-success col-md-12">
          {result ? <p>{fields[3]}</p> : null}
        </div>

        {/* <!--Submit Button--> */}
        <div className="col-md-12 text-center">
          <button
            type="submit"
            id="button"
            value="Send Email"
            className={styles.btnMain} /*  mb-2" */
          >
            {fields[4]}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
