document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, username, password })
    });

    const data = await res.json();
    alert(`✅ Logged in as ${role}: ${data.message || "Success!"}`);
  } catch (err) {
    alert("❌ Error connecting to backend");
  }
});
