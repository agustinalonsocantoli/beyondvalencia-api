import bcrypt from 'bcryptjs'

export const encryptPassword = (password: string) => {
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash
}

export const validatePassword = (password: string, token: string) => {
    const compare = bcrypt.compareSync(password, token);

    return compare
} 