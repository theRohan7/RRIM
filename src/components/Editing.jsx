import { Bold, CalendarMinus2, Files, Gauge, Image, Italic, Library, Link, Paperclip, Plus, SendHorizonal, Smile, Sparkle, Underline, X } from 'lucide-react';
import '../CSS/Editing.css'
import { useText } from '../context/TextContext';
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function Editing() {

    const { text, setText } = useText()
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const editorRef = useRef(null);
    const tooltipRef = useRef(null);

    const handleEditorInit = (evt, editor) => {
        editorRef.current = editor;
        
        editor.dom.addStyle(`
            .mce-content-body p:empty:before {
                content: '+';
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-left: -25px;
                cursor: pointer;
                color: #666;
            }
        `);

        editor.on('SelectionChange', (e) => {
            const selection = editor.selection.getContent();
            if (selection) {
                const bounds = editor.selection.getBoundingClientRect();
                if (bounds) {
                    setTooltipPosition({
                        top: bounds.top - 40,
                        left: bounds.left + (bounds.width / 2) - 50
                    });
                    setShowTooltip(true);
                }
            } else {
                setShowTooltip(false);
            }
        });

       
        editor.on('click', (e) => {
            if (e.target.textContent === '+') {
                const newHeading = '<h2>New Headline</h2>';
                editor.selection.setContent(newHeading);
            }
        });
    };

    const handleUnderline = () => {
        if (editorRef.current) {
            editorRef.current.execCommand('underline');
            setShowTooltip(false);
        }
    };
    const handleBold = () => {
        if (editorRef.current) {
            editorRef.current.execCommand('bold');
            setShowTooltip(false);
        }
    }
    const handleItalic = () => {
        if (editorRef.current) {
            editorRef.current.execCommand('italic');
            setShowTooltip(false);
        }
    }

    const closeTooltip = () => {
        setShowTooltip(false);
    };

    const handleEditorChange = (content) => {
        setText(content);
    };

    const countCharacters = () => {
        return text.length;
    };
    

    return (
        <section className='editing-container'>
            <div className="editing-header">
                <h3>Write Post</h3>
                <div className='editing-header-right'>
                    <span><Gauge className='icon' style={{ color: '#000', width: '1rem', height: '1rem' }} /> Check Score</span>
                    <img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
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
                    <div className="textarea" style={{ position: 'relative' }}>
                        <Editor
                            apiKey="fa1a84d8dzcqt99vj2ubyitff72gtos9pxjnsesd7l8rc4pt"
                            onInit={handleEditorInit}
                            value={text}
                            onEditorChange={handleEditorChange}
                            init={{
                                min_height: 465,
                                max_height: 465,
                                min_width:'100%',
                                max_width:'100%',
                                menubar: false,
                                plugins: ['advlist', 'lists', 'link', 'image', 'charmap', 'preview'],
                                toolbar: false,
                                
                            }}
                        />

                        {showTooltip && (
                            <div
                                ref={tooltipRef}
                                className="formatting-tooltip"
                                style={{
                                    position: 'absolute',
                                    top: tooltipPosition.top,
                                    left: tooltipPosition.left,
                                    zIndex: 1000,
                                    background: 'white',
                                    padding: '0.5rem',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    gap: '0.5rem'
                                }}
                            >
                                <button
                                    onClick={handleUnderline}
                                    className="tooltip-button"
                                    title="Underline"
                                >
                                    <Underline size={16} />
                                </button>
                                <button
                                    onClick={handleBold}
                                    className="tooltip-button"
                                    title="Bold"
                                >
                                    <Bold size={16} />
                                </button>
                                <button
                                    onClick={handleItalic}
                                    className="tooltip-button"
                                    title="Italic"
                                >
                                    <Italic size={16} />
                                </button>
                                <button
                                    onClick={closeTooltip}
                                    className="tooltip-button"
                                    title="Close"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="textarea-info">
                        <span>Last Saved at Jan 27th, 2025, 12:00 AM</span>
                        <span>{countCharacters(text)} characters</span>
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
