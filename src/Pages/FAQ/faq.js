import './faq.css';
import React, { useEffect, useState } from "react";
import sanityClient from '../../client';
import BlockContent from "@sanity/block-content-to-react";
import {Helmet} from "react-helmet";

function Faq() {
    const [faqs, setFaqs] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "faq"]{
              question,
              answer
        }`
            )
            .then((data) => {
                setFaqs(data)
            })
            .catch(console.error);
    }, []);

    console.log(faqs)
    return (
        <div className="faqs">
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            {faqs?.map((faq) => {
                return (
                    <div className="faq">
                        <div className="question"><strong>Question:</strong>{faq.question}</div>
                        {/* <div><strong>Question:</strong>{faq.answer}</div> */}
                        <div className="answer">
                            <strong>Answer:</strong>
                            <BlockContent
                                blocks={faq.answer}
                                projectId={sanityClient.clientConfig.projectId}
                                dataset={sanityClient.clientConfig.dataset}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Faq;