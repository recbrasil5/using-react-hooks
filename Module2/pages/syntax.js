import React, { useEffect } from 'react';

const Syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        console.log('in useEffect');
        return () => {
            console.log('in useEffect Cleanup')
        }
    }, [checkBoxValue]) // if not defined, it runs on every update. an empty array guarantees this useEffect only runs once when component is rendered

    return (
        <div></div>
    );

};

export default Syntax;