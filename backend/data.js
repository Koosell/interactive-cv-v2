// backend/data.js
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMK Negeri Jumo', major: 'MULTIMEDIA' },
  { id: 3, period: '2017 - 2020', institution: 'SMP Negeri 1 Jumo', major: 'Umum' },
  { id: 4, period: '2011 - 2017', institution: 'SD Negeri Jumo', major: 'Umum' }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' },
  { name: 'Responsive Design', level: 'Mahir' },
  { name: 'API Development', level: 'Menengah' },
  { name: 'Premiere Pro', level: 'Mahir' },
  { name: 'Figma', level: 'Mahir' },
  { name: 'Photoshop', level: 'Menengah' },
  { name: 'Agile Methodologies', level: 'Menengah' },
  { name: 'Problem Solving', level: 'Mahir' }
];

const projects = [
  {
    title: 'Website Toko TopUp',
    image: 'https://cloud.jpnn.com/photo/arsip/normal/2024/03/01/sukses-dengan-layanan-top-up-game-uc-store-kini-menghadirkan-tuht.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan pembayaran.',
    tech: ['React', 'Laravel', 'Vite'],
    link: '#'
  },
  {
    title: 'Logo Pegasus',
    image: 'https://i.imgur.com/UHeXxFl.png',
    description: 'Logo untuk perusahaan kopi.',
    tech: ['Ilustrator', 'Photoshop'],
    link: '#'
  },
];

module.exports = { educationHistory, skills, projects };