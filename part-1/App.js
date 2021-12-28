const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Sumeyra" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
