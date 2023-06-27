import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '1',
    firstName: 'Harsh',
    lastName: 'Mohite',
    username: 'harshmohite09',
    password: 'harsh123',
    bio: 'This is my bio',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687718901/chirper/Photo-2-modified_afznog.png',
    website: 'https://linktr.ee/harshm_09',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '2',
    firstName: 'Ross',
    lastName: 'Geller',
    username: 'ross123',
    password: 'password123',
    bio: 'Paleontologist. Divorced three times. Loves dinosaurs!',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687702738/chirper/Avatars/ross-gellar_qxamd5.jpg',
    website: 'https://example.com/ross',
    createdAt: new Date('2023-06-24T10:30:00'),
    updatedAt: new Date('2023-06-24T10:30:00'),
  },
  {
    _id: '3',
    firstName: 'Rachel',
    lastName: 'Green',
    username: 'rachel92',
    password: 'password456',
    bio: 'Fashion enthusiast. Shopaholic. Currently working at Ralph Lauren.',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687702932/chirper/Avatars/rachel-green_dv70hl.jpg',
    website: 'https://example.com/rachel',
    createdAt: new Date('2023-06-24T11:45:00'),
    updatedAt: new Date('2023-06-24T11:45:00'),
  },
  {
    _id: '4',
    firstName: 'Monica',
    lastName: 'Geller',
    username: 'chefmonica',
    password: 'pa$$w0rd!',
    bio: 'Tidy and competitive. Passionate about cooking and cleaning.',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687703084/chirper/Avatars/monica-gellar_jqjrys.jpg',
    website: 'https://example.com/monica',
    createdAt: new Date('2023-06-24T14:00:00'),
    updatedAt: new Date('2023-06-24T14:00:00'),
  },
  {
    _id: '5',
    firstName: 'Joey',
    lastName: 'Tribbiani',
    username: 'joey87',
    password: 'howyoudoin',
    bio: "Aspiring actor. Loves food and women. 'How you doin'?'",
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687703295/chirper/Avatars/joey-tribbiani_xldrnq.jpg',
    website: 'https://example.com/joey',
    createdAt: new Date('2023-06-24T15:15:00'),
    updatedAt: new Date('2023-06-24T15:15:00'),
  },
  {
    _id: '6',
    firstName: 'Chandler',
    lastName: 'Bing',
    username: 'chandlerbing',
    password: 'sarcasm123',
    bio: 'Sarcastic and funny. Could he BE any more sarcastic?',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687703341/chirper/Avatars/chandler-bing_aujhbs.jpg',
    website: 'https://example.com/chandler',
    createdAt: new Date('2023-06-24T16:30:00'),
    updatedAt: new Date('2023-06-24T16:30:00'),
  },
  {
    _id: '7',
    firstName: 'Phoebe',
    lastName: 'Buffay',
    username: 'phoebe123',
    password: 'smellycat',
    bio: 'Quirky musician. Believes in spirits and karma. Smelly Cat, Smelly Cat...',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dbiyvbal5/image/upload/v1687703452/chirper/Avatars/phoebe-buffay_jrfvkl.jpg',
    website: 'https://example.com/phoebe',
    createdAt: new Date('2023-06-24T17:30:00'),
    updatedAt: new Date('2023-06-24T17:30:00'),
  },
];
