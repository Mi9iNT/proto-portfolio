import React from 'react';


function Formations({ datas }) {
    
    return (
        <div className='cursus'>
            
            
            {datas.map((datas) => 
                <div className="grid_row" key={datas.id}>
                    <table className="grid_item">
                        <thead>
                            <h3 className="grid_title" title={datas.title}>{datas.title}</h3>
                        </thead>
                        
                        <tbody>
                            <tr className="infos-formations">
                                <td className="grid_date" title={datas.date}>{datas.date}</td>
                                <td className="grid_location"  title={datas.location}>{datas.location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Formations;