import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const aliases = ['common', 'components', 'pages', 'hooks'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  },
  resolve: {
    alias: aliases.map(alias => (
      {
        find: `@${alias}`,
        replacement: path.resolve(__dirname, `src/${alias}`),
      },
    ))
  },
})
