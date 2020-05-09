import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        <h2>What is this?</h2>
        <div>
          One of the many positives of living in Kansas City is access to over
          50 golf courses. With so many options, it is difficult to remember the
          courses you have enjoyed, previously. “Of Course” is an awesome app
          that gives Golfer’s quick access to their favorite golf courses, all
          in one list. Golfers can save their favorite courses in the app and
          then refer back to their list when they are planning on playing their
          next round. “Where was that sweet course with the really high par 3
          hole?”. “Of course!”
        </div>
      </p>
    </div>
  </div>
);

export default AboutPage;
