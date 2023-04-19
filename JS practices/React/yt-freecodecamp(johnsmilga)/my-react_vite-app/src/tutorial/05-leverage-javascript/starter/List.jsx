import { data, people } from "../../../../data";
import Person from "./Person";
function List() {
  return (
    <>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
        // const { name, nickName, images } = person;
        // console.log(id, name);
        // console.log(person);
        // console.log(person?.name);
        // console.log(person?.images);
        // console.log(person?.nickName);
      })}
    </>
  );
}

export default List;
