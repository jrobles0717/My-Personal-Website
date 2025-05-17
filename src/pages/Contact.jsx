import "aos/dist/aos.css";

import AOS from "aos";
import MailtoLink from "../components/MailtoLink";
import Social from "../components/Social";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="contact" id="contact">
      <p className="contact__heading paragraph" data-aos="fade-up">
        What's Next?
      </p>
      <h2
        className="contact__title heading--2 mb-sm"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Get In Touch
      </h2>
      <p
        className="contact__paragraph paragraph__md mb-md"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I am here to provide valuable assistance and support. Whether you have
        questions, need information, or just want to say hello, feel free to
        reach out. I am committed to prompt and helpful responses, working
        together with you to achieve your goals.
      </p>

      <a
        href="mailto:j_robles0717@yahoo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__btn btn mb-md"
        aria-label="To send me an email"
      >
        Let's Talk
      </a>

      <Social direction="row" data-aos="fade-up" data-aos-delay="400" />
    </section>
  );
}

export default Contact;
