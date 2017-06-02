var React =require('react');
var {Link} = require('react-router');


var About = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className='text-center'>About </h1>
        <p>This is a weather application build on React. I have built this for The Complete React Web App Developer Course.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href='http://openweathermap.org/'>Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
          <li>
            <a href='https://www.heroku.com/'>Heroku</a> - This is the server platform I run the app on.
          </li>
          <li>
            <a href='https://github.com/'>GitHub</a> - This is where I store my app code.
          </li>
        </ul>
      </div>
    );
  }
});

// When only render function in the component where there's no state
// var About = (props) => {
//   return(
//     <div>
//       <h3>About</h3>
//       <p>Welcome to the About page!</p>
//     </div>
//   )
// };

module.exports = About;
