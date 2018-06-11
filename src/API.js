const ExampleAPI = {
    users: [
        { id: 1, name: "Ben Blocker", occupation: "G" },
        { id: 2, name: "Dave Defender", occupation: "D" },
        { id: 3, name: "Sam Sweeper", occupation: "D" },
        { id: 4, name: "Matt Midfielder", occupation: "M" },
        { id: 5, name: "William Winger", occupation: "M" },
        { id: 6, name: "Fillipe Forward", occupation: "F" }
    ],

    getAll() {return this.users},
    get(id) {
        const isUser = p => p.id === id
        return this.users.find(isUser);
    }
}

export default ExampleAPI;