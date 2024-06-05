import { Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export type TitleProps = {
    title: string,
}

const Title: React.FC<PropsWithChildren<TitleProps>> = (props) => {
    const {title} = props;

    return (
        <div 
            style={{ 
                maxWidth: '100%',
                }}
            >
            <Typography variant="h1" display='inline'>{title[0]}</Typography>                        
            <Typography variant="h6" display='inline'>{title.slice(1)}</Typography>
        </div>
    );
};

export default Title;
