import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        manifest: true, // Garante que o arquivo manifest.json será gerado
        outDir: '../api/public/build', // Caminho para o diretório do Laravel
        emptyOutDir: true, // Limpa o diretório antes de gerar novos arquivos
    },
});
