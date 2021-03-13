import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'matheusmoreira.g6@gmail.com',
        password: 'pass123',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'VueJs', experience: 100 },
        ],
    });

    console.log(user.email);

    return response.json({ message: 'Hello World!' });
}
