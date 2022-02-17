import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom';

// const GET_TUTORIAL = gql`
//     query getTutorial($databaseId: ID!) {
//         tutorial(id: $databaseId, idType: DATABASE_ID) {
//             tutorialTitle
//             tutorialDate
//             tutorialText
//             tutorialPicture {
//                 mediaItemUrl
//                 altText
//             }
//         }
//     }
// `;

function Tutorial(id) {

    // fetch the api data
    // const { data, loading, error } = useQuery(GET_TUTORIAL);

    // if (loading) return (<div><h1>Loading...</h1></div>);
    // if (error) return (<div><h1>{error.message}</h1></div>);

    // const tutorial = data.tutorials.nodes;

    console.log(id);

    return (
        <div>
            <h1>Tutorial</h1>
        </div>
    )
}

export default Tutorial