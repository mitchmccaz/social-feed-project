const DisplayEntries = (props) => {
    return ( 
        <table className = 'table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index)=> {
                return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{entry.weight}</td>
                    <td>{entry.date}</td>
                </tr>
                );
            })}
            </tbody>
        </table>

    );
}
 