import { Gauge } from 'lucide-react';
import '../CSS/Editing.css'

function Editing(){
    return(
        <section className='editing-container'>
           <div className="editing-header">
            <h3>Write Post</h3>
            <div className='editing-header-right'>
                <span><Gauge className='icon' style={{color: '#000', width: '1rem', height: '1rem'}} /> Check Score</span>
                <img src="" alt="Profile" />

            </div>
           </div>
        </section>
    )
}   

export default Editing;
