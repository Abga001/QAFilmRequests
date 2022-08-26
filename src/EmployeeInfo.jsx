const EmployeeInfo = () => {}

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res)
      .then((result) => {
          setIsLoaded(true);
          setItems(result.data.data);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
          {console.log(items)}
        {items.map((item) => (
          <li key={item.id}>
            {item.employee_name}
          </li>
        ))}
      </ul>
    );
  }
}
export default EmployeeInfo;