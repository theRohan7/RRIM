import { Earth, Forward, MessageCircleMore, MonitorPlay, Send, Smartphone, Tablet, ThumbsUp } from 'lucide-react';
import '../CSS/Preview.css'
import { useText } from '../context/TextContext';
import { useState } from 'react';


function Preview(){
    const { text } = useText();
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeDevice, setActiveDevice] = useState('desktop'); 

    const characterLimits = {
        smartphone: 150,
        tablet: 180,
        desktop: 200
    };

    const getDisplayText = () => {
        const limit = characterLimits[activeDevice];
        if (!isExpanded && text.length > limit) {
        
            return `${text.substring(0, limit)}... <button onclick="setIsExpanded(true)" class="see-more-btn">See more</button>`;
        }
        return text;
    };

    const displayText = getDisplayText();

    return(
        <section className='preview-container'>
           <div className="preview-header">
            <h3>Post Preview</h3>

            <div className="preview-header-right">
                <span>Devices: </span>
                <button 
                    className={`device-btn ${activeDevice === 'smartphone' ? 'active' : ''}`}
                    onClick={() => setActiveDevice('smartphone')}
                >
                    <Smartphone className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} />
                </button>
                <button 
                    className={`device-btn ${activeDevice === 'tablet' ? 'active' : ''}`}
                    onClick={() => setActiveDevice('tablet')}
                >
                    <Tablet className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} />
                </button>
                <button 
                    className={`device-btn ${activeDevice === 'desktop' ? 'active' : ''}`}
                    onClick={() => setActiveDevice('desktop')}
                >
                    <MonitorPlay className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} />
                </button>
            </div>
           </div>

            <div className={`preview-body ${activeDevice}`}>

                <button className='copy-text-btn'>Copy Text</button>

                <div className="preview-content">
                    <div className="content-head">
                        <img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
                        <div className="profile-info">
                            <h4>Cody Fisher</h4>
                            <p>UI/UX Designer | Web & Mobile Design | Front-end | UI Developer</p>
                            <p style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}} >Now . <Earth className='preview-icon' style={{color: '#5f5c5c', width: '1.2rem', height: '1.2rem'}} /> </p>

                        </div>
                    </div>
                    <div className="content-body" 
                        dangerouslySetInnerHTML={{ __html: displayText }}
                        onClick={() => !isExpanded && setIsExpanded(true)}
                    />
                    <div className="body-footer" >
                        <div className='reaction-emojis'>
                        <p>👍</p>
                        <p>👏</p>
                        <p>💝</p>
                        <p>🎆</p>
                        <p style={{fontSize: '1rem', marginLeft: '0.5rem' }} >88</p>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', fontSize: '1rem', fontWeight: 'bold'}}>
                            <p>4 comments</p>
                            <p>.</p>
                            <p>1 repost</p>
                        </div>
                        
                    </div>
        
                    <div className="content-footer">
                        <button><ThumbsUp className='preview-icon'/>Like</button>
                        <button><MessageCircleMore className='preview-icon'/>Comment</button>
                        <button><Forward className='preview-icon'/>Share</button>
                        <button><Send className='preview-icon'/>Send</button>
                    </div>
                </div>

            </div>
        </section>
    )
}   

export default Preview;
