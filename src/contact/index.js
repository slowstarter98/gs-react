import { Helmet } from "react-helmet";
import "./contact.css";

function ContactPage() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      </Helmet>
      <div id="wrap">
        <section>
          <title_>
            <h1>About</h1>
          </title_>
          <article id="first_intro">
            <h1>Intro 1</h1>
            <p>This is website is for production of Financial data.</p>
            <br />
            <p>
              Originally made for developer himself, but it is finally
              distributed now.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </article>
          <article id="second_intro">
            <h1>Intro 2</h1>
            <p>You can contact the developer by email, facebook, phone.</p>
            <br />
            <p>Email : tmxmdkflr224@naver.com</p>
            <br />
            <p>facebook : @@@@@</p>
            <br />
            <p>phone : @@@@@</p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </article>
        </section>
      </div>
    </div>
  );
}
export default ContactPage;
