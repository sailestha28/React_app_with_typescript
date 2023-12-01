type GreetProps = {
    name: string;
    messageCount: number
    isLoggedIn: boolean
};


const Greet = (props: GreetProps) => {
    return (
        <div className="bg-amber-100 shadow-sm inline-flex flex-col p-4">
            <h1 className="text-black text-3xl font-bold ">
                Example of typing in ts
            </h1>
            <h5 className=" ">Hello {props.name}!</h5>
            <p>
                {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`: 'Welcome Guest' }
            </p>
        </div>
    )
};

export default Greet;

