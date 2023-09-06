import React, { useState, useEffect } from 'react';
import moment from 'moment';
import LoginUserForm from './Components/LoginUserForm';
import NewUserForm from './Components/NewUserForm';
import BarChart from './Components/Charts/BarChart';
import LineChart from './Components/Charts/LineChart';
import PieChart from './Components/Charts/PieChart';
import DropDown from './Components/DropDown';

const priceRange = [
  { label: "0-10", value: 1 },
  { label: "11-100", value: 2 },
  { label: "101-1000", value: 3 },
  { label: "101-10000", value: 4 },
  { label: "10-100", value: 5 },
  { label: "10-1000", value: 6 },
  { label: "10-100000", value: 7 }
];

const getItems = function(chart) {
  return chart?.map((x) => ({label: x.name, value: x.id}))
}

const formatChart = function(chart, selected) {
  console.log(chart)
  console.log(selected)
  let newArr = []
  selected.forEach(val2 => {
    chart.forEach(val => {
      if (val2 == val.id) {
        newArr.push(val)
      }
    })
  })
  console.log(newArr)
  return {coins: newArr}
}

const App = () => {
  const initialFormState = {
    id: '',
    name: '',
    email: '',
    password: ''
  }

  const [user, setUser] = useState(initialFormState)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [newUser, setNewUser] = useState(false)
  const [chart, setChart] = useState({})
  const [listItem, setOptions] = useState([])
  const [selectedValue, setValue] = useState([])
  const [selectedValue2, setValue2] = useState([])
  var baseUrl = "https://api.coinranking.com/v2/coins/?limit=";

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('currentUser'));
    if (items) {
      setCurrentUser(items);
    }
    fetchCoins(10);
    listCoins();
  }, [])

  const handleInputChange = event => {
    const { id, value } = event.target
    setUser({ ...user, [id]: value })
  }

  const handleChange = v => {
    const value = v?.map((x) => x.value)
    setValue(value)
  }

  const handleChange2 = v => {
    setValue2(v.label)
  }
    
  const handleApply = async (event) => {
    event.preventDefault()
    fetchCoin(selectedValue,
      (selectedValue2 == "" ? "0-10" : selectedValue2))
  }

  const handleCreate = event => {
    event.preventDefault()
    setNewUser(true)
  }

  const handleLogout = event => {
    setCurrentUser(initialFormState)
    localStorage.removeItem("currentUser");
  }

  const fetchCoins = async (limit) => {
    await fetch(`${baseUrl}${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          console.log(json.data)
          setChart(json.data)
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  };

 const fetchCoin = async (v1, v2) => {
    const result = await fetch(`http://localhost:8080/searchCoins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: v2.split('-')[0],
        to: v2.split('-')[1]
      })
    })
    result
        .json()
        .then(result => setChart(formatChart(result, v1)))
        .catch(e => console.log(e))
  }

  const listCoins = async () => {
    const result = await fetch(`http://localhost:8080/coins`)
    result
      .json()
      .then(result => setOptions(getItems(result)))
      .catch(e => console.log(e))
  }

  const submitLogin = async (event) => {
    event.preventDefault()

    const response = await fetch(`http://localhost:8080/users/${user.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    response
      .json()
      .then(result => {
        setCurrentUser(result)
        localStorage.setItem('currentUser',
          JSON.stringify(result));
      })
      .catch(e => console.log(e))
  }

  const submitNewUser = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    response
      .json()
      .then(result => setUser(result))
      .catch(e => console.log(e))

    setNewUser(false)
  }

  const deleteUser = async (item) => {
    const response = await fetch(`http://localhost:8080/users/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    response
      .json()
      .then(result => 
        setCurrentUser(initialFormState),
        localStorage.removeItem("currentUser")
      )
      .catch(e => console.log(e))
  }

  const editUser = item => {
    setCurrentUser({ id: item.id,
      name: item.name, email: item.email })
  }

  const hideChart = (currentUser.email == '' ? 'none' : 'block')
  const hideForm = (currentUser.email == '' ? 'block' : 'none')
  const border = (currentUser.email == '' ? '' : '3px solid grey')

  return (
    <div className="container">
      <div className="small-container"
        style={{display: hideChart}}>
        <div className="flex-filter">
          <DropDown
            data={listItem}
            handleChange={handleChange}
            isMulti={true}
          />
          <DropDown
            data={priceRange} 
            handleChange={handleChange2}
            isMulti={false}
          />
          <div className="apply">
            <input type="submit"
              onClick={handleApply}
              value="Apply" />
          </div>
        </div>
      </div>
      <div className="medium-container"
        style={{borderLeft: border}}>
        <div className="flex-large">
          <div className="flex-row">
              <div className="flex-large"
                style={{display: hideForm}}>
                {newUser ?
                  <NewUserForm
                    submitNewUser={submitNewUser}
                    handleInputChange={handleInputChange}
                    user={user}
                  />
                  :
                  <LoginUserForm
                    submitLogin={submitLogin}
                    handleInputChange={handleInputChange}
                    handleCreate={handleCreate}
                    user={user}
                  />
                }
              </div>
            <div className="welcome">
              <div style={{display: hideChart}}>
                <small>Welcome, {currentUser.name}</small>
                <br/>
                <a href="" onClick={handleLogout}>
                  logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-large" 
          style={{borderTop: '3px solid gray', display: hideChart}}>
          <div className="flex-row" >
            <PieChart chart={chart} />
            <LineChart chart={chart} />
            <BarChart chart={chart} />
          </div>
          <div className="flex-row">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>ListedAt</th>
                </tr>
              </thead>
              <tbody>
                {chart?.coins?.map(item =>
                  <tr key={item.id ? item.id : item.uuid}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{moment(item.listedAt).format('LLL')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
