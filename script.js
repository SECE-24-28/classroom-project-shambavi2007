function generateSlip() {
    let name = document.getElementById("empName").value;
    let dept = document.getElementById("dept").value;
    let basic = Number(document.getElementById("basic").value);

    if (name === "" || dept === "" || basic === "") {
        alert("Please fill all the fields!");
        return;
    }

    let hra = basic * 0.10;
    let pf = basic * 0.05;
    let net = basic + hra - pf;

    let message = `
        <h3>Hello, ${name}! 👋</h3>
        <h4>Salary Slip</h4>
        <p><b>Department:</b> ${dept}</p>
        <p><b>Basic Salary:</b> ₹${basic.toFixed(2)}</p>
        <p><b>HRA (10%):</b> ₹${hra.toFixed(2)}</p>
        <p><b>PF (5%):</b> ₹${pf.toFixed(2)}</p>
        <p><b>Net Salary:</b> <b>₹${net.toFixed(2)}</b></p>
    `;

    let output = document.getElementById("output");
    output.innerHTML = message;
    output.style.display = "block";
}
