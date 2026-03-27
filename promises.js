let promise = new Promise (function (resolve, reject) {
 setTimeout(() => {
     resolve("hahahihi")
        }, 3000)
  
 })

 promise.then((value) => {
   console.log(value)
 })
 let promise1 = new Promise (function (resolve, reject) {
   setTimeout(() => {
     reject("error occured")
   }, 12000)
  
 })

 promise1.catch((error) => {
   console.log(error)
 })
