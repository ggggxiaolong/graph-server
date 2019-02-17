import {users} from "./db";
const resolvers = {
    Query: {
        user: (parent, {id}, context, info) => {
            return users.find(user => user.id === parseInt(id));
        },
        users: (parent, args, context, info) => {
            return users;
        }
    },
    Mutation: {
        createUser: (parent, {id, name, email, age}, context, info) => {
            const newUser = { id, name, email, age };
            users.push(newUser);
            return newUser;
        },
        updateUser: (parent, {id, name, email, age}, contxt, info) => {
            let newUser = users.find(user => user.id === id);
            console.log(newUser);
            if(name) newUser.name = name;
            if(email) newUser.email = email;
            if(age) newUser.age = age;
            console.log(newUser);
            return newUser;
        },
        deleteUser: (parent, {id}, context, info) => {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1) throw new Error("user not found");
            const deleteUsers = users.splice(userIndex, 1);
            return deleteUsers[0];
        }
    }
};
export default resolvers;
