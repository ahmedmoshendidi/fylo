export default function Productive() {
  return (
    <section className="productive">
      <article className="productive__description">
        <h4 className="productive__title">Stay productive, wherever you are</h4>
        <p className="first__information">
          Never let location be an issue when accessing your files. Fylo has you
          <br />
          covered for all of your file storage needs.
        </p>
        <p className="second__information">
          Securely share files and folders with friends, family and colleagues
          for <br />
          live collaboration. No email attachments required!
        </p>
        <div className="wraper">
          <a className="fylo__link" href="https://fylo.com/" target="_balnk">
            See how Fylo works <img src="../public/images/icon-arrow.svg" />
          </a>
        </div>
        <div className="testimonial__section">
          <img src="../public/images/icon-quotes.svg" alt="icon-quotes" />
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user">
            <img
              src="../public/images/avatar-testimonial.jpg"
              alt="user-picture"
            />
            <div className="user__info">
              <p className="user__name">Kyle Burton</p>
              <span className="user__job">Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </article>
      <img
        className="productive__img"
        src="../public/images/illustration-2.svg"
        alt="illustration-picture"
      />
    </section>
  );
}
