import React from 'react';
import Header from './header/header.jsx';
import Categories from './main/categories/categories';
import Recommendations from './main/recommendations/recommendations';
import Examples from './main/examples/examples';
import Visualization from  './main/visualization/visualization';
import Clients from './main/clients/clients';
import Presentation from './main/presentation/presentation';
import Scheme from './main/scheme/scheme';
import Questions from './main/questions/questions';
import Branding from './header/branding/branding';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo,faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo,faCheck);

class MyApp extends React.Component{
    render() {
        return(
            <div>
               {/* <Header/>*/}
                <main>
                    <Branding/>
                    <Categories/>
                    <Recommendations/>
                    <Examples/>
                    <Questions/>
                    {/*<Visualization/>
                    <Clients/>
                    <Presentation/>
                    <Scheme/>
                    <Questions/>*/}
                </main>
            </div>
        )
    }
}

export  default  MyApp;