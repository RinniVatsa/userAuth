import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import FileUploader from './components/FileUploader';
import './styles.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return ( <
        div className = "container" > {!isAuthenticated ? ( <
                AuthForm setIsAuthenticated = { setIsAuthenticated }
                />
            ) : ( <
                FileUploader / >
            )
        } <
        /div>
    );
};

export default App;