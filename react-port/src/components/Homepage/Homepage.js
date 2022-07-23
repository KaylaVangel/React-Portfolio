import React, { useState } from 'react';
// import About from '../Nav/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav';
import Page from '../Page/Page';

const Homepage = () => {
    const [pages] = useState([
        {
            name: "About"
        },
        {
            name: "Contact"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Resume"
        }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);
    return (
        <>
            <Header />
            <Nav pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Nav>
            <div className='container'>
                <Page currentPage={currentPage}> </Page>
            </div>
            <div> <Footer /> </div>
        </>
    );
}


export default Homepage;