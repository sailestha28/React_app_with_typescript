type PersonProps = {
    name: {
        firstName: string;
        lastName: string;
    };
};

const Person = (props: PersonProps) => {
    return (
        <div>
            <div className="shadow-sm bg-amber-300 p-5 inline-flex items-center">
                <div>
              <pre className="font-bold">
                ts using object with object <br/>
                  type PersonProps = {'{\n' +
                  '                     name: { \n' +
                  '                             firstName: string \n' +
                  '                             lastName: string\n' +
                  '                           }\n' +
                  '                     }'}
              </pre>
                    <h2 className="text-2xl"></h2>
                    Person: &nbsp;
                    {props.name.firstName} {props.name.lastName}
                </div>
            </div>
        </div>
    );
};

export default Person;

