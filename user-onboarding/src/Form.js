export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props
    return (
        <div>
            <form>
                <input type="text" name="name" value={values.name}/>
                <input type="text" name="email" value={values.email}/>
                <input type="text" name="password" value={values.password}/>
                <input type="checkbox" name="terms" checked={values.terms}/>
                <button>Create new user</button>
            </form>
        </div>
    )
};
