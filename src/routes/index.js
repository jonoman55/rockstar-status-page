import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import AllStatusesPage from '../pages/AllStatusesPage';
import ServicesPage from '../pages/ServicesPage';
import StatusesPage from '../pages/StatusesPage';
import ApiStatusPage from '../pages/ApiStatusPage';
import Layout from '../components/Layout';

export default function Routes() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<Navigate to='/all' />} />
                    <Route path='/all' element={<AllStatusesPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/statuses' element={<StatusesPage />} />
                    <Route path='/api' element={<ApiStatusPage />} />
                    <Route path='/service/:id' element={<ServicePage />} />
                </Switch>
            </Layout>
        </Router>
    );
};