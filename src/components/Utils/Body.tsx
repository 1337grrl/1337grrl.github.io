import { Typography } from '@mui/material';
import React from 'react';

export type BodyProps = {
    body: string,
}

const Body: React.FC<BodyProps> = (props) => {
    const {body} = props;
    return (
        <div style={{ display: 'inline' }}>
            <Typography variant="h1" display='inline'>{body[0]}</Typography>                        
            <Typography variant="body1" display='inline'>{body.slice(1)}</Typography>
        </div>
    );
};

export default Body;
