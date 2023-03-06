import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefautLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefautLayout;
