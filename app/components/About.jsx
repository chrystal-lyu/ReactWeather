var React =require('react');

// var About = React.createClass({
//   render: function() {
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

// When only render function in the component where there's no state
var About = (props) => {
  return(
    <h3>About Component</h3>
  )
};

module.exports = About;
