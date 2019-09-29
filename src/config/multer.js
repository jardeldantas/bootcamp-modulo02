import multer from 'multer';
import crypto from 'crypto';
/**
 * extname: Retorna o nome da extenção de um arquivo importado
 * resolve: percorre um caminho dentro da aplicação
 * */
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
