export default async function loginAuth(input) {
  try {
    const {email, password} = input
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, data };
    }
  } catch (error) {
    return { success: false, error };
  }
}
