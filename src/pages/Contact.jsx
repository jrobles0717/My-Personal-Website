import Social from "../components/Social";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact__heading paragraph">What's Next?</p>
      <h2 className="contact__title heading--2 mb-sm">Get In Touch</h2>
      <p className="contact__paragraph paragraph__lg mb-md">
        I am here to provide valuable assistance and support. Whether you have
        questions, need information, or just want to say hello, feel free to
        reach out. I am committed to prompt and helpful responses, working
        together with you to achieve your goals.
        {/* As a software engineer, I am passionate about leveraging my skills and
        knowledge to provide valuable assistance and support. Whether you have
        questions, need more information, or simply want to say hello, please
        don't hesitate to reach out. I am committed to promptly responding and
        helping you in any way I can. Let's work together to achieve your goals! */}
      </p>
      <a
        href="mailto:j_robles0717@yahoo.com"
        target="_blank"
        rel=""
        className="contact__btn btn mb-md"
        aria-label="To send me an email"
      >
        Let's Talk
      </a>

      <Social direction="row" />
    </section>
  );
}

export default Contact;
