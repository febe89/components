import './Table.css'
const Table = () => {
  return (
    <div className=''>
      <table>
        <thead>
          <tr>
            {/* table data */}
            <th> Chair </th>
            <th> The Laid Back </th>
            <th> The Worker Bee </th>
            <th> The Chair 4/2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Width</th>
            <td>80cm</td>
            <td>60cm</td>
            <td>220cm</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>100cm</td>
            <td>110cm</td>
            <td>90cm</td>
          </tr>
          <tr>
            <th>Depth</th>
            <td>70cm</td>
            <td>65cm</td>
            <td>80cm</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>16kg</td>
            <td>22kg</td>
            <td>80kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Table
