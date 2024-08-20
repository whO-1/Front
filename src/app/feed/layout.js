import React from 'react';

export default function FeedLayout( { modal, children}){
    return (
        <>
            {children}
            {modal}
        </>
    );
}