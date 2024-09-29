import React from 'react'

export interface NewsCardProps {
    "source": {
        "id": string,
        "name": string
    },
    "author": string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string,
    "publishedAt": string,
    "content": string
}

const NewsCard = (props: NewsCardProps) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = props;
    return (
        <>
            {/* <div>
                <a href={url} title={title}>
                    <img src={urlToImage} alt={title} />
                    <h2>{title}</h2>
                    <div>
                        <span>Author: {author}</span>
                        <span>Source: {source?.name}</span>
                    </div>
                    <div>
                        <span>publishedAt: {publishedAt}</span>
                        <span>description: {description}</span>
                    </div>
                    <p>{content}</p>
                </a>
            </div> */}
            <figure className="snip1369 green">
                <img src={urlToImage} alt={title} />
                <div className="image"><img src={urlToImage} alt={title} /></div>
                <figcaption>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </figcaption><span className="read-more">

                    Read More <i className="ion-android-arrow-forward"></i></span>
                <a href={url} title={title}></a>
            </figure>

        </>
    )
}

export default NewsCard;