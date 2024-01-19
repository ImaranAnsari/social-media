
const Welcome = ({ getGetPostsClick }) => {
    return (
        <center>

            <h1 className="wecome">There are no posts</h1>
            <button type="button" className="btn btn-primary"
                onClick={getGetPostsClick}
            >Get Post From Server</button>
        </center>
    )
}

export default Welcome