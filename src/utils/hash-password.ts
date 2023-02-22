import * as bcrypt from 'bcrypt';

async function hashPassWord(password: string) {
  const salt = await bcrypt.genSalt();
  const hashPassWord = await bcrypt.hash(password, salt);
  return hashPassWord;
}

export default hashPassWord;
