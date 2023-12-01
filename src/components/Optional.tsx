type OptionalProps={
    name:string,
    age?:number,
    location:string
}
const Optional = (props: OptionalProps)=>{
    return(
        <div>
 <div className="shadow-sm bg-blue-50 p-5 inline-flex items-center">
                <div>
                    <h4 className="mb-4">Note: Age is option over here</h4>
                    <pre className="font-bold">
                        ts using optional <br/>
                          type OptionalProps = {'{\n' +
                        '                     name: string\n' +
                        '                     age?: number \n' +
                        '                     location: string\n' +
                        '                     }'}
                    </pre>
                    <div className="space-y-2">
                        name:{props?.name}<br/>
                        {props?.age &&(
                            <>

                            age:{props.age}
                                <br/>
                            </>
                        )}
                        location: {props.location}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Optional
