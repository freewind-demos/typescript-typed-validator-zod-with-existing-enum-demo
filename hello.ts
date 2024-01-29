import { number, string, z } from 'zod';

enum Gender {
    Male = 1,
    Femail = 2
}
const user = z.object({
    username: z.union([string(), number()]),
    gender: z.nativeEnum(Gender).optional()
})


console.log(user);

type User = z.infer<typeof user>;

const user1: User = {
    username: 'Freewind',
    gender: Gender.Male,
}


const error = user.safeParse({ username: true, gender: 123 })
console.log(JSON.stringify(error, null, 4));




