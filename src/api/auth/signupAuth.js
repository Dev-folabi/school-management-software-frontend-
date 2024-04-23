export default async function signUpAuth(input){
const { firstName, lastName, email, password } = input;

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
       return{success: true, data}
      } else {
        return({success: false, data});
      }
    } catch (error) {
      return { success: false, error };
    } 
}