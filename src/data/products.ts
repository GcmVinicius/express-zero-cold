export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  whatsappMessage: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  { slug: "cervejas", name: "Cervejas", description: "Nacionais e importadas, sempre geladas", image: "cervejas" },
  { slug: "destilados", name: "Destilados", description: "Whisky, vodka, rum e mais", image: "destilados" },
  { slug: "refrigerantes", name: "Refrigerantes", description: "Clássicos e diet no ponto certo", image: "refrigerantes" },
  { slug: "gelo", name: "Gelo", description: "Gelo puro em vários tamanhos", image: "gelo" },
  { slug: "snacks", name: "Snacks", description: "Petiscos e salgadinhos variados", image: "snacks" },
  { slug: "sucos-aguas", name: "Sucos & Águas", description: "Sucos naturais e água mineral", image: "sucos-aguas" },
];

export const products: Product[] = [
  // Cervejas
  { id: "c1", name: "Brahma 600ml", description: "Cerveja Pilsen gelada", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Brahma 600ml" },
  { id: "c2", name: "Skol Lata 350ml", description: "A que desce redondo", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Skol Lata 350ml" },
  { id: "c3", name: "Heineken Long Neck", description: "Importada premium", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Heineken Long Neck" },
  { id: "c4", name: "Budweiser 550ml", description: "King of Beers", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Budweiser 550ml" },
  { id: "c5", name: "Corona Extra", description: "Cerveja mexicana premium", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Corona Extra" },
  { id: "c6", name: "Stella Artois", description: "Cerveja belga premium", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Stella Artois" },
  { id: "c7", name: "Antarctica Original", description: "Pilsen tradicional", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Antarctica Original" },
  { id: "c8", name: "Amstel Lata", description: "Puro malte holandesa", category: "cervejas", whatsappMessage: "Olá! Gostaria de pedir Amstel Lata" },

  // Destilados
  { id: "d1", name: "Whisky Red Label", description: "Johnnie Walker 1L", category: "destilados", whatsappMessage: "Olá! Gostaria de pedir Whisky Red Label" },
  { id: "d2", name: "Vodka Absolut", description: "Vodka sueca premium", category: "destilados", whatsappMessage: "Olá! Gostaria de pedir Vodka Absolut" },
  { id: "d3", name: "Rum Bacardi", description: "Rum branco carta blanca", category: "destilados", whatsappMessage: "Olá! Gostaria de pedir Rum Bacardi" },
  { id: "d4", name: "Gin Tanqueray", description: "London Dry Gin", category: "destilados", whatsappMessage: "Olá! Gostaria de pedir Gin Tanqueray" },
  { id: "d5", name: "Cachaça 51", description: "Uma boa ideia", category: "destilados", whatsappMessage: "Olá! Gostaria de pedir Cachaça 51" },
  { id: "d6", name: "Tequila José Cuervo", description: "Tequila mexicana", category: "destilados", whatsappMessage: "Olá! Gostaria de pedir Tequila José Cuervo" },

  // Refrigerantes
  { id: "r1", name: "Coca-Cola 2L", description: "O refrigerante clássico", category: "refrigerantes", whatsappMessage: "Olá! Gostaria de pedir Coca-Cola 2L" },
  { id: "r2", name: "Guaraná Antarctica", description: "O sabor brasileiro", category: "refrigerantes", whatsappMessage: "Olá! Gostaria de pedir Guaraná Antarctica" },
  { id: "r3", name: "Coca-Cola Zero Lata", description: "Zero açúcar, mesmo sabor", category: "refrigerantes", whatsappMessage: "Olá! Gostaria de pedir Coca-Cola Zero Lata" },
  { id: "r4", name: "Fanta Laranja", description: "Sabor laranja refrescante", category: "refrigerantes", whatsappMessage: "Olá! Gostaria de pedir Fanta Laranja" },
  { id: "r5", name: "Sprite Lata", description: "Limão refrescante", category: "refrigerantes", whatsappMessage: "Olá! Gostaria de pedir Sprite Lata" },

  // Gelo
  { id: "g1", name: "Gelo 3kg", description: "Saco de gelo cristal", category: "gelo", whatsappMessage: "Olá! Gostaria de pedir Gelo 3kg" },
  { id: "g2", name: "Gelo 5kg", description: "Saco de gelo cristal grande", category: "gelo", whatsappMessage: "Olá! Gostaria de pedir Gelo 5kg" },
  { id: "g3", name: "Gelo 10kg", description: "Para festas e eventos", category: "gelo", whatsappMessage: "Olá! Gostaria de pedir Gelo 10kg" },

  // Snacks
  { id: "s1", name: "Amendoim Japonês", description: "Crocante e salgado", category: "snacks", whatsappMessage: "Olá! Gostaria de pedir Amendoim Japonês" },
  { id: "s2", name: "Batata Ruffles", description: "Original crocante", category: "snacks", whatsappMessage: "Olá! Gostaria de pedir Batata Ruffles" },
  { id: "s3", name: "Doritos", description: "Queijo nacho", category: "snacks", whatsappMessage: "Olá! Gostaria de pedir Doritos" },
  { id: "s4", name: "Torresmo", description: "Crocante artesanal", category: "snacks", whatsappMessage: "Olá! Gostaria de pedir Torresmo" },

  // Sucos & Águas
  { id: "sa1", name: "Água Mineral 500ml", description: "Sem gás, gelada", category: "sucos-aguas", whatsappMessage: "Olá! Gostaria de pedir Água Mineral 500ml" },
  { id: "sa2", name: "Água com Gás", description: "Mineral gaseificada", category: "sucos-aguas", whatsappMessage: "Olá! Gostaria de pedir Água com Gás" },
  { id: "sa3", name: "Suco Del Valle", description: "Sabores variados", category: "sucos-aguas", whatsappMessage: "Olá! Gostaria de pedir Suco Del Valle" },
  { id: "sa4", name: "Água de Coco", description: "Natural refrescante", category: "sucos-aguas", whatsappMessage: "Olá! Gostaria de pedir Água de Coco" },
];

export const WHATSAPP_NUMBER = "5561934850010";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
