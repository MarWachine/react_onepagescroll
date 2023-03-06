import { React, useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

function Nav(props) {

    const [activeSection, setActiveSection] = useState(1)
    const [barHeight, setBarHeight] = useState(0)
    const NAV_MARKS = [25, 50, 75]
    const barRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, [])

    useEffect(() => {
        barRef.current.setAttribute('style', `height: ${barHeight}%`)
    },[barHeight])


    function getScrollPercent() {
        let max = document.body.offsetHeight - window.innerHeight
        let scrollPercent = window.pageYOffset / max * 100;
        return scrollPercent
    }

    function scrollHandler() {
        let scrollPerc = getScrollPercent();
        setBarHeight(~~(scrollPerc + 1));
        if (scrollPerc < NAV_MARKS[0]) setActiveSection(1)
        else if (scrollPerc >= NAV_MARKS[0] && scrollPerc < NAV_MARKS[1]) setActiveSection(2)
        else if (scrollPerc >= NAV_MARKS[1] && scrollPerc <= NAV_MARKS[2]) setActiveSection(3)
        else setActiveSection(4)
    }

    return (
        <>
            <div className="navBar">
                <div ref={barRef} className="bar">
                </div>
            </div>
            <div id="divNav">
                <ul id="ulNav">
                    <li className="liNav">
                        <HashLink smooth to="/#" className={`${activeSection === 1 ? "active" : undefined}`}>
                            Start
                        </HashLink>
                    </li>
                    <li className="liNav">
                        <HashLink smooth to="/#about" className={`${activeSection === 2 ? "active" : undefined}`}>
                            About
                        </HashLink>
                    </li>
                    <li className="liNav">
                        <HashLink smooth to="/#projects" className={`${activeSection === 3 ? "active" : undefined}`}>
                            Projects
                        </HashLink>
                    </li>
                    <li className="liNav">
                        <HashLink smooth to="/#contact" className={`${activeSection === 4 ? "active" : undefined}`}>
                            Contact
                        </HashLink>
                    </li >
                </ul >
            </div >
        </>
    );
}

export default Nav;