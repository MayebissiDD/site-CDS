import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTitle from '../components/PageTitle';
import WhatsAppBubble from '../components/WhatsAppBubble';
import Loader from '../components/Loader';
import NotFound404 from '../components/NotFound404';
import ServerError500 from '../components/ServerError500';
import CookieBanner from '../components/CookieBanner';

const Home = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/Home')), 1500);
    });
});

const About = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/About')), 1500);
    });
});

// const Blog = lazy(() => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(import('../views/Blog')), 1500);
//     });
// });

const Contact = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/Contact')), 1500);
    });
});

const Portfolio = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/Portfolio')), 1500);
    });
});

const Services = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/Services')), 1500);
    });
});

const RequestQuoteForm = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/RequestQuote')), 1500);
    });
});

const WebMobile = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/WebMobile')), 1500);
    });
});

const MarketingDigital = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/MarketingDigital')), 1500);
    });
});

const Infrastructures = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/Infrastructures')), 1500);
    });
});

const ArchivesNumeriques = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/ArchivagesNumerique')), 1500);
    });
});

const MaintenanceSupport = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/MaintenanceSupport')), 1500);
    });
});

const SecuriteWebReseaux = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/SecuriteWebReseaux')), 1500);
    });
});

const Formation = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/Formation')), 1500);
    });
});

const RecrutementCongoDigitalJob = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../views/services/Recrutement')), 1500);
    });
});

function MainNav() {
    
    return (
        <Router>
            <PageTitle />
            <Suspense fallback={<Loader />}>
                <CookieBanner/>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    {/* <Route path='/blog' element={<Blog />} /> */}
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/request-quote' element={<RequestQuoteForm />} />
                    <Route path='/services/web-mobile' element={<WebMobile />} />
                    <Route path='/services/marketing-digital' element={<MarketingDigital />} />
                    <Route path='/services/infrastructures' element={<Infrastructures />} />
                    <Route path='/services/archives-numeriques' element={<ArchivesNumeriques />} />
                    <Route path='/services/maintenance-support' element={<MaintenanceSupport />} />
                    <Route path='/services/securite-web-reseaux' element={<SecuriteWebReseaux />} />
                    <Route path='/services/formation' element={<Formation />} />
                    <Route path='/services/recrutement' element={<RecrutementCongoDigitalJob />} />
                    <Route path='/500' element={<ServerError500 />} />
                    <Route path='*' element={<NotFound404 />} />
                </Routes>
                <WhatsAppBubble />
            </Suspense>
        </Router>
    );
}

export default MainNav;
