import {useEffect, useState} from "react";
import React from "react";

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    const [message, setMessage] = useState('')
    useEffect(() => {
        if (props.status === 'loading') {
            setMessage('Loading...')
        } else if (props.status === 'success') {
            setMessage('Data fetch Successfully')
        } else {
            setMessage('Error fetching data')
        }
    }, [props.status]);


    return (
        <div className="bg-green-300 p-4 shadow-sm inline-flex flex-col">
        <pre className="font-bold ">
                    ts using String with limited strings <br/>
                      type StatusProps = {'{\n' +
            '                     status: {  "loading" | "success" | "error" ' +
            '                           }\n' +
            '                   }'}
              </pre>
            <h3>
                Status: {message}
            </h3>
        </div>
    )
}

export default Status
