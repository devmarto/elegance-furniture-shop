# 🪑 Elegance Furniture Shop

Um e-commerce moderno de móveis construído com **React 19** e **Vite**, focado em elegância e experiência do usuário.

## 📸 Preview

![Elegance Furniture Shop](https://via.placeholder.com/800x400/f5f5f5/333333?text=Elegance+Furniture+Shop)

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e elegante com hover effects
- 📱 **Responsivo**: Layout adaptável para todos os dispositivos
- ⚡ **Performance**: Construído com Vite para desenvolvimento rápido
- 🎯 **Categorias**: Navegação por categorias de móveis (Cadeiras, Sofás, Camas, Armários)
- 🌟 **Efeitos Visuais**: Transições suaves e filtros de imagem interativos

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **SCSS** - Pré-processador CSS para estilização avançada
- **ESLint** - Linting para qualidade de código
- **Google Fonts (Poppins)** - Tipografia moderna

## 📂 Estrutura do Projeto

```
elegance-furniture-shop/
├── public/
│   └── assets/
│       └── categories/          # Imagens das categorias
│           ├── bed.jpg
│           ├── chair.jpg
│           ├── cupboard.png
│           └── sofa.png
├── src/
│   ├── components/
│   │   ├── CardItem/           # Componente de item individual
│   │   │   ├── CardItem.jsx
│   │   │   └── card-item.styles.scss
│   │   └── CardList/           # Componente de lista de itens
│   │       ├── CardList.jsx
│   │       └── card-list.styles.scss
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Ponto de entrada
│   └── index.scss             # Estilos globais
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/devmarto/elegance-furniture-shop.git
   cd elegance-furniture-shop
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linting do código

## 🎨 Funcionalidades

### Componentes Principais

#### 🃏 CardItem
- Exibe uma categoria individual de móvel
- Imagem de fundo com overlay elegante
- Efeito hover que remove o filtro grayscale
- Nome da categoria centralizado

#### 📋 CardList
- Grid responsivo que se adapta ao tamanho da tela
- Layout flexível com `minmax(250px, 1fr)`
- Espaçamento consistente entre itens

### Categorias Disponíveis
- 🪑 **Cadeiras** - Cadeiras elegantes e confortáveis
- 🛋️ **Sofás** - Sofás modernos para sua sala
- 🛏️ **Camas** - Camas e móveis para quarto
- 🗄️ **Armários** - Soluções de armazenamento

## 🔧 Configuração de Desenvolvimento

### ESLint
O projeto utiliza ESLint com configurações otimizadas para React:
- Regras para React Hooks
- Suporte a JSX
- Configurações para Vite

### Styling
- **SCSS** para estilização avançada
- **Responsividade** com CSS Grid
- **Transições** suaves (0.5s)
- **Efeitos visuais** com filtros CSS

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

Os arquivos de produção estarão na pasta `dist/`.

### Plataformas Recomendadas
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Próximas Funcionalidades

- [ ] 🛒 Carrinho de compras
- [ ] 🔍 Sistema de busca
- [ ] 🏷️ Filtros por preço e características
- [ ] 📱 App mobile com React Native
- [ ] 🔐 Sistema de autenticação
- [ ] 💳 Integração com gateway de pagamento

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Andre Marto**
- GitHub: [@devmarto](https://github.com/devmarto)
- Email: dev.marto87@gmail.com

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ e React</p>
</div>
