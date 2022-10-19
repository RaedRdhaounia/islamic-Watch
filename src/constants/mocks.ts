import dayjs from 'dayjs';
import {
  IArticle,
  IArticleOptions,
  IBasket,
  ICategory,
  IExtra,
  ILocation,
  INotification,
  IProduct,
  IUser,
  IChallenge
} from './types';

// users
export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Devin Coldewey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80',
  },
  {
    id: 2,
    name: 'Bella Audrey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 3,
    name: 'Miriam Lendra',
    department: 'Desktop Publisher',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 4,
    name: 'David Bishop',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
  {
    id: 5,
    name: 'Mathew Glock',
    department: 'HR Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
  {
    id: 6,
    name: 'Emma Roberts',
    department: 'HR Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
];
// images islamics sources 
const ImagesISlamic = [
  "data:image/jpeg;base64,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",
  "https://www.ucf.edu/news/files/2021/04/Ramadan-Celebration.jpg",
  "https://islamonline.net/wp-content/uploads/2022/04/Ramadan-kareem-background.jpg",
  "https://www.ucf.edu/news/files/2021/04/Ramadan-Celebration.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNZcDBONYa1JkZgiNt-Tn1IgSgX8mo7yms2Ax36B6aAMSYRWP7RoVIqRLJf-PkdXLgAk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyabOmHRkwYryqDh_9_IMqzOdNXEKSliFH9b38Lzur_szSxjHE2VNS4mv7pIHQjkTwv0&usqp=CAU",
  "https://images.unsplash.com/photo-1590075865003-e48277faa558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW1pY3xlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSGcJWMj0zCcj30Vc82CjmKNLoypPnXOT529_YqC4j_YP6rj1Bqzp9Tubk-nGH74EE0U&usqp=CAU"
]
// images random get 
const getrandom= (items: any[]) => {
  return items[Math.floor(Math.random()*items.length)];
}

// badges list
export const Badges: IProduct[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'badge title 1',
    image:getrandom(ImagesISlamic)  },
  {
    id: 2,
    type: 'vertical',
    title: 'badge title 2',
    image:getrandom(ImagesISlamic) 
  },
  {
    id: 3,
    type: 'horizontal',
    title: 'badge title 3',
    image:getrandom(ImagesISlamic) 
  },
  {
    id: 4,
    type: 'vertical',
    title: 'badge title4',
    image:getrandom(ImagesISlamic) 
  },
  {
    id: 5,
    type: 'vertical',
    title: 'badge title 5',
    image:getrandom(ImagesISlamic) 
  },
  {
    id: 6,
    type: 'horizontal',
    title: 'badge title 6',
    image:getrandom(ImagesISlamic) 
  },
];

// challenge list
export const Challenges: IChallenge[] = [
  {
    id: 1,
    title: 'challenge title 1',
    friends: ["raed"],
    image:getrandom(ImagesISlamic),
    status: "in progress"  },
  {
    id: 2,
    title: 'challenge title 2',
    friends: ["raed"],
    image:getrandom(ImagesISlamic) ,
    status: "success"
  },
  {
    id: 3,
    title: 'challenge title 3',
    friends: ["Mohammed"],
    image:getrandom(ImagesISlamic),
    status: "failed" 
  },
  {
    id: 4,
    title: 'challenge title4',
    friends: [],
    image:getrandom(ImagesISlamic),
    status:"not started" 
  },
  {
    id: 5,
    title: 'challenge title 5',
    friends: ["Mohammed","raed"],
    image:getrandom(ImagesISlamic),
    status: "in progress"
  },
  {
    id: 6,
    title: 'challenge title 6',
    friends: [],
    image:getrandom(ImagesISlamic),
    status:"not started" 
  },
];

// trending cards
export const TRENDING: IProduct[] = [
  {
    id: 1,
    type: 'horizontal',
    title: 'Experiences and things to do wherever you are.',
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'vertical',
    title: 'The highest status people.',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'vertical',
    title: 'Unique activities with local experts.',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'vertical',
    title: 'Adventures - Multi day trips with meals and stays.',
    image:
      'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?fit=crop&w=450&q=80',
  },
  {
    id: 5,
    type: 'vertical',
    title: 'New ways to meet your business goals.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
  },
];

// categories
export const CATEGORIES: ICategory[] = [
  {id: 1, name: 'Popular'},
  {id: 2, name: 'Newest'},
  {id: 3, name: 'Near'},
  {id: 4, name: 'Yours'},
];

// article options
export const ARTICLE_OPTIONS: IArticleOptions[] = [
  {
    id: 1,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    title: 'Cosy apartment',
    description:
      'Different people have different taste, and various types of music have many ways of leaving an impact on someone.',
    type: 'apartment',
    guests: 3,
    sleeping: {total: 2, type: 'bed'},
    price: 200,
    user: USERS[3],
    image:
      'https://images.unsplash.com/photo-1603034203013-d532350372c6?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[2],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
];

// offers
export const OFFERS: IProduct[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Unique activities with local experts.',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'vertical',
    title: 'The highest status people.',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'vertical',
    title: 'Get more followers and grow.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'vertical',
    title: 'New ways to meet your business goals.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
  },
];

// rental locations
export const LOCATIONS: ILocation[] = [
  {id: 1, city: 'Paris', country: 'France'},
  {id: 2, city: 'Rome', country: 'Italy'},
  {id: 3, city: 'London', country: 'United Kingdom'},
];

// articles
export const ARTICLES: IArticle[] = [
  {
    id: 1,
    title: 'Flexible office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    user: USERS[0],
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    title: 'Global payments in a single integration.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay.',
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
    user: USERS[1],
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    title: 'Working with the latest technologies.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
    user: USERS[2],
    timestamp: dayjs().unix(),
  },
  {
    id: 4,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    user: USERS[3],
    timestamp: dayjs().unix(),
  },
  {
    id: 5,
    title: 'Office space means growth.',
    description: `The mission of LinkedIn is simple: connect the world's professionals.`,
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?fit=crop&w=450&q=80',
    user: USERS[4],
    timestamp: dayjs().unix(),
  },
  {
    id: 6,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    user: USERS[5],
    timestamp: dayjs().unix(),
  },
  {
    id: 7,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    user: USERS[6],
    timestamp: dayjs().unix(),
  },
  {
    id: 8,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    user: USERS[1],
    timestamp: dayjs().unix(),
  },
  {
    id: 9,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    user: USERS[5],
    timestamp: dayjs().unix(),
  },
  {
    id: 10,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    user: USERS[6],
    timestamp: dayjs().unix(),
  },
  {
    id: 11,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.9,
    timestamp: dayjs().unix(),
  },
  {
    id: 12,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.5,
    timestamp: dayjs().unix(),
  },
  {
    id: 13,
    description:
      'The most beautiful and complex UI Kits built by Creative Tim.',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.8,
    timestamp: dayjs().unix(),
  },
];

// rental recommendations
export const RECOMMENDATIONS: IArticle[] = [
  {
    id: 1,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.9,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.5,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    description:
      'The most beautiful and complex UI Kits built by Creative Tim.',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.8,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
];

// chat messages
export const MESSSAGES = [
  {
    _id: 1,
    text: 'Bye, bye 👋🏻',
    createdAt: dayjs().subtract(1, 'm').toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 2,
    text: 'Ok. Cool! See you 😁',
    createdAt: dayjs().subtract(2, 'm').toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
  {
    _id: 3,
    text: 'Sure, just let me finish somerhing and I’ll call you.',
    createdAt: dayjs().subtract(3, 'm').toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 4,
    text: 'Hey there! How are you today? Can we meet and talk about location? Thanks!',
    createdAt: dayjs().subtract(4, 'm').toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
];

// extras cards
export const EXTRAS: IExtra[] = [
  {
    id: 1,
    name: 'BMW X5',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/x5.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 2,
    name: 'Tesla',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/tesla.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 3,
    name: 'Mercedes GLE',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/gle.png'),
    saved: false,
    booked: false,
    available: false,
  },
];

// shopping basket recommentations
export const BASKET_RECOMMENDATIONS: IBasket['items'] = [
  {
    id: 4,
    title: 'Polo T-Shirt',
    description: 'Impeccably tailored in Italy.',
    image:
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?fit=crop&w=450&q=80',
    stock: true,
    qty: 1,
    size: 'M',
    price: 200,
  },
  {
    id: 5,
    title: 'Orange Jacket',
    description: 'Mustard About Me - South Africa',
    image:
      'https://images.unsplash.com/photo-1599407950360-8b8642d423dc?fit=crop&w=450&q=80',
    stock: true,
    qty: 1,
    size: 'M',
    price: 489,
  },
];

// shopping basket
export const BASKET: IBasket = {
  subtotal: 750,
  recommendations: BASKET_RECOMMENDATIONS,
  items: [
    {
      id: 1,
      title: 'Leather Jacket',
      description: 'Impeccably tailored in Italy from lightweight navy.',
      image:
        'https://images.unsplash.com/photo-1562751361-ac86e0a245d1?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'M',
      price: 250,
      qtys: [1, 2, 3, 4, 5],
      sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    {
      id: 2,
      title: 'Dark T-Shirt',
      description: 'Dark-grey slub wool, pintucked notch lapels.',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'l',
      price: 150,
      qtys: [1, 2, 3, 4, 5],
      sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    {
      id: 3,
      title: 'Leather Handbag',
      description: "Immaculate tailoring is TOM FORD's forte",
      image:
        'https://images.unsplash.com/photo-1608060434411-0c3fa9049e7b?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'm',
      price: 350,
      qtys: [1, 2, 3],
      sizes: ['s', 'm', 'l'],
    },
  ],
};

// notifications
export const NOTIFICATIONS: INotification[] = [
  {
    id: 1,
    subject: 'New Message',
    message: 'You have a new message from the owner.',
    type: 'document',
    business: true,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 2,
    subject: 'New Order',
    message: 'A confirmed request by one client.',
    type: 'extras',
    business: true,
    read: false,
    createdAt: dayjs().subtract(4, 'h').toDate(),
  },
  {
    id: 3,
    subject: 'New Likes',
    message: 'Your posts have been liked by 2,342.',
    type: 'notification',
    business: true,
    read: true,
    createdAt: dayjs().subtract(6, 'h').toDate(),
  },
  {
    id: 4,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
  {
    id: 5,
    subject: 'Check your profile',
    message: 'Your profile has new updates.',
    type: 'profile',
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, 'd').toDate(),
  },
  {
    id: 6,
    subject: 'Product Update',
    message: 'Your product has been updated',
    type: 'documentation',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'w').toDate(),
  },
  {
    id: 7,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, 'w').toDate(),
  },
  {
    id: 8,
    subject: 'Learn new things',
    message:
      'Like so many organizations these days, Autodesk is a company in transition. It was until recently.',
    type: 'document',
    business: false,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 9,
    subject: 'Give your best',
    message:
      'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color.',
    type: 'payment',
    business: false,
    read: false,
    createdAt: dayjs().subtract(9, 'h').toDate(),
  },
  {
    id: 10,
    subject: 'Come and meet us',
    message:
      'Technology is applied science. Science is the study of nature. Mathematics is the language of nature.',
    type: 'office',
    business: false,
    read: false,
    createdAt: dayjs().subtract(12, 'h').toDate(),
  },
];

export default {
  USERS,
  Badges,
  Challenges,
  TRENDING,
  CATEGORIES,
  ARTICLES,
  RECOMMENDATIONS,
  MESSSAGES,
  EXTRAS,
  NOTIFICATIONS,
};
