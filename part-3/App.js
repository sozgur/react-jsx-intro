const App = () => {
    return (
        <div>
            <Person
                name="Jonathan"
                age="18"
                hobbies={["reading book", "watching movies", "painting"]}
            />
            <Person
                name="Wolfeschlegelsteinhausenbergerdorff"
                age="40"
                hobbies={[]}
            />
            <Person name="Sue" age="16" hobbies={["cooking", "walking"]} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
