import React from "react";
import classes from "./footer.module.css";

function Footer(props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link>
      <footer class="py-3">
        <div
          class="copy-bottom-txt text-center py-3"
          className={classes.copybottomtxt}
        >
          <p>
            © 2020 Name Site. All Rights Reserved | Design by{" "}
            <a href="#" target="_blank">
              Nazik
            </a>
          </p>
        </div>
        <div
          class="social-icons mt-lg-3 mt-2 text-center"
          className={classes.socialicons}
        >
          <ul>
            <li>
              <a href="#">
                <span class="fa fa-facebook"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fa-rss"></span>
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <script src="https://use.fontawesome.com/df966d76e1.js"></script>
    </>
  );
}

export default Footer;
