interface User {
    user_id?: string,
    name: string,
    email: string,
    password: string,
    imageURL?: string
}

export interface Search {
    where: string,
    value: any
}

export interface UpdateBio {
    imageURL?: string,
    interest: string
}

export interface userProfile {
    displayName: string;
    emails?: Array<profileObject>;
    photos?: Array<profileObject>;
}


interface profileObject {
    value: string
}

export default User;


