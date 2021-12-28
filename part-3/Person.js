const Person = ({ name, age, hobbies }) => {
    const message = age < 18 ? "you must be 18" : "please go vote!";
    const revisedName = name.length > 8 ? name.slice(0, 7) : name;
    return (
        <div>
            <p>Learn some information about this person:</p>
            <h3>
                {revisedName}, {message}
            </h3>
            <ul>
                {hobbies.map((hoby) => (
                    <li>{hoby}</li>
                ))}
            </ul>
        </div>
    );
};
