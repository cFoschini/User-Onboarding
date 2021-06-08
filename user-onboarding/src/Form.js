export default function Form(props) {
    const { name, email, password, terms } = props;
    return (
        <div>
            <form>
                <input type="text" name="name" value="props.name"/>
                <input type="text" name="email" value="props.email"/>
                <input type="text" name="password" value="props.password"/>
            </form>
        </div>
    )
};
