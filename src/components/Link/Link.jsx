import React from 'react';

const Link = ({route}) => {
    
    return (
     <li className='mr-4 hover:bg-zinc-300 m-1'>
        <a href={route.path}>{route.name}</a>
     </li>
    );
};

export default Link;