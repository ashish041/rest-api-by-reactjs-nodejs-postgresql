import React from 'react';

const LoginUserForm = props => {

    const { handleInputChange, submitLogin, user, handleCreate } = props
    const password = user.password
    const email = user.email
  
    return (
        <div>
            <form onSubmit={submitLogin}>
                <label>Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="jane.doe@gmail.com"
                    onChange={(e) => handleInputChange(e)}
                    value={email}
                />
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => handleInputChange(e)}
                    value={password}
                />
                <div className="flex-row">
                    <div className="flex-row-input">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="flex-row-input">
                        <a href="" onClick={handleCreate}>Create New</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginUserForm;