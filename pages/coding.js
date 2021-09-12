//React
import { useState } from 'react';
//NextJS
import Image from 'next/image';
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
//Components
import ProjectAccordion from '../components/ProjectAccordion';
import Technologies from '../components/Technologies';
//Certificate images
import fcc_html_css from '../images/fcc_html_css_certificate.png';
import fcc_js from '../images/fcc_js_certificate.png';
import udemy_nodejs from '../images/udemy_nodejs_certificate.jpg';
import udemy_reactjs from '../images/udemy_reactjs_certificate.jpg'

const Coding = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState();

    const handleShow = (selected) => {
        setSelectedImage(selected);
        setFullscreen('');
        setShow(true);
    }

    return (
        <Container className="d-flex flex-column align-items-center min-vh-100">
            <h1 className="p-2">Coding</h1>
    
            {/* Repository section */}
            <section className="mt-3 w-100">
                <ProjectAccordion />
            </section>

            {/* Technologies section */}
            <section className="mt-5 w-100">
                <Technologies />
            </section>

            {/* Certifications section */}
            <section className="m-4 w-100">
                <h2 className="p-2">Certifications</h2>
                <div className="d-flex flex-wrap justify-content-around">
                    <Image className="my-3 zoom-zoom" onClick={ () => handleShow(fcc_html_css) } src={ fcc_html_css } height={ 225 } width={ 300 } />
                    <Image className="my-3 zoom-zoom" onClick={ () => handleShow(fcc_js) } src={ fcc_js } height={ 225 } width={ 300 } />
                    <Image className="my-3 zoom-zoom" onClick={ () => handleShow(udemy_nodejs) } src={ udemy_nodejs } height={ 225 } width={ 300 } />
                    <Image className="my-3 zoom-zoom" onClick={ () => handleShow(udemy_reactjs) } src={ udemy_reactjs } height={ 225 } width={ 300 } />
                </div>
            </section>

            {/* Modal used for pop up images to view a whole selected photo. */}
            <Modal className="d-flex" fullscreen={ fullscreen } onHide={ () => setShow(false) } size="lg" show={ show }>
                <Modal.Header className="bg-dark bg-gradient" closeButton closeVariant="white" />
                <Modal.Body className="bg-dark bg-gradient"><Image src={ selectedImage } /></Modal.Body>
            </Modal>
        </Container>
    )
}

export { Coding as default }