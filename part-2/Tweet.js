const Tweet = ({ username, date, message }) => {
    return (
        <div>
            <p>{username}</p>
            <p>{message}</p>
            <p>{date}</p>
        </div>
    );
};
