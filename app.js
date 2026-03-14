async function recordPayment(){

const member = document.getElementById("member").value
const phone = document.getElementById("phone").value
const weeks = parseInt(document.getElementById("weeks").value)

if(!member || !phone || !weeks){
alert("Please fill all fields")
return
}

const workerUrl = "https://liberty-gad-susu-backend.gadesesamuel35.workers.dev/pay"

const res = await fetch(workerUrl,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
member:member,
phone:phone,
weeks:weeks
})
})

const data = await res.json()

document.getElementById("result").innerText =
"Payment Recorded\n\n" +
"Marks Today: " + data.mark + "\n" +
"Amount Today: GHS" + data.amount + "\n" +
"G.Total: GHS" + data.gTotal + "\n" +
"Penalty: GHS" + data.penalty

}
