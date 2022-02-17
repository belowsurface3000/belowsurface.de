import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Tutorial from "./Tutorial";

const GET_TUTORIALS = gql`
    query getTutorials {
        tutorials(first: 10, after: null) {
            nodes {
                databaseId
                tutorialTitle
                tutorialDate
                tutorialPicture {
                    mediaItemUrl
                    altText
                }
            }
        }
    }
`;

function Tutorials() {

    // fetch the api data
    const { data, loading, error } = useQuery(GET_TUTORIALS);

    if (loading) return (<div><h1>Loading...</h1></div>);
    if (error) return (<div><h1>{error.message}</h1></div>);

    const tutorials = data.tutorials.nodes;

    return (
        <div id="tutorial">
            <h1>Tutorials</h1>
            <div className="tutorial-card-container">
                {tutorials.map(tutorial => (
                    <Link key={tutorial.databaseId} to={"tutorial"}>
                        <div className="tutorial-card">
                            <h3>{tutorial.tutorialTitle}</h3>
                            {tutorial.tutorialPicture && 
                                <img src={tutorial.tutorialPicture.mediaItemUrl} alt={tutorial.tutorialPicture.altText} />
                            }
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Tutorials