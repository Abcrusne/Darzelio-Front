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

    deleteRole: () => {
        localStorage.clear();
    },
});

export default UserService;