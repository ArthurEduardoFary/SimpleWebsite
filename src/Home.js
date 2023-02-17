import Carousel from 'react-bootstrap/Carousel';
import firstimage from './img/one.jpg'
import secondimage from './img/two.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useTranslation } from 'react-i18next';

const Home = () => {
    
    const { t, i18n } = useTranslation();

    return (  
    <div className="home">
        <div className='w-100'>
            
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    style={{ objectFit: 'cover',  filter: 'contrast(80%) brightness(40%)' }}
                    height={window.innerHeight/1.2}
                    className="d-block w-100"
                    src={firstimage}
                    alt="Image One"
                />
                <Carousel.Caption style={{top: '40%'}}>
                    <h3>{t('hello')}</h3>
                    <h1>{t('iam')}</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img style={{ objectFit: 'cover', filter: 'contrast(80%) brightness(40%)'}}
                    height={window.innerHeight/1.2}
                    className="d-block w-100"                  
                    alt="Image Two"
                    src={secondimage}/>
                <Carousel.Caption style={{top: '40%'}}>
                    <h3>{t('iam2')}</h3>
                    <h1>Full-Stack</h1>
                    <h3>{t('dev')}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <Container id='homecontainer'>

            <Row>
                <Col>
                    <h1 className='text-center mt-5 pt-5' style={{fontSize: '50pt'}}>{t('aboutme')}</h1>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col xs={12} md={4} >
                    <div style={{backgroundColor: 'red'}} className='text-md-end text-center mb-md-0 mb-5'> aqui vai uma foto mto massa</div>
                </Col>
                <Col xs={12} md={8}>
                    <div className='text-md-start text-center'> 
                    <p>My name is Arthur, I am a junior Full-Stack developer 
                        with a on-going bachelors in Informational Systems. 
                    </p>
                    <p>
                        I would describe myself as a coding enthusiast who really enjoys developping stuff. 💻
                    </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <h1 className='text-center mt-5 pt-5' style={{fontSize: '50pt'}}>{t('intrestedin')}</h1>
                </Col>
            </Row>

            <Row>
                <Col></Col>
            </Row>
        </Container>

        </div>
    </div>
    );
}
export default Home;