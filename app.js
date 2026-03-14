async function recordPayment() {
    const member = document.getElementById("member").value;
    const phone = document.getElementById("phone").value;
    const weeks = parseInt(document.getElementById("weeks").value);

    if (!member || !phone || !weeks) {
        alert("Please fill all fields");
        return;
    }

    const data = { member, phone, weeks };

    // Replace with your Worker URL later
    const workerUrl = "const workerUrl = "https://liberty-gad-susu-backend.gadesesamuel35.workers.dev/pay";";

    const res = await fetch(workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    document.getElementById("result").innerText =
        `Recorded! Weeks Paid Today: ${weeks}\n` +
        `Mark Today: ${result.mark}\n` +
        `Amount Today: GHS${result.amount}\n` +
        `G.Total: GHS${result.gTotal}\n` +
        (result.penalty ? `Penalty Applied: GHS${result.penalty}` : "");
}
