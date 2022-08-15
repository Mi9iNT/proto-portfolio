import React from 'react';

const Skill = ( {title, rating} ) => {
    return (
        <div>
            <div>
                <table className="skill">
                    <tbody>
                        <tr>
                            <td className='skill-title' title={title}>⊙{title}</td>
                            <td className="skill-wallet">{ rating }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Skill;