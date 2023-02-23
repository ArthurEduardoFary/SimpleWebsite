import Carousel from 'react-bootstrap/Carousel';
import firstimage from './img/one.jpg'
import secondimage from './img/two.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import myself from './img/eu.png'

import pythonlogo from './img/pythonlogo.svg'
import jslogo from './img/jslogo.svg'
import reactlogo from './img/reactlogo.svg'
import htmllogo from './img/htmllogo.svg'
import phplogo from './img/phplogo.svg'
import csharplogo from './img/csharplogo.svg'


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
                    <div className='text-md-end text-center mb-md-0 mb-5'> <img src={myself} alt="Eu"  style={{borderRadius: '50%'}} className='w-75'/></div>
                </Col>
                <Col xs={12} md={8}>
                    <div className='text-md-start text-center mt-md-5 mt-0 pt-md-5 pt-0'> 
                <h1>{t('aboutme1')}
                    </h1>
                <h1>
                    {t('aboutme2')}
                </h1>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <h1 className='text-center mb-lg-5  my-2 py-5' style={{fontSize: '50pt'}}>{t('intrestedin')}</h1>
                </Col>
            </Row>

            <Row className='justify-content-center mx-lg-5 mb-2 mx-0'>
                <Col xs={6} md={2} align='center' className='mb-4' >
                    <div className='p-5' id='sqr' style={{backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative'}} >
                        <img className='w-75' src={jslogo} />
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><h1>JavaScript</h1></div>
                    </div>
                </Col>
                <Col xs={6} md={2} align='center' className='mb-4'>
                    <div className='p-5' id='sqr' style={{backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative'}}>
                        <img className='w-75' src={pythonlogo}></img>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><h1>Python</h1></div>
                    </div>
                </Col>
                <Col xs={6} md={2} align='center' className='mb-4'>
                    <div className='d-flex justify-content-center h-100 p-5'  id='sqr' style={{backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative'}} >
                        <img className='w-75' src={reactlogo}></img>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><h1>React</h1></div>
                    </div>
                </Col>
                <Col xs={6} md={2} align='center' className='mb-4'>
                    <div className='p-5' id='sqr' style={{backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative'}}>
                        <img className='w-75' src={phplogo}></img>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><h1>PHP</h1></div>
                    </div>
                </Col>
                <Col xs={6} md={2} align='center' className='mb-4'>
                    <div className='p-5' id='sqr' style={{backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative'}}>
                        <img className='w-75' src={csharplogo}></img>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><h1>C#</h1></div>
                    </div>
                </Col>
                <Col xs={6} md={2} align='center'>
                    <div className='p-5' id='sqr' style={{backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative'}}>
                        <img className='w-75' src={htmllogo}></img>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><h1>HTML5</h1></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1 className='text-center mb-lg-5  my-2 py-5' style={{fontSize: '50pt'}}>Gostou? Me chama!</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p>eu nao sei o que eu coloco aqui</p>
                </Col>
            </Row>
        </Container>

        </div>
    </div>
    );
}
export default Home;