import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';


export default {
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, ".env"),
      safe: true,
    }),
  ],
};
