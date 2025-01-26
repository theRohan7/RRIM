import { useState } from "react";
import { Book, BookCopy, CalendarDays, GalleryHorizontalEnd, Globe, Info, Lightbulb, NotebookPen, SlidersVertical, Sparkles, TrendingUp, Zap } from 'lucide-react';

function Sidebar(){
    const [isExpanded, setIsExpanded] = useState(false);

    const navItems = [
        {
            icon: <Sparkles />,
            label: 'Generate Post',
            href: '/generate-post'
        },
        {
            icon: <Lightbulb  />,
            label: 'Ideas Generator',
            href: '/generate-post'
        },
        {
            icon: <GalleryHorizontalEnd />,
            label: 'Caraousel Maker',
            href: '/generate-post'
        },
        {
            icon: <Book />,
            label: 'Posts',
            href: '/generate-post'
        },
        {
            icon: <TrendingUp />,
            label: 'Content Impression',
            href: '/generate-post'
        },
        {
            icon: <BookCopy  />,
            label: 'Post for you',
            href: '/generate-post'
        },
        {
            icon: <CalendarDays  />,
            label: 'Schedule',
            href: '/generate-post'
        },
    ]
    
    return(
        <nav className='nav-main'
        >
            <div className="nav-header">
                <button className="header-button" > <NotebookPen color="#000" className="icon" /> Write Post </button>
                <section className="nav-items">
                 {navItems.map(item => (
                    <button key={item.label}>
                        <span className="icon" style={{color: '#000'}}>{item.icon}</span>
                        {item.label}
                    </button>
                 ))
                 }   
                </section>
            </div>
            <div className="nav-footer">
                <button>
                    <span><SlidersVertical className="icon" style={{color: '#000'}} /></span>
                    Preference
                </button>
                <button>
                    <span><Globe className="icon" style={{color: '#000'}} /></span>
                    Feature request
                </button>
                <div className="nav-footer-container">
                    <p>Words generated <Info className="icon" style={{color: '#000', width: '1rem', height: '1rem'}} />   <span>12.5k/50k</span></p>
                    <div className="progress-bar" ></div>
                    <p>Monthly usage resets in 29 days</p>
                    <button><Zap className="icon" style={{color: '#000', width: '1rem', height: '1rem'}} />Upgrade Plan</button>
                </div>

            </div>
            
        </nav>
    )
}

export default Sidebar;
