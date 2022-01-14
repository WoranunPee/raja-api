import * as bcrypt from 'bcrypt';

export const BcryptHash = async (pwdTxt) => {

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(pwdTxt, salt);

    return hash
};

export const BcryptCompare = async (pwdTxt, pwdDb) => {
    return bcrypt.compare(pwdTxt, pwdDb);
};