type PersonListProps = {
    nameLists: {
        firstName: string;
        lastName: string;
    }[]
};

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <div className="shadow-sm bg-blue-200 p-5 inline-flex items-center">
                <div>
                    <pre className="font-bold">
                        ts using object with object <br/>
                          type PersonListProps = {'{\n' +
                        '                     name: { \n' +
                        '                             firstName: string \n' +
                        '                             lastName: string\n' +
                        '                           }\n' +
                        '                     }[]'}
                    </pre>
                    <div className="space-y-2">
                        {props.nameLists.map((item: any, i) => (
                                <div key={i} className="bg-amber-50 p-1 ">
                                    <h2 className="text-2xl"></h2>
                                    <p>
                                        PersonList: &nbsp;
                                        {item.firstName} {item.lastName}
                                    </p>
                                </div>
                            )
                        )}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonList;

