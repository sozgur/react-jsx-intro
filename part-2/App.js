const App = () => {
    return (
        <div>
            <Tweet
                username="sozgur"
                message="Life is good!"
                date="28 December 2021"
            />
            <Tweet
                username="freedom"
                message="Coffe make happy."
                date="2 December 2021"
            />
            <Tweet
                username="kaplan"
                message="Holloween 🎃 yeahh trick or treat!"
                date="28 November 2021"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
