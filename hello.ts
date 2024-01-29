import { number, string, z } from 'zod';

const user = z.object({
    username: z.union([string(), number()]),
})


console.log(user);

type User = z.infer<typeof user>;

const user1: User = {
    username: 'Freewind'
}

const user2: User = {
    username: 123
}

console.log(user.parse({ username: 111 }));

const error = user.safeParse({ username: true })
console.log(JSON.stringify(error, null, 4));




