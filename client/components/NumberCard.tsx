import React from 'react';
import { Link } from 'react-router-dom';

import NumberType from '../constants/NumberType';
import NumberMetaMap from '../constants/NumberMetaMap';

interface NumberCardProps {
    numberType: NumberType;
}

const NumberCard: React.FC<NumberCardProps> = ({ numberType }) => {
    const meta = NumberMetaMap.get(numberType);
    return (
        <div className='w-1/4 px-4 mt-8'>
            <div className='rounded border border-gray-400 h-full text-center'>
                <Link to={`/numbers/${numberType}`} className='flex flex-col h-full'>
                    <div className='p-2 border-b border-gray-400 text-2xl'>
                        {meta.name}
                    </div>
                    <div className='p-3 flex-1'>
                        {meta.description}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NumberCard;
