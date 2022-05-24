// <!--  Asynchronous Javascript setTimeout, setInterval -->

function logTimeout() {
    console.log(1111)
}
console.log(2222);
// setTimeout(logTimeout, 4000);
setTimeout(() => {
    console.log("4 second see you later")
}, 4000);

setInterval(() => {
    console.log("4 second see you later")
}, 1000);
console.log(3333);
console.log(4444);