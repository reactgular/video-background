import React from 'react';
import {VideoBackground} from './VideoBackground';
import {WebsiteOverlay} from './WebsiteOverlay';

function App() {
    return (
        <div className="flex relative w-full h-full">
            <WebsiteOverlay/>
            <VideoBackground/>
        </div>
    );
}

export default App;
