import Card from '../../components/Card/Card';
import * as Styled from './Home.styles';
import { Container, Row, Col } from 'react-grid-system';
import Info from '../../components/Info/Info';

const data = [
    {
        title: "What's PepeHands?",
        text: `Gonna give you a real answer: PepeHands is an emote. Either BTTV or FFZ, not sure
        which one. Literally shows a crying Pepe that holds up his hands towards the sky,
        like someone who just lost a family member and asks "why God why?". That's basically
        it. Thank me later jabroni.`,
    },
    {
        title: "What's MonkaS?",
        text: `The earliest known archived 4chan thread in which the sweating, nervous Pepe the Frog illustration appeared was submitted to the /lit/ (literature) board on July 16th, 2011.[6] On March 16th, 2016, Twitch user Monkasen (then MonkaSenpai) uploaded the monkaS emote to the Better Twitch TV extension (shown below).* The emote's name is derived from the uploader, and stands for 'monkaScared'. On February 17th, 2017, Redditor kucykzaglady submitted a picture of the emote to the /r/forsen[3] subreddit. That month, monkaS was added to the TwitchQuotes[4] database. On April 1st, Twitter user @nanilul[7] attempted to place a monkaS emote on Reddit's /r/place pixel art canvas[5] (shown below). On April 10th, Redditor Rekipp submitted a post asking "What does slang word 'monkas' mean?" to /r/OutOfTheLoop. Many variations of the emote have been created for use as emotes on Twitch chat, including monkaGIGA[8] (shown below, first from left), monkaThink (shown below, second from left), monkaW (shown below,third from left) and monkaOMEGA (shown below, fourth from left). As of mid-February 2018, 11 variations of the emote were ranked among the most used Twitch emotes according to Stream Elements.`,
    },
    {
        title: "What's REEEEEEE?",
        text: `"REEEEEEE" is an onomatopoeic expression of intense rage or frustration typically associated with the Angry Pepe character and used by those who frequent the /r9k/ board on 4chan. The expression is often associated with the Autistic Screeching meme, however it is intended to represent the unique croak produced by several species of frogs when agitated. Additionally, the expression has been combined with the word repost to call out duplicate posts on Reddit, Imgur and other sites.`,
    },
    {
        title: "What's POGGERS?",
        text: `The emote, stylized as "POGGERS" was submitted to Better Twitch TV[1] on February 23rd, 2017 (shown below). As of October 2020, it is used by over 160,000 Twitch channels.`,
    },
    {
        title: "What's Pepe Punch?",
        text: `Pepe Punch, also known as Punching Pepe, is a depiction of Pepe the Frog winding up a punch aimed at the screen from the perspective of the person viewing the image. The face of Pepe in this version also features the use of Smug Frog and shares similarities to Welcome To The Family, Son redraws featuring the character. Typically, memes using this Pepe variant revolve around him punching either the screen or the subject of the caption/creator. As a reaction image, Pepe Punch is often used in comments as a way to imply punching the original poster.`,
    },
];

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <Styled.Home>
            <Info margin='0 0 10px 0'>react-grid-system w/ card of the same height</Info>
            <Container
                fluid
                style={{ padding: 0, width: 'calc(100% + 20px)', transform: 'translateX(-10px)' }}
            >
                <Row gutterWidth={0}>
                    {Array.from(Array(data.length).keys()).map(key => (
                        <Col key={key.toString()} lg={3} md={4} sm={6} xs={12}>
                            <div className='card-container'>
                                <Card title={data[key].title} text={data[key].text} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Styled.Home>
    );
};

export default Home;
