const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style = "text-align: center;">
          <h3> I'd like your input </h3>
          <p> Please Answer the following Question: </p>
          <p> ${survey.body} </p>
          <div>
            <a href = "${keys.redirectDomain}/api/surveys/voted"> Yes</a>
          <div>
          <div>
            <a href = "${keys.redirectDomain}/api/surveys/voted"> No</a>
          </div>
        </div>
      </body>
    </html>

  `;
};
