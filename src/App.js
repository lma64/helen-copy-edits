import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 className='h1-title'>Helen Copy Edits</h1>
      <div className='container'>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">All Labels</th>
                <th scope="col">English</th>
                <th scope="col">French</th>
                <th scope="col">Spanish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className='no-bold'>Housekeeping</th>
                <td><input type="text" id="fname" name="fname"/></td>
                <td><input type="text" id="fname" name="fname"/></td>
                <td><input type="text" id="fname" name="fname"/></td>
              </tr>
              <tr>
                <th scope="row" className='no-bold'>Food</th>
                <td><input type="text" id="fname" name="fname"/></td>
                <td><input type="text" id="fname" name="fname"/></td>
                <td><input type="text" id="fname" name="fname"/></td>
              </tr>
              <tr>
                <th scope="row" className='no-bold'>Nurse</th>
                <td><input type="text" id="fname" name="fname"/></td>
                <td><input type="text" id="fname" name="fname"/></td>
                <td><input type="text" id="fname" name="fname"/></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
