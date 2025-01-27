import { MonitorPlay, Smartphone, Tablet } from 'lucide-react';
import '../CSS/Preview.css'
import { useText } from '../context/TextContext';


function Preview(){
    const { text } = useText();
    return(
        <section className='preview-container'>
           <div className="preview-header">
            <h3>Post Preview</h3>

            <div className="preview-header-right">
                <span>Devices: </span>
                <button><Smartphone className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} /></button>
                <button><Tablet className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} /></button>
                <button><MonitorPlay className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} /></button>
            </div>
           </div>

            <div className="preview-body">
 
             sfdsafasdf
            </div>
        </section>
    )
}   

export default Preview;
