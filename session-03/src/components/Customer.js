function CustomerList({ customers }) {
    const custData = (customers) => {
      return customers.map((ele) => {
        return (
          <tr>
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>{ele.location}</td>
            <td>{ele.gender}</td>
            <td>{ele.income}</td>
          </tr>
        );
      });
    };
  
    return (
      <div className="layout-column align-items-center justify-content-start" 
      style={{  display: "flex",
        justifyContent: "center", /* Horizontal centering */
        alignItems: "center" }}>
        <div className="card w-40 pt-30 pb-8 mt-20">
          {customers.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Location</th>
                  <th>Gender</th>
                  <th>Income</th>
                </tr>
              </thead>
              <tbody data-testid="searched-customers">
                {custData(customers)}
              </tbody>
            </table>
          ) : (
            <p data-testid="no-results">No Results Found!</p>
          )}
        </div>
      </div>
    );
  }
  export default CustomerList;
  