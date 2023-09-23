export default function Hero() {
  return (
    <main className="hero">
      <div className="hero__description">
        <h1 className="description__title">
          All your files in one secure <br /> location, accessible anywhere.
        </h1>
        <p className="description__subtitle">
          Fylo stores your most important files in one secure location. Access
          <br />
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form action="">
          <div className="hero__input">
            <input
              className="input__field"
              type="email"
              required
              placeholder="Enter your email…"
              pattern="[a-zA-z0-9]+@[a-z]{2,5}\.[a-z]{2,8}$"
            />
            <span className="error">Please check your email</span>
          </div>

          <input
            className="subscription__button"
            value="Get Started"
            type="submit"
          />
        </form>
      </div>
      <img
        className="hero__img"
        src="./images/illustration-1.svg"
        alt="illustration-picture"
      />
    </main>
  );
}
