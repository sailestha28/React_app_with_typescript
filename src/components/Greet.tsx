type GreetProps = {
  name: string;
};
const Greet = (props: GreetProps) => {
  return <h1 className="text-3xl font-bold ">Hello {props.name}!</h1>;
};

export default Greet;

