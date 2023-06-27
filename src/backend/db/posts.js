import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const ross = [
  {
    _id: '2',
    content: 'Ready for thanksgiving dinner.',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687708681/chirper/Posts/ross-1_bwbbdj.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'ross123',
    createdAt: new Date('2022-11-24T12:00:00'),
    updatedAt: new Date('2023-11-24T12:00:00'),
  },
  {
    _id: '5',
    content:
      'We were on a break! It was 5:30 in the morning and she had rambled on for 18 pages. FRONT AND BACK!',
    mediaURL: '',
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'ross123',
    createdAt: new Date('2023-01-15T14:30:00'),
    updatedAt: new Date('2023-01-15T14:30:00'),
  },
  {
    _id: '12',
    content:
      'Unagi, is a state of total awareness. Only by acheiving true unagi can you be prepared for any danger that may befall you!',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687709102/chirper/Posts/ross-2_he3kmf.jpg',
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'ross123',
    createdAt: new Date('2023-03-14T03:00:00'),
    updatedAt: new Date('2023-03-14T03:00:00'),
  },
  {
    _id: '13',
    content: 'Found this genuine pterodactyl egg during one of my digs.',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687709469/chirper/Posts/ross-3_sjkvhc.jpg',
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'ross123',
    createdAt: new Date('2023-05-08T04:15:00'),
    updatedAt: new Date('2023-05-08T04:15:00'),
  },
  {
    _id: '17',
    content:
      "Marriages are a $40B a year industry and I'm responsible for just like a half of that. Next time it's gonna be Hawai at sunset.",
    mediaURL: '',
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'ross123',
    createdAt: new Date('2023-06-25T10:30:00'),
    updatedAt: new Date('2023-06-25T10:30:00'),
  },
];

const joey = [
  {
    _id: '3',
    content: 'Could I be wearing any more clothes?',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687710321/chirper/Posts/joey-1_rrzhdw.jpg',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'joey87',
    createdAt: new Date('2023-03-21T13:15:00'),
    updatedAt: new Date('2023-03-21T13:15:00'),
  },
  {
    _id: '7',
    content:
      "Out on a dinner date with this beautiful lady. I hope she knows that Joey doesn't share food!",
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687710563/chirper/Posts/joey-2_rif3ke.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'joey87',
    createdAt: new Date('2023-04-02T19:30:00'),
    updatedAt: new Date('2023-04-02T19:30:00'),
  },
  {
    _id: '10',
    content: 'Got this cool bracelet for my best friend Chandler.',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687711523/chirper/Posts/joey-3_k9bzyg.jpg',
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'joey87',
    createdAt: new Date('2023-05-12T00:30:00'),
    updatedAt: new Date('2023-05-12T00:30:00'),
  },
  {
    _id: '14',
    content:
      'Going out on a walk to organize my thoughts. Might have a brownie while coming back.',
    mediaURL: '',
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'joey87',
    createdAt: new Date('2023-03-29T05:30:00'),
    updatedAt: new Date('2023-03-29T05:30:00'),
  },
  {
    _id: '19',
    content:
      'Cleaning my Porche before taking it out on a ride. Sharing the insights of my equity investments which got me this car with this gentleman',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687712668/chirper/Posts/joey-4_lixrlj.jpg',
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'joey87',
    createdAt: new Date('2023-02-15T05:30:00'),
    updatedAt: new Date('2023-02-15T05:30:00'),
  },
  {
    _id: '20',
    content: `Years ago, when I was backpacking across Western Europe, I was just outside Barcelona, hiking in the foothills of mount Tibidabo. I was at the end of this path, and I came to a clearing, and there was a lake, very secluded, and there were tall trees all around. It was dead silent. Gorgeous. And across the lake I saw, a beautiful woman.`,
    mediaURL: '',
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'joey87',
    createdAt: new Date('2023-06-25T05:30:00'),
    updatedAt: new Date('2023-06-25T05:30:00'),
  },
];

const chandler = [
  {
    _id: '4',
    content: 'Successfully smiled for a photo without getting awkward.',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687716883/chirper/Posts/Chandler/chandler-1_o2ka4b.jpg',
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-01-16T13:15:00'),
    updatedAt: new Date('2023-01-16T13:15:00'),
  },
  {
    _id: '8',
    content:
      "Lucky to have her! She is smart, sweet and I don't how but she is always right!",
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687717198/chirper/Posts/Chandler/chandler-2_nootje.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-02-24T20:45:00'),
    updatedAt: new Date('2023-02-24T20:45:00'),
  },
  {
    _id: '11',
    content:
      'This cheesecake was delievered to my house by mistake. But it was too delicious to return.',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687718394/chirper/Posts/Chandler/chandler-4_zdr03l.jpg',
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-03-13T01:45:00'),
    updatedAt: new Date('2023-03-13T01:45:00'),
  },
  {
    _id: '15',
    content:
      "I'm not great at the advice. Can I interest you in a sarcastic comment?",
    mediaURL: '',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-04-18T06:45:00'),
    updatedAt: new Date('2023-04-18T06:45:00'),
  },
  {
    _id: '16',
    content: 'Ross is very excited for my wedding.',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687717551/chirper/Posts/Chandler/chandler-3_qwkc67.jpg',
    likes: {
      likeCount: 17,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-05-06T08:00:00'),
    updatedAt: new Date('2023-05-06T08:00:00'),
  },
  {
    _id: '18',
    content:
      "Enjoying the weekend with Joey watching Baywatch, we're not gonna move at all!",
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687717809/chirper/Posts/Chandler/chander-4_dlmtub.jpg',
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-05-25T11:45:00'),
    updatedAt: new Date('2023-05-25T11:45:00'),
  },

  {
    _id: '21',
    content:
      "Quit my job to do something I really love. I found advertising quite interesting so took my shot in it. Today is my first day as Junior Copyrighter. Monica has been very supportive of this decision. Couldn't have done without her.",
    mediaURL: '',
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chandlerbing',
    createdAt: new Date('2023-06-19T01:45:00'),
    updatedAt: new Date('2023-06-19T01:45:00'),
  },
];

const rachel = [
  {
    _id: '24',
    content: `Celebrating life's little victories today! From nailing that big presentation to finally finding the perfect shade of lipstick, every small achievement deserves to be acknowledged. Let's raise a virtual toast to the power of determination, resilience, and a touch of sparkle! Cheers, darlings! `,
    mediaURL: '',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'rachel92',
    createdAt: new Date('2023-04-11T22:00:00'),
    updatedAt: new Date('2023-04-11T22:00:00'),
  },
  {
    _id: '25',
    content: `Took Joey out on sailing in his new boat, The Mr. Beaumont.`,
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687853107/chirper/Posts/Rachel/rachel-1_bvnfmr.png',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'rachel92',
    createdAt: new Date('2023-04-12T22:00:00'),
    updatedAt: new Date('2023-04-12T22:00:00'),
  },
  {
    _id: '26',
    content: `Moved in with my best friend Monica. Cheers to the new beginnings.`,
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687853827/chirper/Posts/Rachel/rachel-2_xixbkc.jpg',

    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'rachel92',
    createdAt: new Date('2023-01-10T22:00:00'),
    updatedAt: new Date('2023-01-10T22:00:00'),
  },
  {
    _id: '27',
    content: `I got off the plane!`,
    mediaURL: '',

    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'rachel92',
    createdAt: new Date('2023-06-20T22:00:00'),
    updatedAt: new Date('2023-06-20T22:00:00'),
  },
  {
    _id: '28',
    content: `Got a job at Ralph Lauren! Today is my first day. Very excited.`,
    mediaURL: '',

    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'rachel92',
    createdAt: new Date('2023-03-17T22:00:00'),
    updatedAt: new Date('2023-03-17T22:00:00'),
  },
];

const phoebe = [
  {
    _id: '6',
    content: 'Smelly Cat, Smelly Cat, what are they feeding you?',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687719293/chirper/Posts/Phoebe/phoebe-1_mcvmvc.jpg',
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'phoebe123',
    createdAt: new Date('2023-01-24T15:45:00'),
    updatedAt: new Date('2023-01-24T15:45:00'),
  },

  {
    _id: '9',
    content:
      'Got married to the love of my life. Introducing Mr. & Mrs. Mike Hannigan',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687719413/chirper/Posts/Phoebe/phoebe-2_xihjbc.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'phoebe123',
    createdAt: new Date('2023-05-20T22:00:00'),
    updatedAt: new Date('2023-05-20T22:00:00'),
  },

  {
    _id: '22',
    content: 'Favourite place to have coffee and sing while playing my guitar',
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687720348/chirper/Posts/Phoebe/phoebe-3_ijlg2t.jpg',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'phoebe123',
    createdAt: new Date('2023-04-15T22:00:00'),
    updatedAt: new Date('2023-04-15T22:00:00'),
  },
  {
    _id: '23',
    content:
      'Jamming with my guitar and a cup of coffee, brewing my creative energy! Music is a language that connects souls across the world.',
    mediaURL: '',
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'phoebe123',
    createdAt: new Date('2023-03-08T22:00:00'),
    updatedAt: new Date('2023-03-08T22:00:00'),
  },
];

const monica = [
  {
    _id: '29',
    content: `Baking some delicious chocolate cookies today.`,
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687873306/chirper/Posts/Monica/monica-1_jb8joa.jpg',

    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chefmonica',
    createdAt: new Date('2023-01-12T22:00:00'),
    updatedAt: new Date('2023-01-12T22:00:00'),
  },
  {
    _id: '30',
    content: `Embracing my inner Monica and tackling spring cleaning like a boss! 🧹✨ There's something incredibly satisfying about decluttering, organizing, and making every corner of your space sparkle.`,
    mediaURL: '',

    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chefmonica',
    createdAt: new Date('2023-02-02T22:00:00'),
    updatedAt: new Date('2023-02-02T22:00:00'),
  },
  {
    _id: '31',
    content: `Morning coffee with him. Could my life BE any more perfect?`,
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687873724/chirper/Posts/Monica/monica-2_buz2h3.jpg',

    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chefmonica',
    createdAt: new Date('2023-03-26T22:00:00'),
    updatedAt: new Date('2023-03-26T22:00:00'),
  },
  {
    _id: '32',
    content: `We're all booked for the next week here at Javu's. Way to go head chef!`,
    mediaURL: '',

    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chefmonica',
    createdAt: new Date('2023-04-15T22:00:00'),
    updatedAt: new Date('2023-04-15T22:00:00'),
  },
  {
    _id: '33',
    content: `I said YES!`,
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687874027/chirper/Posts/Monica/monica-3_buffls.jpg',

    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chefmonica',
    createdAt: new Date('2023-06-14T22:00:00'),
    updatedAt: new Date('2023-06-14T22:00:00'),
  },
  {
    _id: '34',
    content: `Had a great thanksgiving dinner with my friends. I am the best hostest.`,
    mediaURL:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687874119/chirper/Posts/Monica/monica-4_anjokb.jpg',

    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'chefmonica',
    createdAt: new Date('2023-05-30T22:00:00'),
    updatedAt: new Date('2023-05-30T22:00:00'),
  },
];

export const posts = [
  {
    _id: '100',
    content: 'Nice Weather Today😃!!',
    mediaURL:
      'https://res.cloudinary.com/dptfwcnro/image/upload/v1685682649/SocialBuzz/photo-1570478050568-4a5b7a82159f_vy947n.avif',
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'harshmohite09',
    createdAt: new Date('04/06/2023'),
    updatedAt: formatDate(),
  },
  {
    _id: '200',
    content: 'Going on a trip with my friends soon.',
    mediaURL: '',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'harshmohite09',
    createdAt: new Date('02/05/2023'),
    updatedAt: formatDate(),
  },
  {
    _id: '300',
    content: 'Coding in React JS is fun.',
    mediaURL: '',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'harshmohite09',
    createdAt: new Date('06/25/2023'),
    updatedAt: formatDate(),
  },
  ...ross,
  ...joey,
  ...chandler,
  ...rachel,
  ...phoebe,
  ...monica,
];
