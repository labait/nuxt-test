/* promise with function synthax
let p = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve("executed!");
  }, 5000);
});

console.log(new Date().toISOString())
p.then(function(result){
  console.log(`promise resolved with result: "${result}"`);
})
*/

/* promise w/ arrow function synthax
let p = new Promise((resolve, reject) =>{
  setTimeout(function(){
    resolve("executed!");
  }, 5000);
});

console.log(new Date().toISOString())
p.then(result => console.log(`promise resolved with result: "${result}" at ${new Date().toISOString()}`));
*/

/* async/await */
const resolveAfterSeconds = (seconds) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved!')
    }, seconds*1000)
  })
}

const asyncCall = async () => {
  console.log(new Date().toISOString());
  const result = await resolveAfterSeconds(3);
  console.log(`promise resolved with result: "${result}" at ${new Date().toISOString()}`);
  // expected output: "resolved"
}

asyncCall();