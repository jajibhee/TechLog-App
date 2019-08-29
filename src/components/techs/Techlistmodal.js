import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Techitem from '../techs/Techitem.js'

const Techlistmodal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getTechs();
    }, []
    );

    const getTechs = async () =>{
        setLoading(true);
        const {data} = await axios.get('http://localhost:5000/techs');
        setTechs(data);
        setLoading(false);
    }
    
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => <Techitem tech={tech} key={tech.id} />)}
                </ul>
            </div>
        </div>
        
    )
}

export default Techlistmodal;
