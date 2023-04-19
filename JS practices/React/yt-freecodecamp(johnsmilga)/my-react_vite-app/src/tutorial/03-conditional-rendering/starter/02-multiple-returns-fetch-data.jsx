import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There is an error...</h2>;
  }

  const { name, company, avatar_url, bio } = user;
  return (
    <div>
      <img src={avatar_url} alt="text" />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
