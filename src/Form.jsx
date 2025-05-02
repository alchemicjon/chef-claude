export default function Form() {
  function signUp(formData) {
    console.log("Submitted")
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    console.log(email, password, employmentStatus)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="jon@example.com" />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" defaultValue="password123" />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>
        <br />
        <fieldset>
          <legend>Employment status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="partTime" />
            Part time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="fullTime" defaultChecked={true} />
            Full time
          </label>
        </fieldset>
        <fieldset>
          <legend>Dietary Rescriptions</legend>
          <label>
            <input type="checkbox" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="checkbox" name="employmentStatus" value="partTime" />
            Part time
          </label>
          <label>
            <input type="checkbox" name="employmentStatus" value="fullTime" defaultChecked={true} />
            Full time
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  )
}
