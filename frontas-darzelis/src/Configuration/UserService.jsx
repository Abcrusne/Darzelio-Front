const UserService = ({

    // setUsername: (username) => {
    //     localStorage.setItem('username', username);
    // },
    //
    // getUsername: () => {
    //     return localStorage.getItem('username') || '';
    // },

    setRole: (role) => {
        localStorage.setItem('role', role);
    },

    getRole: () => {
        return localStorage.getItem('role') || '';
    },

    setRoleExpiration: (currentDate) => {
        const timeStamp = currentDate + 15 * 60 * 1000;
        localStorage.setItem('role-expiration', JSON.stringify(timeStamp));
    },

    getRoleExpiration: () => {
        return localStorage.getItem('role-expiration') || '';
    },

    deleteRole: () => {
        localStorage.clear();
    },
});

export default UserService;