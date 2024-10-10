import {createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/home/home';
import WorksPage from './pages/works';
import FAQsPage from './pages/faqs';
import BookCallPage from './pages/bookCall';
import Services from './pages/services';
import ErrorPage from './pages/error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/works',
        element: <WorksPage />
    },
    {
        path: '/faqs',
        element: <FAQsPage/>
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/book-a-call',
        element: <BookCallPage />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])