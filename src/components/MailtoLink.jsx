function MailtoLink() {
  const handleClick = (event) => {
    event.preventDefault();

    let link = document.createElement("a");
    link.href = "mailto:j_robles0717@yahoo.com";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="contact__btn btn mb-md"
      aria-label="To send me an email"
    >
      Let's Talk
    </button>
  );
}

export default MailtoLink;
