type ChildrenProps = {
    children: String
}

const Children = (props: ChildrenProps) => {
    return (
        <div>
            <div className="shadow-sm bg-blue-200 p-5 inline-flex items-center">

                <div>
                    <pre className="font-bold">
                        ts using Children <br/>
                          type ChildrenProps = {'{\n' +
                        '                     children: string ' +
                        '}'}
                    </pre>
                    <h2 className="space-y-2">
                        {props.children}
                    </h2>
                </div>
            </div>
        </div>
    )
}


export default Children;
