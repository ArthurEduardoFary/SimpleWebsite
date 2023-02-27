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

import whatsappsvg from './img/whatsapp.svg'
import githubsvg from './img/github.svg'
import linkedinsvg from './img/linkedin.svg'
import instagramsvg from './img/instagram.svg'

import { useTranslation } from 'react-i18next';

function Home() {

    const { t, i18n } = useTranslation();

    return (
        <div className="home">
            <div className='w-100'>

                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            style={{ objectFit: 'cover', filter: 'contrast(80%) brightness(40%)' }}
                            height={window.innerHeight / 1.2}
                            className="d-block w-100"
                            src={firstimage}
                            alt="Image One"
                        />
                        <Carousel.Caption style={{ top: '40%' }}>
                            <h3>{t('hello')}</h3>
                            <h1>{t('iam')}</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img style={{ objectFit: 'cover', filter: 'contrast(80%) brightness(40%)' }}
                            height={window.innerHeight / 1.2}
                            className="d-block w-100"
                            alt="Image Two"
                            src={secondimage} />
                        <Carousel.Caption style={{ top: '40%' }}>
                            <h3>{t('iam2')}</h3>
                            <h1>Full-Stack</h1>
                            <h3>{t('dev')}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Container id='homecontainer'>

                    <Row>
                        <Col>
                            <h1 className='text-center mt-5 pt-5' style={{ fontSize: '50pt' }}>{t('aboutme')}</h1>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col xs={12} md={4} >
                            <div className='text-md-end text-center mb-md-0 mb-5'> <img src={myself} alt="Eu" style={{ borderRadius: '50%' }} className='w-75' /></div>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className='text-md-start text-center text-justify mt-md-5 mt-2 pt-md-5 pt-0'>
                                <h1 id='abm'>{t('aboutme1')}
                                </h1>
                                <h1 id='abm'>
                                    {t('aboutme2')}
                                </h1>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1 className='text-center mb-5  my-2 py-5' style={{ fontSize: '50pt' }}>{t('intrestedin')}</h1>
                        </Col>
                    </Row>

                    <Row className='justify-content-center mx-lg-5 mb-2 mx-0'>
                        <Col xs={6} md={2} align='center' className='mb-4' >
                            <div className='p-5 ' id='sqr' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }} >
                                <img className='w-75' src={jslogo} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><h1 className='fs-1'>JavaScript</h1></div>
                            </div>
                        </Col>
                        <Col xs={6} md={2} align='center' className='mb-4'>
                            <div className='p-5' id='sqr' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <img className='w-75' src={pythonlogo}></img>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><h1 className='fs-1'>Python</h1></div>
                            </div>
                        </Col>
                        <Col xs={6} md={2} align='center' className='mb-4'>
                            <div className='d-flex justify-content-center h-100 p-5' id='sqr' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }} >
                                <img className='w-75' src={reactlogo}></img>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><h1 className='fs-1'>React</h1></div>
                            </div>
                        </Col>
                        <Col xs={6} md={2} align='center' className='mb-4'>
                            <div className='p-5' id='sqr' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <img className='w-75' src={phplogo}></img>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><h1 className='fs-1'>PHP</h1></div>
                            </div>
                        </Col>
                        <Col xs={6} md={2} align='center' className='mb-4'>
                            <div className='p-5' id='sqr' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <img className='w-75' src={csharplogo}></img>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><h1 className='fs-1'>C#</h1></div>
                            </div>
                        </Col>
                        <Col xs={6} md={2} align='center'>
                            <div className='p-5' id='sqr' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <img className='w-75' src={htmllogo}></img>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><h1 className='fs-1'>HTML5</h1></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1 className='text-center mb-5  my-2 py-5' style={{ fontSize: '50pt' }}>{t('certificates')}</h1>
                        </Col>
                    </Row>

                    <Row className='mx-lg-5 px-5'>
                        <Col xs={12} md={4} align='center' className='mb-3'>
                            <div className='p-5' id='sqr2' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <h3><strong>{t('webprogrammer')}</strong></h3>
                                <h4>Pronatec</h4>
                                <h5>HTML · PHP · JavaScript · CSS</h5>
                                <h6>2021</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={4} align='center' className='mb-3'>
                            <div className='p-5' id='sqr2' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <h3><strong>{t('english')}</strong></h3>
                                <h4>KNN Professional Course</h4>
                                <h5>Intermediate Level</h5>
                                <h6>2020</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={4} align='center' className='mb-3'>
                            <div className='p-5' id='sqr2' style={{ backgroundColor: 'rgba(33,33,33,.25)', borderRadius: '30px', position: 'relative' }}>
                                <h3><strong>{t('oop')}</strong></h3>
                                <h4>Fundação Bradesco</h4>
                                <h5>Python</h5>
                                <h6>2022</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container id='footercontainer' className='mt-lg-5 mt-2 py-4 d-block text-center justify-content-center'>
                    
                    <Row className='pb-3 text-center justify-content-center' >
                        <Col md={2}>
                           
                            <div id='smallcontats' >
                                <a href={'http://wa.me/5547996762167?text=' + t('whatsapp')} target='_blank' className='px-2'>
                                    <img width='35vw' src={whatsappsvg} alt="whatsapp" />
                                </a>
                                <a href="https://github.com/ArthurEduardoFary/" target='_blank' className='px-2'>
                                    <img width='35vw' src={githubsvg} alt="github" />
                                </a>
                                <a href="https://www.linkedin.com/in/arthur-eduardo-fary-199346213/" target='_blank' className='px-2'>
                                    <img width='35vw' src={linkedinsvg} alt="github" />
                                </a>
                                <a href="https://www.instagram.com/arthurfary/" target='_blank' className='px-2'>
                                    <img width='35vw' src={instagramsvg} alt="github" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row xs={12}>
                        <Col>
                            <h6>{t('madewith')}</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Home;