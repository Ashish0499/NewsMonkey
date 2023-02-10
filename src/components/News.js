import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Tech Explorist"
            },
            "author": "Amit Malewar",
            "title": "Scientists discovered a new type of ice that could change understanding of water - Tech Explorist",
            "description": "The newly discovered ice is amorphous.",
            "url": "https://www.techexplorist.com/new-type-ice-change-understanding-water/56631/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/02/new-type-of-ice.jpg",
            "publishedAt": "2023-02-04T06:12:47Z",
            "content": "Water ice has many crystalline phases, along with a few amorphous structures. Amorphous ice, although rare on Earth, is the primary type found in space. They govern several cosmological processes and… [+4872 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biospectrumindia.com"
            },
            "author": null,
            "title": "Biotech startup Mynvax advances studies on indigenous vaccines for influenza and COVID-19 - BSI bureau",
            "description": "Clinical trials to start for influenza vaccine candidate this year in Australia",
            "url": "https://www.biospectrumindia.com/news/20/22587/biotech-startup-mynvax-advances-studies-on-indigenous-vaccines-for-influenza-and-covid-19-.html",
            "urlToImage": "https://www.biospectrumindia.com/uploads/articles/shutterstock_117541078-22587.jpg",
            "publishedAt": "2023-02-04T06:03:33Z",
            "content": "Biotech startup Mynvax, incubated at the Indian Institute of Science (IISc) in Bengaluru, has developed an adjuvant subunit-based vaccine against SARS-CoV-2 which is now ready for pre-clinical trials… [+1261 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "2-Day Bandh, Emergency Session In Sikkim Over Supreme Court's Remark On Nepalis - NDTV",
            "description": "After days of protest across Sikkim, the state government has filed a review petition in the Supreme Court's for rectification of the court's observation that Sikkimese Nepalis were people of foreign origin.",
            "url": "https://www.ndtv.com/india-news/2-day-bandh-emergency-session-in-sikkim-over-supreme-courts-remark-on-nepalis-3752248",
            "urlToImage": "https://c.ndtvimg.com/2023-02/gn44o4hg_sikkim-protests_625x300_04_February_23.jpg",
            "publishedAt": "2023-02-04T05:54:00Z",
            "content": "Nepalis are the majority community of Sikkim, apart from Lepchas and Bhutias.\r\nGuwahati: After days of protest across Sikkim, the state government has filed a review petition in the Supreme Court's f… [+2565 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Sidharth Malhotra-Kiara Advani wedding: Bride-to-be leaves for Jaisalmer - Hindustan Times",
            "description": "Kiara Advani was spotted at the Kalina airport as she left for Jaisalmer for her wedding with Sidharth Malhotra. Watch video, see pictures.  | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/sidharth-malhotra-kiara-advani-wedding-bride-to-be-leaves-for-jaisalmer-101675487240773.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/02/04/1600x900/sidharth_malhotra_kiara_advani_wedding_1675487314462_1675487314607_1675487314607.png",
            "publishedAt": "2023-02-04T05:21:51Z",
            "content": "Bride-to-be Kiara Advani was all smiles as she was spotted at the Kalina airport on Saturday evening. The actor is all set to tie the knot with Sidharth Malhotra, though neither of them have even con… [+1957 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Elon Musk Likely To \"Double Down\" On Tweets After Court Victory - NDTV",
            "description": "Elon Musk may become even more emboldened in his Twitter use after a jury cleared the billionaire Tesla Inc chief executive over his missive that he had \"funding secured\" to take his electric car company private.",
            "url": "https://www.ndtv.com/world-news/billionaire-musk-likely-to-double-down-on-tweets-after-court-victory-3752006",
            "urlToImage": "https://c.ndtvimg.com/2023-02/05rfst18_elon-musk_625x300_04_February_23.jpg",
            "publishedAt": "2023-02-04T05:13:00Z",
            "content": "Elon Musk's raw tweeting style has made him a hero for many, and burnished the Tesla brand.\r\nElon Musk may become even more emboldened in his Twitter use after a jury cleared the billionaire Tesla In… [+2595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Aryan Prakash",
            "title": "Pakistan blocks Wikipedia after 48-hour deadline ends: Report - Hindustan Times",
            "description": "Pakistan has cracked down on social media platforms and websites in recent years. In 2012, the Pakistan government had blocked more than 700 YouTube links to an anti-Islam film which triggered massive protests across several countries. | World News",
            "url": "https://www.hindustantimes.com/world-news/pakistan-blocks-wikipedia-after-48-hour-deadline-ends-report-101675485765157.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/02/04/1600x900/Wikipedia_1675485737395_1675485758921_1675485758921.png",
            "publishedAt": "2023-02-04T05:08:36Z",
            "content": "Pakistan has banned Wikipedia over the website's refusal to remove what the establishment termed as blasphemous content, Pakistan website The News reported. The restoration of the services will be su… [+1686 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Garena Free Fire Max redeem codes February 4, 2023: Win free gifts | Mint - Mint",
            "description": "Garena Free Fire Max redeem codes allow players to win in-game items like weapons, diamonds, skins and more",
            "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-february-4-2023-win-free-gifts-11675485531903.html",
            "urlToImage": "https://images.livemint.com/img/2023/02/04/600x338/ff_max_1662000070768_1675485623038_1675485623038.jpg",
            "publishedAt": "2023-02-04T04:41:27Z",
            "content": "Garena Free Fire Max redeem code is a 12 digit alphanumeric number consisting of capital letters and numbers. The multiplayer battle royale game is an enhanced version of Free Fire. It debuted in 202… [+1693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "World Cancer Day | Call to make treatment accessible - eNCA",
            "description": "Cancer has stolen many lives. Many only discover they have the disease when it's too late. Today is World Cancer Day and the Health Department will be raisin...",
            "url": "https://www.youtube.com/watch?v=PkLHrSYdelw",
            "urlToImage": "https://i.ytimg.com/vi/PkLHrSYdelw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogZShlMA8=&rs=AOn4CLCmXyvVGopRIBlwjWh4McK5GUCA5Q",
            "publishedAt": "2023-02-04T04:36:39Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Snehashish Roy",
            "title": "‘For gaining wealth…’: Chidambaram terms Kerala budget ‘Faustian bargain’ - Hindustan Times",
            "description": "Senior Congress leader P Chidambaram criticised Kerala government's move to impose cess over several items and suggested to impose ‘notional tax’ to tackle with inflation. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/for-gaining-wealth-chidambaram-terms-kerala-budget-faustian-bargain-101675480644077.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/02/04/1600x900/Congress-7_1666501039325_1666501039325_1675483605061_1675483605061.jpg",
            "publishedAt": "2023-02-04T04:13:01Z",
            "content": "Veteran Congress leader and former Union finance minster P Chidambaram took a jibe at the Communist Party of India (Marxist)-led Kerala government over the state's budget for the fiscal year 2023-24.… [+1611 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": null,
            "title": "Scientist find a dozen new Jupiter moons, gas giant now has most moons in solar system - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/technology/jupiter-new-moons-most-moons-in-solar-system-8422479/",
            "urlToImage": null,
            "publishedAt": "2023-02-04T03:31:19Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today Web Desk",
            "title": "'Why take only the men': Women protest against arrests as Assam cracks down on child marriage - India Today",
            "description": "Women in Assam have come out in protest as the Assam government began a massive crackdown on child marriages with the arrest of over 2,000 people on Friday.",
            "url": "https://www.indiatoday.in/india/story/why-take-only-the-men-women-protest-against-arrests-as-assam-cracks-down-on-child-marriage-2330300-2023-02-04",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/himanta_0-sixteen_nine.jpg?VersionId=ovMh8zoIDPMWb7TNoVCV4UkBUNgoxS1n",
            "publishedAt": "2023-02-04T03:21:10Z",
            "content": "By India Today Web Desk: Women have come out in large numbers to protest against the arrest of their husbands and sons as the Assam government launched a massive crackdown on child marriages.\r\nThe st… [+1797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "After US, 2nd Chinese Balloon Spotted In Latin America: Pentagon - NDTV",
            "description": "A Chinese spy balloon was flying over Latin America, the Pentagon said Friday night, one day after a similar craft was seen over US skies.",
            "url": "https://www.ndtv.com/world-news/us-says-second-chinese-spy-balloon-spotted-in-latin-america-3752020",
            "urlToImage": "https://c.ndtvimg.com/2023-02/v6lsioag_chinese-spy-balloon-over-us_625x300_03_February_23.jpg",
            "publishedAt": "2023-02-04T03:07:00Z",
            "content": "This comes a day after a similar craft was seen over US skies. (File)\r\nWashington: A Chinese spy balloon has been spotted over Latin America, the Pentagon said Friday, a day after a similar craft was… [+4939 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Tushar Tere",
            "title": "Border-Gavaskar Trophy: Barodian teaboy's spin casts spell on Australia batsmen - Times of India",
            "description": "Cricket News: As part of a ‘secret' training camp in Alur, the Aussies have flown in 21-year-old spinner and former tea seller, Mahesh Pithiya, a rare Ravichandran",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/australia-in-india/border-gavaskar-trophy-barodian-teaboys-spin-casts-spell-on-australia-batsmen/articleshow/97593941.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-97593875,width-1070,height-580,imgsize-60694,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-02-04T03:07:00Z",
            "content": "Imitators, doctored pitches and throwdown specialists ... get an exclusive inside look at the lengths Australia are https://t.co/5ooyMwZbAx\r\n— cricket.com.au (@cricketcomau) 1675387557000"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Shishir Gupta",
            "title": "Doval to talk blunt to UK NSA over Sikh radicalisation - Hindustan Times",
            "description": "National Security Advisor Ajit Doval is expected to convey India's serious concerns over the UK turning a deliberate blind eye towards rise of Sikh radicalisation and anti-India sentiments fueled by Pak Muslims in the country. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/security-concerns-trade-to-be-in-focus-as-ajit-doval-meets-uk-nsa-101675478703723.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/02/04/1600x900/nsa_ajit_doval_uk_1675480648850_1675480664973_1675480664973.png",
            "publishedAt": "2023-02-04T02:55:13Z",
            "content": "National security advisor Ajit Doval will today meet his UK counterpart Tim Barrow in London for the annual strategic dialogue in the backdrop of British State broadcaster BBC trying to rake up 2002 … [+3430 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Exposure of banks, financial institutions to Adani Group well within limit: Finance minister Sitharaman - Times of India",
            "description": "India Business News: The Centre on Friday moved to soothe sentiments of investors, with finance minister Nirmala Sitharaman saying the exposure of banks and financial inst",
            "url": "https://timesofindia.indiatimes.com/business/india-business/exposure-of-banks-financial-institutions-to-adani-group-well-within-limit-finance-minister-sitharaman/articleshow/97588714.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-97588718,width-1070,height-580,imgsize-86612,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-02-04T02:53:00Z",
            "content": "Video: Gautam Adani says Interest of investors paramount, everything else secondary, after withdrawing FPO"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Inside the 19-hour meltdown that junked Gautam Adani's share sale - Indiatimes.com",
            "description": "India Business News: Gautam Adani chose to forgo the short-term victory of nailing the follow-on offer of Adani Enterprises to protect his longer term relationships with m",
            "url": "https://timesofindia.indiatimes.com/business/india-business/gautam-adani-hindenburg-research-adani-enterprises-fpo-adani-stocks/articleshow/97593367.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-97593406,width-1070,height-580,imgsize-27782,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-02-04T02:50:00Z",
            "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Arani Basu",
            "title": "Border-Gavaskar Trophy: India focus on sweep shot, ponder over left-handed batting options ahead of Austr - Indiatimes.com",
            "description": "Cricket News: The touring Australia team isn't shying away from making bold statements ahead of the Test series for the Border-Gavaskar Trophy.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/australia-in-india/border-gavaskar-trophy-india-focus-on-sweep-shot-ponder-over-left-handed-batting-options-ahead-of-australia-tests/articleshow/97592987.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-97592963,width-1070,height-580,imgsize-79096,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-02-04T02:35:00Z",
            "content": "Border-Gavaskar Trophy: Barodian teaboy's spin casts spell on Australia batsmenAs part of a secret' training camp in Alur, the Aussies have flown in 21-year-old spinner and former tea seller, Mahesh … [+104 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Action Might Not Be Palatable\": Supreme Court Warns Centre Amid Tussle - NDTV",
            "description": "The Centre on Friday gave an assurance that the Collegium's pending recommendations for the elevation of five high court judges to the Supreme Court will be cleared soon.",
            "url": "https://www.ndtv.com/india-news/supreme-court-warns-centre-amid-tussle-action-might-not-be-palatable-3750935",
            "urlToImage": "https://c.ndtvimg.com/2020-03/voni7s98_supreme-court-new_650x400_12_March_20.jpg",
            "publishedAt": "2023-02-04T02:26:01Z",
            "content": "Earlier, the Supreme Court had said the Centre should appoint judges within three-four weeks\r\nNew Delhi: Facing some tough questions from the Supreme Court, the Centre on Friday gave an assurance tha… [+6777 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "PTI",
            "title": "Cartels help Indians to illegally cross into US for $21,000: Report - Hindustan Times",
            "description": "The minimum being charged by a cartel for a foreign national to illegally come into the United States, through Mexico, is USD 7,000 | World News",
            "url": "https://www.hindustantimes.com/world-news/cartels-help-indians-to-illegally-cross-into-us-for-21-000-report-101675472833100.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/02/04/1600x900/A-Gujarati-man-died-on-December-14-after-he-fell-o_1671873037887_1675472885729_1675472885729.jpg",
            "publishedAt": "2023-02-04T01:35:19Z",
            "content": "Criminal transnational organisations called cartels on an average charge USD 21,000 from Indians to help them illegally cross over the American border, an Arizona Sheriff has told lawmakers here.\r\nTh… [+1100 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Insider India"
            },
            "author": "Morgan McFall-Johnsen",
            "title": "The green comet and Mars will appear side-by-side next weekend. Spot them together in the sky. - Business Insider India",
            "description": "A green comet and Mars will appear side-by-side in the night sky on February 10 and 11.It's a good opportunity to spot the comet in the early evening, maybe",
            "url": "https://www.businessinsider.in/science/news/the-green-comet-and-mars-will-appear-side-by-side-next-weekend-spot-them-together-in-the-sky-/articleshow/97592454.cms",
            "urlToImage": "https://www.businessinsider.in/photo/97592454/the-green-comet-and-mars-will-appear-side-by-side-next-weekend-spot-them-together-in-the-sky-.jpg?imgsize=110056",
            "publishedAt": "2023-02-04T00:57:00Z",
            "content": "A green comet shooting past Earth for the first time since the Ice Age is about to skim right past Mars in the night sky.\r\nThe green comet and the red planet will be visible side-by-side across the N… [+1967 chars]"
        }
    ]

    static defaultProps= {
        country: 'in',
        category: 'general'
        }
        
    static propTypes= {
        country: PropTypes.string,
        category: PropTypes.string
        }  

    constructor()
    {
        super();
        this.state = {
             articles: this.articles,
             loading: false,
             page: 1
    }
}
    
 async componentDidMount(){
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bc83727839f452c9ce13a2c15caa517`;
let data = await fetch(url);
let parsedData = await data.json();
this.setState({articles: parsedData.articles});
 }

handelNextClick = async ()=>
{
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bc83727839f452c9ce13a2c15caa517&page=${this.state.page + 1}`;
let data = await fetch(url);
let parsedData = await data.json();
this.setState({
    articles: parsedData.articles, page:this.state.page +1});


}

handelPrevClick = async ()=>
{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bc83727839f452c9ce13a2c15caa517&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
         page:this.state.page - 1});
    
   
}




      render() {
    return (
        
      <div className='container mx-2 my-3'>
        <h2 className='text-center'>NewsMoney-Top Headline</h2>
        
        <div className='row'>

        {this.state.articles.map((element)=>{

                return <div className='col-md-4' key={element.url}>
                <NewsItem  title={element.title} description={element.description} url={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
            
            })}

    

        <div className="container d-flex justify-content-between">

        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handelPrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-primary"  onClick={this.handelNextClick}>Next &rarr;</button>
        </div>

        
        

      </div>
      </div>

      
    )
  }
}
