import styled from 'styled-components'
import Skills from '../components/Skills'

const Img = styled.img`
    width:100%;
    margin:5px;
`
const Container = styled.div`
`
const Button = styled.button`
    width:100px;
    height:30px;
    font-size:20px;
    margin-top:20px;
`
const Content = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
`

const Left = styled.div`
    width:60%;
    background:blues;
`
const Right = styled.div`
    width:30%;
`
export const beSocial =
    <Container>
        <h1>BeSocial</h1>
        <br />
        <Content>
            <Left>
                <p>
                    👉🏻 beSocial is a platform for social media and blogging.
                    <br />
                    👉🏻 Posts (including photographs) can be shared by users.
                    <br />
                    👉🏻 Users have the option of changing their display image (dp).
                    <br />
                    👉🏻 Users can choose to follow or unfollow other users.
                    <br />
                    👉🏻 Users who are logged in can like and comment on posts.
                    <br />
                    👉🏻 Users may look for other users using their user id.
                    <br />
                    👉🏻 Users may change their bio, name, age, and other basic information.
                    <br />
                    👉🏻 Users are not permitted to share posts that include profanity.
                    <br />
                </p>
                <br />
                <Skills array={['Nodejs', 'Expressjs', 'Mongodb', 'JWT', 'EJS', 'HTML', 'CSS', 'JS']} />
                <Button>Code</Button> &nbsp; <Button>Live</Button>
            </Left>
            <Right>
                <Img src="https://rudrapratap.netlify.app/assests/bSocialLogo.PNG" />
                <br />
                <Img src='https://rudrapratap.netlify.app/assests/besocial/homepage.PNG' />
            </Right>
        </Content>
    </Container> 


export const liveType =
    <Container>
        <h1>LiveType</h1>
        <br />
        <Content>
            <Left>
                <p>
                    👉🏻 beSocial is a platform for social media and blogging.
                    <br />
                    👉🏻 Posts (including photographs) can be shared by users.
                    <br />
                    👉🏻 Users have the option of changing their display image (dp).
                    <br />
                    👉🏻 Users can choose to follow or unfollow other users.
                    <br />
                    👉🏻 Users who are logged in can like and comment on posts.
                    <br />
                    👉🏻 Users may look for other users using their user id.
                    <br />
                    👉🏻 Users may change their bio, name, age, and other basic information.
                    <br />
                    👉🏻 Users are not permitted to share posts that include profanity.
                    <br />
                </p>
                <br />
                <Skills array={['Nodejs', 'Expressjs', 'Socket.io', 'EJS', 'HTML', 'CSS', 'JS']} />
                <Button>Code</Button> &nbsp; <Button>Live</Button>
            </Left>
            <Right>
                <Img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIlQiNrsfEBRO6AIwVFWpm8ODUNLChVrudun6lt8dcnClUWI0inwLCivb_1rMc3W0m2ojMMdZ8IWcxpM7BfnOpnY8tYOpapxPAXTFogZJHNv68ineoj56i0Jtu13wniB04qQx-egQ5bdU67_pvlY7_w-YgoiB2WK65iKVbC_Wbd8wGdGu9FVJEcbaIdw/w640-h402/liveType.PNG" />
              
            </Right>
        </Content>
    </Container> 



export const bookMazter =
    <Container>
        <h1>BookMazter</h1>
        <br />
        <Content>
            <Left>
                <p>
                    👉🏻 Search books of different genres and save into your account.
                    <br />
                    👉🏻 Posts (including photographs) can be shared by users.
                    <br />
                    👉🏻 Users have the option of changing their display image (dp).
                    <br />
                    👉🏻 Users can choose to follow or unfollow other users.
                    <br />
                    👉🏻 Users who are logged in can like and comment on posts.
                    <br />
                    👉🏻 Users may look for other users using their user id.
                    <br />
                    👉🏻 Users may change their bio, name, age, and other basic information.
                    <br />
                    👉🏻 Users are not permitted to share posts that include profanity.
                    <br />
                </p>
                <br />
                <Skills array={['Nodejs', 'Expressjs', 'Socket.io', 'EJS', 'HTML', 'CSS', 'JS']} />
                <Button>Code</Button> &nbsp; <a href='https://bookmazter.onrender.com/' target='_blank'><Button>Live</Button></a> 
            </Left>
            <Right>
                <Img src="https://static.vecteezy.com/system/resources/thumbnails/010/259/436/small/library-3d-illustration-png.png" />
               
            </Right>
        </Content> 
    </Container> 