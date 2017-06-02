// // Asynchronized callback function
// function getTempCallback(location, callback) {
//   callback(undefined, 78); // sucess case: we don't have an error argument just the temp
//   callback('City not found'); // for an error where we pass the string but not the temp
// };
//
// getTempCallback('San Francisco', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// // 1st problem: we have one callback function differentiating between err and success case
// // 2nd problem: called callback twice
//
// // Using promises
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 2000);
//   });
// };
//
// getTempPromise('San Francisco').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('error', err);
// });


// Chanllenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if( typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b need to be numbers');
    }
  });
};

addPromise(2, 'love').then(function(sum) {
  console.log('success', sum)
}, function(err) {
  console.log('error', err)
});

addPromise(2, 6).then(function(sum) {
  console.log('success', sum)
}, function(err) {
  console.log('error', err)
});
