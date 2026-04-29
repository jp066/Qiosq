import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['46ec-2804-29b8-5194-f3ce-c7e-e719-bd26-85f.ngrok-free.app']
  }
});
