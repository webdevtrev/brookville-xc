import './faq.scss';
import React, { useEffect, useState } from "react";
import sanityClient from '../../client';
import BlockContent from "@sanity/block-content-to-react";
import {Helmet} from "react-helmet";
import {Card} from '@webdevtrev/my-components.components.card';

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

    
    console.log(faqs[0].answer)
    return (
        <div className="faqs">
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            {faqs?.map((faq) => {
                return (
                    <div className="faq">
                        <div className="question">
                            <Card color="#8ac926"><strong>Q: </strong>{faq.question}</Card>
                            
                        </div>
                        {/* <div><strong>Question:</strong>{faq.answer}</div> */}
                        <div className="answer">
                            <Card color="#1982c4">
                                <strong>A: </strong>
                                <BlockContent
                                    blocks={faq.answer}
                                    projectId={sanityClient.clientConfig.projectId}
                                    dataset={sanityClient.clientConfig.dataset}
                                />
                            </Card>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Faq;