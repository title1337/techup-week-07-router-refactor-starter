const users = [
  {
    user_id: 1,
    name: "Nira",
    email: "nira@example.com",
    role: "customer",
    internal_note: "Asked for invoice",
  },
];

let nextUserId = 2;

export function listUsers() {
  return users;
}

export function createUser({ name, email }) {
  const newUser = {
    user_id: nextUserId,
    name,
    email,
    role: "customer",
    internal_note: "",
  };

  users.push(newUser);
  nextUserId += 1;

  return newUser;
}
