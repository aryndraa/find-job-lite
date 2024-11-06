import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const projectData = [
  {
    id: 1,
    username: 'Hermansyah_Akbar',
    title: 'Mencari Web Developer Untuk Pembuatan Website Profile Sekolah',
    description:
      'Menciptakan tampilan yang menarik untuk meningkatkan brand sekolah dengan desain profesional dan responsif.',
    price: 'Rp. 120.000',
    tags: ['Web Developer', 'UI/UX', 'HTML'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg',
  },
  {
    id: 2,
    username: 'Ahmad_Faisal',
    title: 'Desain Logo Profesional untuk Toko Online',
    description:
      'Memerlukan desain logo yang simpel namun mudah diingat untuk meningkatkan branding toko online kami.',
    price: 'Rp. 80.000',
    tags: ['Desain Grafis', 'Adobe Illustrator', 'Logo'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-man-wearing-blue-shirt_23-2148451295.jpg',
  },
  {
    id: 3,
    username: 'Putri_Maharani',
    title: 'Penerjemahan Artikel dari Bahasa Inggris ke Indonesia',
    description:
      'Mencari penerjemah berpengalaman untuk menerjemahkan artikel ekonomi ke bahasa Indonesia.',
    price: 'Rp. 50.000',
    tags: ['Penerjemah', 'Bahasa Inggris', 'Artikel'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-happy-young-asian-woman_23-2148451777.jpg',
  },
  {
    id: 4,
    username: 'Dika_Saputra',
    title: 'Animasi 2D untuk Video Iklan Produk',
    description:
      'Kami memerlukan animasi 2D yang menarik untuk memperkenalkan produk kami di media sosial.',
    price: 'Rp. 200.000',
    tags: ['Animasi', 'After Effects', 'Iklan'],
    profileImage:
      'https://img.freepik.com/free-photo/handsome-man-smiling-outdoors_23-2148450234.jpg',
  },
  {
    id: 5,
    username: 'Nurul_Hidayati',
    title: 'Konten Media Sosial untuk Perusahaan Fashion',
    description:
      'Membutuhkan konten kreatif dan menarik untuk meningkatkan keterlibatan audiens di media sosial.',
    price: 'Rp. 100.000',
    tags: ['Konten', 'Media Sosial', 'Fashion'],
    profileImage:
      'https://img.freepik.com/free-photo/happy-woman-smiling-outdoors_23-2148450047.jpg',
  },
  {
    id: 6,
    username: 'Rudi_Alfiansyah',
    title: 'Optimasi SEO untuk Website Bisnis Kecil',
    description:
      'Ingin meningkatkan peringkat website bisnis kami di mesin pencari dan menjangkau lebih banyak pelanggan.',
    price: 'Rp. 150.000',
    tags: ['SEO', 'Website', 'Digital Marketing'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-serious-man-wearing-sunglasses_23-2148451298.jpg',
  },
  {
    id: 7,
    username: 'Fadli_Akbar',
    title: 'Pengembangan Aplikasi Mobile untuk E-Learning',
    description:
      'Mencari developer yang mampu mengembangkan aplikasi E-Learning dengan fitur interaktif.',
    price: 'Rp. 300.000',
    tags: ['Mobile Development', 'E-Learning', 'React Native'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-man-in-casual-outfit_23-2148451546.jpg',
  },
  {
    id: 8,
    username: 'Lina_Wardani',
    title: 'Penulisan Artikel untuk Blog Kesehatan',
    description:
      'Kami membutuhkan penulis yang memahami topik kesehatan untuk menulis artikel blog setiap minggu.',
    price: 'Rp. 70.000',
    tags: ['Penulisan', 'Blog', 'Kesehatan'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-asian-woman-in-park_23-2148451775.jpg',
  },
  {
    id: 9,
    username: 'Andri_Firman',
    title: 'Desain Banner untuk Kampanye Iklan',
    description:
      'Memerlukan desain banner yang menarik untuk kampanye iklan di media sosial dan website.',
    price: 'Rp. 90.000',
    tags: ['Desain Grafis', 'Banner', 'Adobe Photoshop'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-man-wearing-t-shirt_23-2148451422.jpg',
  },
  {
    id: 10,
    username: 'Rina_Novita',
    title: 'Pembuatan Video Promosi untuk Produk Digital',
    description:
      'Kami membutuhkan video promosi singkat untuk memperkenalkan produk digital baru kami.',
    price: 'Rp. 250.000',
    tags: ['Video Editing', 'Promosi', 'Produk Digital'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-happy-asian-woman_23-2148451112.jpg',
  },
  {
    id: 11,
    username: 'Yusuf_Surya',
    title: 'Pembuatan Landing Page untuk Startup',
    description:
      'Kami membutuhkan landing page yang eye-catching untuk startup teknologi kami.',
    price: 'Rp. 200.000',
    tags: ['Landing Page', 'UI/UX', 'HTML/CSS'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-man-with-arms-crossed_23-2148451436.jpg',
  },
  {
    id: 12,
    username: 'Sarah_Febrianti',
    title: 'Penerjemahan Dokumen dari Inggris ke Mandarin',
    description:
      'Kami memerlukan penerjemah yang fasih untuk menerjemahkan dokumen resmi ke bahasa Mandarin.',
    price: 'Rp. 150.000',
    tags: ['Penerjemah', 'Bahasa Inggris', 'Mandarin'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-happy-young-woman_23-2148451114.jpg',
  },
  {
    id: 13,
    username: 'Ilham_Fadlan',
    title: 'Pengembangan Web E-Commerce',
    description:
      'Kami membutuhkan web developer untuk membuat situs e-commerce yang mudah digunakan.',
    price: 'Rp. 400.000',
    tags: ['E-Commerce', 'Web Development', 'PHP'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-smiling-man_23-2148451428.jpg',
  },
  {
    id: 14,
    username: 'Arina_Sari',
    title: 'Penulisan Skrip untuk Video Animasi',
    description:
      'Kami memerlukan penulis kreatif untuk membuat skrip menarik untuk video animasi.',
    price: 'Rp. 100.000',
    tags: ['Penulisan Skrip', 'Animasi', 'Kreatif'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-happy-young-asian-woman_23-2148451773.jpg',
  },
  {
    id: 15,
    username: 'Reza_Prima',
    title: 'Pembuatan Desain Kemasan Produk',
    description:
      'Kami membutuhkan desain kemasan yang menarik untuk produk baru kami di pasar.',
    price: 'Rp. 180.000',
    tags: ['Desain Kemasan', 'Adobe Illustrator', 'Produk'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-man-in-casual-outfit_23-2148451549.jpg',
  },
  {
    id: 16,
    username: 'Putra_Nugroho',
    title: 'Pengelolaan Akun Media Sosial untuk Toko Online',
    description:
      'Kami mencari spesialis media sosial untuk mengelola akun dan meningkatkan keterlibatan.',
    price: 'Rp. 120.000',
    tags: ['Media Sosial', 'Pemasaran', 'Instagram'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-man-wearing-casual-outfit_23-2148451551.jpg',
  },
  {
    id: 17,
    username: 'Dewi_Lestari',
    title: 'Pembuatan Blog untuk Situs Kuliner',
    description:
      'Kami memerlukan penulis untuk mengisi konten blog tentang resep dan ulasan kuliner.',
    price: 'Rp. 90.000',
    tags: ['Penulisan Blog', 'Kuliner', 'Konten'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-happy-young-woman_23-2148451113.jpg',
  },
  {
    id: 18,
    username: 'Bayu_Setiawan',
    title: 'Desain Kartu Nama untuk Bisnis Perusahaan',
    description:
      'Kami memerlukan desain kartu nama yang mencerminkan citra profesional perusahaan kami.',
    price: 'Rp. 60.000',
    tags: ['Desain Grafis', 'Kartu Nama', 'Adobe Photoshop'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-handsome-man_23-2148451437.jpg',
  },
  {
    id: 19,
    username: 'Ria_Anggraeni',
    title: 'Penulisan Konten untuk Website Produk Kecantikan',
    description:
      'Mencari penulis konten yang kreatif untuk memperkenalkan produk kecantikan kami.',
    price: 'Rp. 75.000',
    tags: ['Penulisan', 'Kecantikan', 'Website'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-smiling-young-woman_23-2148451115.jpg',
  },
  {
    id: 20,
    username: 'Ardi_Wibowo',
    title: 'Pembuatan Laporan Tahunan untuk Perusahaan',
    description:
      'Kami membutuhkan desainer yang berpengalaman untuk membuat laporan tahunan perusahaan kami.',
    price: 'Rp. 300.000',
    tags: ['Desain', 'Laporan Tahunan', 'Corporate'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-of-young-man-wearing-suit_23-2148451421.jpg',
  },
];

const ProjectCard = ({ username, profileImage, title, description, price, tags }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt={username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-sm font-semibold">{username}</h1>
        </div>
        <div className="text-gray-500 flex items-center gap-1">
          <AiOutlineClockCircle />
          <span className="text-xs">Latest</span>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <div className="flex gap-2 mb-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm font-medium">Start From</h4>
          <h2 className="text-lg font-bold text-green-600">{price}</h2>
        </div>
        <Link to="/project/details-project">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
            Visit Project
          </button>
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ProjectCardList = ({ searchQuery = '' }) => {
  const filteredServices = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {filteredServices.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

ProjectCardList.propTypes = {
  searchQuery: PropTypes.string,
};

export default ProjectCardList;
