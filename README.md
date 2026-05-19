# Casas São José - Site Oficial

Site institucional e catálogo de modelos para a **Casas São José**, especializada em casas de madeira nobre e alvenaria com mais de 40 anos de tradição.

## 🚀 Tecnologias e Recursos
- **Frontend:** HTML5, Tailwind CSS (via CDN ou Build), Vanilla JavaScript.
- **Backend:** PHP 7.4+ (API Bridge para integração de Webhooks).
- **Ícones:** Lucide Icons.
- **Animações:** Swiper.js (Sliders) e Lucide (Micro-interações).
- **Integrações:** Google Tag Manager, WhatsApp Business e Make.com (Webhooks).

## 📂 Estrutura do Projeto
- `/` - Arquivos HTML das páginas principais.
- `/api` - Lógica PHP para processamento de formulários e segurança.
- `/js` - Scripts de comportamento e `data.js` (Catálogo de modelos).
- `/css` - Estilos globais e Tailwind.
- `/images` - Ativos visuais e fotos dos projetos.

## 💻 Desenvolvimento Local
Para rodar o projeto no seu computador:

1. Clone o repositório.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse `http://localhost:3000`.

## 📦 Deploy no cPanel (via GitHub)
Este repositório está preparado para deploy contínuo:

1. **Configuração Automática:** O arquivo `.cpanel.yml` na raiz está configurado para mover os arquivos necessários para a pasta `public_html` do seu servidor após o commit.
2. **URLs Amigáveis:** O arquivo `.htaccess` já configura o roteamento para ocultar a extensão `.html` das URLs.
3. **Webhook:** Edite o arquivo `api/config.php` no servidor para inserir a URL de webhook fornecida pelo seu parceiro de integração (ex: Make.com / RD Station).

---
*Orgulhosamente desenvolvido para Casas São José.*
