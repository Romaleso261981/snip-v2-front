// export const reviews = [
//   {
//     id: 1,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/men/12.jpg",
//       display_name: "John Doe"
//     },
//     heading: "Great product",
//     rating: 5,
//     body: "I love this product. It's amazing.",
//     media: [
//       {
//         id: 1,
//         url: "https://via.placeholder.com/150"
//       }
//     ]
//   },
//   {
//     id: 2,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
//       display_name: "Jane Smith"
//     },
//     heading: "Good value for money",
//     rating: 4,
//     body: "The product is worth the price.",
//     media: [
//       {
//         id: 2,
//         url: "https://via.placeholder.com/150/0000FF/808080"
//       }
//     ]
//   },
//   {
//     id: 3,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/women/3.jpg",
//       display_name: "Alice Johnson"
//     },
//     heading: "Not bad",
//     rating: 3,
//     body: "The product is okay, but could be better.",
//     media: [
//       {
//         id: 3,
//         url: "https://via.placeholder.com/150/FF0000/FFFFFF"
//       }
//     ]
//   },
//   {
//     id: 4,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
//       display_name: "Bob Brown"
//     },
//     heading: "Excellent",
//     rating: 5,
//     body: "Exceeded my expectations!",
//     media: [
//       {
//         id: 4,
//         url: "https://via.placeholder.com/150/FFFF00/000000"
//       }
//     ]
//   },
//   {
//     id: 5,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/women/5.jpg",
//       display_name: "Cathy Green"
//     },
//     heading: "Pretty good",
//     rating: 4,
//     body: "I'm satisfied with this product.",
//     media: [
//       {
//         id: 5,
//         url: "https://via.placeholder.com/150/00FF00/000000"
//       }
//     ]
//   },
//   {
//     id: 6,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/men/6.jpg",
//       display_name: "David White"
//     },
//     heading: "Could be better",
//     rating: 3,
//     body: "The product is average.",
//     media: [
//       {
//         id: 6,
//         url: "https://via.placeholder.com/150/0000FF/FFFFFF"
//       }
//     ]
//   },
//   {
//     id: 7,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/women/7.jpg",
//       display_name: "Eva Black"
//     },
//     heading: "Fantastic",
//     rating: 5,
//     body: "I love it! Highly recommend.",
//     media: [
//       {
//         id: 7,
//         url: "https://via.placeholder.com/150/FF00FF/000000"
//       }
//     ]
//   },
//   {
//     id: 8,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/men/8.jpg",
//       display_name: "Frank Blue"
//     },
//     heading: "Not what I expected",
//     rating: 2,
//     body: "The product did not meet my expectations.",
//     media: [
//       {
//         id: 8,
//         url: "https://via.placeholder.com/150/00FFFF/000000"
//       }
//     ]
//   },
//   {
//     id: 9,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/women/9.jpg",
//       display_name: "Grace Yellow"
//     },
//     heading: "Very good",
//     rating: 4,
//     body: "I'm happy with this purchase.",
//     media: [
//       {
//         id: 9,
//         url: "https://via.placeholder.com/150/FFFF00/FFFFFF"
//       }
//     ]
//   },
//   {
//     id: 10,
//     customer: {
//       avatar_url: "https://randomuser.me/api/portraits/men/10.jpg",
//       display_name: "Henry Purple"
//     },
//     heading: "Just okay",
//     rating: 3,
//     body: "It's an okay product.",
//     media: [
//       {
//         id: 10,
//         url: "https://via.placeholder.com/150/800080/FFFFFF"
//       }
//     ]
//   }
// ];

import { Product, Review } from "./types/types";

export const reviews: Review[] = [
  {
    _id: "1",
    reviewBy: {
      id: "1",
      imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
      fullName: "John Doe"
    },
    rating: 5,
    review: "I love this product. It's amazing.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "2",
    reviewBy: {
      id: "2",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      fullName: "Jane Smith"
    },
    rating: 4,
    review: "The product is worth the price.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "3",
    reviewBy: {
      id: "3",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      fullName: "Alice Johnson"
    },
    rating: 3,
    review: "The product is okay, but could be better.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "4",
    reviewBy: {
      id: "4",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      fullName: "Bob Brown"
    },
    rating: 5,
    review: "Exceeded my expectations!",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "5",
    reviewBy: {
      id: "5",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      fullName: "Cathy Green"
    },
    rating: 4,
    review: "I'm satisfied with this product.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "6",
    reviewBy: {
      id: "6",
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      fullName: "David White"
    },
    rating: 3,
    review: "The product is average.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "7",
    reviewBy: {
      id: "7",
      imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      fullName: "Eva Black"
    },
    rating: 5,
    review: "I love it! Highly recommend.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "8",
    reviewBy: {
      id: "8",
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
      fullName: "Frank Blue"
    },
    rating: 2,
    review: "The product did not meet my expectations.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "9",
    reviewBy: {
      id: "9",
      imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
      fullName: "Grace Yellow"
    },
    rating: 4,
    review: "I'm happy with this purchase.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "10",
    reviewBy: {
      id: "10",
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
      fullName: "Henry Purple"
    },
    rating: 3,
    review: "It's an okay product.",
    likes: [],
    createdAt: new Date(),
    updatedAt: new Date().toISOString()
  }
];

export const product: Product = {
  _id: "1",
  name: "Sample Product",
  featured: true,
  slug: "sample-product",
  description: "This is a sample product description.",
  category: {
    _id: "1",
    name: "Category 1",
    link: "/category-1",
    slug: "category-1",
    image: "https://via.placeholder.com/150"
  },
  subCategories: [
    {
      _id: "1",
      name: "SubCategory 1",
      slug: "subcategory-1",
      link: "/subcategory-1",
      parent: "1"
    }
  ],
  brand: {
    _id: "1",
    name: "Brand 1",
    link: "/brand-1",
    slug: "brand-1",
    image: "https://via.placeholder.com/150"
  },
  content: "This is the content of the sample product.",
  details: [
    {
      name: "Detail 1",
      value: "Value 1"
    }
  ],
  questions: [
    {
      name: "Question 1",
      value: "Answer 1"
    }
  ],
  reviews: reviews,
  subProducts: [
    {
      sku: "SKU1",
      style: {
        name: "Style 1",
        color: "Red",
        image: "https://via.placeholder.com/150"
      },
      options: [
        {
          qty: 10,
          price: 100,
          sold: 5,
          option: "Option 1",
          images: ["https://via.placeholder.com/150"],
          discount: 10,
          _id: "1"
        }
      ],
      _id: "1"
    }
  ]
};

export const productMock = {
  content:
    "Соломини необхідної довжини та кількості, додаткові запасні соломини, вовняні нитки, голка, скотч, покрокова інструкція.  Набір запакований у картонну коробку і не потребує додаткового подарункового пакування.",
  details: [
    {
      name: "Матеріал",
      value: "Жито"
    },
    {
      name: "Складений виріб",
      value: "35*35*45"
    },
    {
      name: "Виробник країна",
      value: "Україна"
    }
  ]
};
