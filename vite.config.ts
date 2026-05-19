import { defineConfig } from 'vite';

export default defineConfig({
  // Configuração para servir o projeto de forma simples
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    // Garante que o build gere caminhos relativos para funcionar em qualquer subdiretório
    base: './'
  }
});
