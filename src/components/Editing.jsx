import { Bold, CalendarMinus2, Files, Gauge, Image, Italic, Library, Paperclip, SendHorizonal, Smile, Sparkle } from 'lucide-react';
import '../CSS/Editing.css'

function Editing() {
    return (
        <section className='editing-container'>
            <div className="editing-header">
                <h3>Write Post</h3>
                <div className='editing-header-right'>
                    <span><Gauge className='icon' style={{ color: '#000', width: '1rem', height: '1rem' }} /> Check Score</span>
                    <img src="" alt="Profile" />
                </div>
            </div>
            <div className="editing-body">
                <div className='editing-tools'>
                    <div className='editing-tools-left-items'>
                        <button><Bold className='editing-icon' /></button>
                        <button><Italic className='editing-icon' /></button>
                        <button><Library className='editing-icon' /></button>
                        <button><Smile className='editing-icon' /></button>
                        <button className='ai-icon' style={{ display: 'flex', alignItems: 'center' }} > <Sparkle className='editing-icon ' />Ai </button>
                    </div>
                    <div className='editing-tools-right-items'>
                        <button> <Files className='editing-icon' /> </button>
                        <button> <Image className='editing-icon' /> </button>
                        <button> <Paperclip className='editing-icon' /> </button>
                    </div>
                </div>
                <div className="editing-textarea">
                    <textarea placeholder='Write your post here...' />
                    <div className="textarea-info">
                        <span>Last Saved at Jan 27th, 2025, 12:00 AM</span>
                        <span>245 characters</span>
                    </div>
                </div>
                <div className="editing-btns">
                    <div><button>Save as Draft</button></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button> <CalendarMinus2 className="editing-icon" style={{ marginRight: '0.5rem' }} /> Schedule</button>
                        <button style={{ color: 'white', backgroundColor: '#0d87cd', borderRadius: '2rem', border: 'none' }} > Publish <SendHorizonal className="editing-icon" style={{ marginLeft: '0.5rem' }} /> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Editing;
