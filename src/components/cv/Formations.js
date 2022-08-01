import React from 'react';


function Formations({ datas }) {
    console.log(datas);
    return (
        <div className='cursus'>
            
            
            {datas.map((datas) => 
                <div className="grid_row" key={datas.id}>
                    <table className="grid_item">
                        <thead>
                            <h3 className="grid_title" >{datas.title}</h3>
                        </thead>
                        
                        <tbody>
                            <tr className="infos-formations">
                                <td className="grid_date">{datas.date}</td>
                                <td className="grid_location">{datas.location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Formations;