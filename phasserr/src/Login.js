import React, { useState } from 'react';



const Login = () => {
     const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
       const handleUsernameChange = (event) => { 
        setUsername(event.target.value); }; const handlePasswordChange = (event) => 
        { setPassword(event.target.value); }; const handleSubmit = (event) => 
        { event.preventDefault(); 
        
             console.log('Username:', username); 
             console.log('Password:', password); 
             
              setUsername(''); setPassword('');
             }; return (
                <div> <h2> login</h2>
                <form onSubmit={handleSubmit}>
                    <div> <label htmlFor="username"> Username
                    </label>
                    <input type='text' id ="username" value ={username}
                    onChange={handleUsernameChange}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password'
                        id="password" value ={password} onChange={handlePasswordChange}/>
                        <button type="submit">Submit</button>
                        </div>
                        </form>
                       </div>
                        );
                        
            
            
        };
         export default Login