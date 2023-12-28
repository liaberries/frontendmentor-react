export default function SingleQuestion({ question, answer }) {
    return (
        <>
            <div className="article-question">
                <article>
                    <h2>{question}</h2>
                    {/* img */}
                </article>
                <p>{answer}</p>
            </div>
        </>
    )

}