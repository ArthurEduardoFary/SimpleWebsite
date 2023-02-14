import Carousel from 'react-bootstrap/Carousel';
import firstimage from './img/one.png'
import secondimage from './img/two.png'

const Home = () => {

    return (  
    <div className="home">
        <div className='w-100'>
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    style={{ objectFit: 'cover',  filter: 'contrast(80%) brightness(40%)' }}
                    height={window.innerHeight}
                    className="d-block w-100"
                    src={firstimage}
                    alt="Image One"
                />
                <Carousel.Caption style={{top: '40%'}}>
                    <h3>O primeiro</h3>
                    <h1>Banco virtual do Minecraft</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    style={{ objectFit: 'cover', filter: 'contrast(80%) brightness(40%)'}}
                    height={window.innerHeight}
                    className="d-block w-100"
                    src={secondimage}
                    alt="Image Two"
                    
                    
                />
                <Carousel.Caption>
                    <h3>Label for second slide</h3>
                    <p>Sample Text for Image Two</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

        {/* test */}

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum mollitia, dolorum aperiam veritatis autem aut quia voluptatum facilis eaque totam consequuntur similique accusamus veniam, quisquam explicabo velit corporis aspernatur.</p>


    </div>
    );
}
 
export default Home;