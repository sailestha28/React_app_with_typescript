


type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      Person: &nbsp;
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default Person;

