import { Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export type TitleProps = {
    title: string,
    color?: string,
}

const Title: React.FC<PropsWithChildren<TitleProps>> = (props) => {
    const {title, color = '#1f293d' } = props;

    return (
        <div 
            style={{ 
                maxWidth: '100%',
                }}
            >
            <Typography variant="h1" display='inline' color={color}>{title[0]}</Typography>                        
            <Typography variant="h6" display='inline' color={color}>{title.slice(1)}</Typography>
        </div>
    );
};

export default Title;
