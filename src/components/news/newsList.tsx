import NewsCard, { NewsCardProps } from './newsCard'

type Props = {
    newsList: [NewsCardProps]
}

const Newsist = (props: Props) => {
    const { newsList } = props
    console.log(newsList)
    return (
        <>
            <div className='flex flex-wrap'>
                {
                    newsList ? newsList.map((news: NewsCardProps, index: number) => <NewsCard key={news?.publishedAt + index} {...news} />) : null
                }
            </div>
        </>
    )
}

export default Newsist;