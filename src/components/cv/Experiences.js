import React from 'react';

function Experiences({ datas }) {
    
    return (
        <div className='cursus_exp'>
            
            
            {datas.map((data) => 
                <div className="grid_row_exp" key={data.id}>
                    <div className="grid_item_exp2">

                        <table className='table_xp'>
                            <thead>
                                <tr>
                                    <th colspan="2" className="grid_title_exp" >
                                        {data.title}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="grid_item_exp">
                                <tr className="grid_mission_exp">
                            {data.missions.map((missions) => 
                                <td>
                                    <li className='missions_exp'key={missions.id}>{missions.title}
                                    </li>
                                </td>
                            )}
                                <td className="infos_xp">
                                    <p className="grid_date_exp">
                                        {data.date}
                                    </p>
                                    <p className="grid_location_exp">
                                        {data.location}
                                    </p>
                                </td>
                               
                                
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experiences;