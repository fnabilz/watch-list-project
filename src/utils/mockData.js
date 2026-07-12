import { ref } from "vue"


const recentActivityList = ref([
  {
    id: 1,
    user: 'Fikri',
    action: 'Added "Dune: Part Two" to his watch list',
    time: '2 minutes ago',
  },
  {
    id: 2,
    user: 'Nabil',
    action: 'Added "The Bear" to his watch list',
    time: '15 minutes ago',
  },
  {
    id: 3,
    user: 'Aisyah',
    action: 'Finished watching "Breaking Bad"',
    time: '1 hour ago',
  },
  {
    id: 4,
    user: 'Haziq',
    action: 'Added "Oppenheimer" to his watch list',
    time: '3 hours ago',
  },
  {
    id: 5,
    user: 'Sofia',
    action: 'Rated "Succession" 5 stars',
    time: '5 hours ago',
  },
  {
    id: 6,
    user: 'Danish',
    action: 'Added "Spider-Man: Across the Spider-Verse" to his watch list',
    time: 'Yesterday',
  },
  {
    id: 7,
    user: 'Iman',
    action: 'Finished watching "The Last of Us"',
    time: '2 days ago',
  },
  {
    id: 8,
    user: 'Husna',
    action: 'Added "Poor Things" to her watch list',
    time: '3 days ago',
  },
])

const userList = ref([
  {
    id: 1,
    user: 'Fikri',
    watchlistCount: 14,
    followers: 128,
    backgroundColor: '#3a7f8e',
  },
  {
    id: 2,
    user: 'Nabil',
    watchlistCount: 7,
    followers: 342,
    backgroundColor: '#d4537e',
  },
  {
    id: 3,
    user: 'Aisyah',
    watchlistCount: 23,
    followers: 89,
    backgroundColor: '#639922',
  },
  {
    id: 4,
    user: 'Haziq',
    watchlistCount: 3,
    followers: 56,
    backgroundColor: '#997a1d',
  },
  {
    id: 5,
    user: 'Sofia',
    watchlistCount: 31,
    followers: 512,
    backgroundColor: '#7f77dd',
  },
  {
    id: 6,
    user: 'Danish',
    watchlistCount: 9,
    followers: 204,
    backgroundColor: '#c65b3f',
  },
  {
    id: 7,
    user: 'Iman',
    watchlistCount: 18,
    followers: 67,
    backgroundColor: '#378add',
  },
  {
    id: 8,
    user: 'Husna',
    watchlistCount: 5,
    followers: 145,
    backgroundColor: '#a34b8f',
  },
])


export { userList, recentActivityList }
