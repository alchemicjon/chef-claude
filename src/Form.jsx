export default function Form() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    const allData = {
      ...data,
      dietaryRestrictions
    }
    console.log(allData)
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
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="gluten-free" defaultChecked={true} />
            Gluten free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="blue" required>
          <option value="" disabled>Choose a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  )
}
