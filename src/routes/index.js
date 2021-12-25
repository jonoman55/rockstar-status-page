import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import ServicePage from '../pages/ServicePage';
import AllStatusesPage from '../pages/AllStatusesPage';
import ServicesPage from '../pages/ServicesPage';
import StatusesPage from '../pages/StatusesPage';
import ApiStatusPage from '../pages/ApiStatusPage';
import Layout from '../components/layout/Layout';

export default function Routes() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path='/' element={<Navigate to='/all' />} />
                    <Route path='/all' element={<AllStatusesPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/statuses' element={<StatusesPage />} />
                    <Route path='/api' element={<ApiStatusPage />} />
                    <Route path='/service/:id' element={<ServicePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Switch>
            </Layout>
        </Router>
    );
};