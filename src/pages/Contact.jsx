import MailtoLink from "../components/MailtoLink";
import Social from "../components/Social";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact__heading paragraph">What's Next?</p>
      <h2 className="contact__title heading--2 mb-sm">Get In Touch</h2>
      <p className="contact__paragraph paragraph__md mb-md">
        I am here to provide valuable assistance and support. Whether you have
        questions, need information, or just want to say hello, feel free to
        reach out. I am committed to prompt and helpful responses, working
        together with you to achieve your goals.
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
