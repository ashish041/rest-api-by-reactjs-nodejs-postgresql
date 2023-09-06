import React from 'react';

const NewUserForm = props => {

    const { handleInputChange, submitNewUser, user } = props
    const name = user.name
    const email = user.email
    const password = user.password

    return (
        <div>
            <label><u>New User From</u></label>
            <form onSubmit={submitNewUser}>
                <div className="flex-new-user">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Jane Doe"
                        onChange={handleInputChange}
                        value={name}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="jane.doe@gmail.com"
                        onChange={handleInputChange}
                        value={email}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={handleInputChange}
                        value={password}
                    />
                </div>
                <div className="flex-row-input">
                    <input type="submit" value="Create New User" />
                </div>
            </form>
        </div>
    )
}

export default NewUserForm;