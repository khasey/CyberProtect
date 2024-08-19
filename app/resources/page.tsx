import { BentoDemo } from '@/components/bento/Bento';
import { LogoSectionDemo } from '@/components/LogoSection';
import react from 'react';

const Resources = () => {
    return (
        <div className='flex flex-col w-screen h-screen pr-24'>
            <BentoDemo /> 
            <LogoSectionDemo />
        </div>
    );
}

export default Resources;