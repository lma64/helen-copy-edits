import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 className='h1-title'>Helen Copy Edits</h1>
      <div className='container'>
          <table class="table table-bordered">
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
                <th scope="row">Housekeeping</th>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <th scope="row">Food</th>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <th scope="row">Nurse</th>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
