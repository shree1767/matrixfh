import bcrypt from 'bcryptjs';

const compare = (password, hash) => {
    return bcrypt.compare(password, hash);
}

const Hash = (password: String) => {
    const hash = bcrypt.hash(password, 10);
    return hash;
}


export { compare, Hash }