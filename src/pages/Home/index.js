import { useFetch } from "../../components";

const Home = () => {

    const data = useFetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple');
    console.log(data);

    return (
        <>
            <h1>Quiz Title</h1>
            {/* <textarea>{topicData}</textarea> */}
            <p>{console.log(data)}</p>
            // <form>
            //     <option></option>
            // </form>
        </>
    )
}

export default Home;