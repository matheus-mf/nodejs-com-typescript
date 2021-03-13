interface techObject {
    title: string,
    experience: number;
}

interface CreateUser {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | techObject>;
}

export default function createUser({ name, email, password, techs }: CreateUser) {
    return {
        name,
        email,
        password,
        techs,
    }
}

