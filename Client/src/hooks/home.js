import React from 'react';


const Home = props => (
    <div  style={{display: 'flex', justifyContent: 'center'}}>
      <div >
        <h1>Login</h1>
        <div >
          <div>
          <form >
            <div >
              <label >Username:</label>
              <input type="text"  htmlFor="username" placeholder="Enter your Username" id="username" />
              <br />
              <br />
              <br />
              <label >Password:</label>
              <input type="text" htmlFor="password" placeholder="Enter your Username"id="username"/>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      </div>
     </div>
);

export default Home;
