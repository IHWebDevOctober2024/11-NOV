import { useParams, useSearchParams } from "react-router-dom";

function ContactsPage() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");

  console.log(searchParams);
  //   const newSearchParams = new URLSearchParams({ name: "Marcel" });
  //   setSearchParams(newSearchParams)

  return (
    <>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <label htmlFor="search-query">Search:</label>
      <input
        onChange={(event) => setSearchParams({ city: event.target.value })}
        id="search-query"
        type="text"
      />
    </>
  );
}

export default ContactsPage;
