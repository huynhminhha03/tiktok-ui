import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { publicRoutes } from './routes';
import { DefautLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefautLayout
                            if(route.layout) {
                                Layout = route.layout
                            } else if (Layout === null) {
                                Layout = DefautLayout;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
