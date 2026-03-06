# JavaScript Frameworks Course Assignment - Alera Online Shop
![image](https://i.imghippo.com/files/Wlai2192OQ.png)

## Description 
Alera is a online shop built with Next.js, TypeScript, and Tailwind CSS as the course assignment for the JavaScript Frameworks course at Noroff. 
The application fetches products from the Noroff Online Shop API. The shop features a product list page with search, a detailed product page with reviews and tags, and a shopping cart with quantity management and persistent state using Zustand. Users can complete a checkout flow, and theres a validated contact form available for customers. 

Live Demo: alera-online-shop.vercel.app

## Getting Started

### Prerequisites 
- Node.js (v18+)
- npm

### Installing

Clone the repository:
```bash
git clone https://github.com/NoroffFEU/jsfw-2025-v1-tonje-js-frameworks.git
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

### Available Scripts
- `npm run dev` – Start Next.js development server
- `npm run build` – Build for production
- `npm start` – Run production build
- `npm run lint` – Run ESLint

## Features
- Browse a list of products with search function
- View a detailed product page with title, description, price, tags and rating. 
- Add and remove items from the shopping cart
- Adjust quantities and view total cost in shopping cart.
- Complete a checkout flow
- Contact form with validation

## Project Structure
```
src/
├── app/
│   ├── about/          → About page
│   ├── cart/           → Cart page
│   ├── checkout/       → Checkout success page
│   ├── contact/        → Contact page
│   ├── components/     → Reusable UI components
│   ├── interfaces/     → TypeScript interfaces
│   ├── product/[id]/   → Product detail page
│   ├── schemas/        → Zod validation schemas
│   ├── services/       → API calls
│   ├── stores/         → Zustand cart store
│   └── sustainability/ → Sustainability page
└── public/
    └── images/             → Static images
```

## Tech Stack
- React
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zustand
- React Hook Form + Zod
- react-hot-toast
- Vercel 
- Noroff Online shop API

## Contact
Tonje Schjefstad
Frontend Development Student — Noroff School of Technology and Digital Media

- LinkedIn: https://www.linkedin.com/in/tonjeschjefstad/
- GitHub: https://github.com/TonjeSchjefstad
- Student email: tonsch03841@stud.noroff.no