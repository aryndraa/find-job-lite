import React from "react";
import { useState } from "react";
import HeroListFreelancer from "../components/molecules/List Freelancer/Hero/HeroListFreelancer";
import CategoryFilter from "../components/molecules/filter/CategoryFilter";
import SearchBar from "../components/molecules/SearchBar";
import SortingOptions from "../components/molecules/filter/SortingOptions";
import ProjectCard from "../components/molecules/Project/Card/ProjectCardList";
import CardListFreelancer from "../components/molecules/List Freelancer/Card/CardListFreelancer";
import BreadCrumbs from "../components/molecules/BreadCrumbs";
const ListFreelancer = () => {

  const freelanceData = [
    {
      id: 1,
      name: 'Byeon',
      email: 'example@gmail.com',
      projects: 12,
      likes: 10,
      favorites: 120,
      profileImage: 'https://i.pinimg.com/originals/9e/63/8d/9e638d6c84f0de74b01f2c0cee9c1b7f.jpg',
      backgroundImage: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg',
    },
    {
      id: 2,
      name: 'Hermansyah Akbar',
      email: 'hermansyah@example.com',
      projects: 20,
      likes: 15,
      favorites: 250,
      profileImage: 'https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1519557489688-c30c74763166?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Ahmad Faisal',
      email: 'ahmad@example.com',
      projects: 10,
      likes: 8,
      favorites: 180,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-man-wearing-blue-shirt_23-2148451295.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Putri Maharani',
      email: 'putri@example.com',
      projects: 5,
      likes: 12,
      favorites: 95,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-happy-young-asian-woman_23-2148451777.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Dika Saputra',
      email: 'dika@example.com',
      projects: 8,
      likes: 7,
      favorites: 50,
      profileImage: 'https://img.freepik.com/free-photo/handsome-man-smiling-outdoors_23-2148450234.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Rudi Alfiansyah',
      email: 'rudi@example.com',
      projects: 18,
      likes: 20,
      favorites: 210,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-serious-man-wearing-sunglasses_23-2148451298.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      name: 'Fadli Akbar',
      email: 'fadli@example.com',
      projects: 25,
      likes: 30,
      favorites: 500,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-young-man-in-casual-outfit_23-2148451546.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      name: 'Lina Wardani',
      email: 'lina@example.com',
      projects: 16,
      likes: 25,
      favorites: 420,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-young-asian-woman-in-park_23-2148451775.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1513894592977-154cc54504db?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      name: 'Andri Firman',
      email: 'andri@example.com',
      projects: 5,
      likes: 10,
      favorites: 90,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-young-man-wearing-t-shirt_23-2148451422.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1683605899819-443c9a4c694f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
    },
    {
      id: 10,
      name: 'Rina Novita',
      email: 'rina@example.com',
      projects: 12,
      likes: 18,
      favorites: 150,
      profileImage: 'https://img.freepik.com/free-photo/portrait-of-happy-asian-woman_23-2148451112.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1650978813365-eec370598fd6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter freelancers based on the search query
  const filteredFreelancers = freelanceData.filter((freelancer) =>
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const breadLink = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/freelacer",
      name: "freelancer",
    },
    {
      url: "/freelancer/list",
      name: "list freelancer",
    },
  ];
  return (
    <div className="mx-7 lg:mx-16 py-24">
      <BreadCrumbs breadLink={breadLink} />
      <HeroListFreelancer />
      <CategoryFilter />
      <div className="flex items-start flex-col lg:flex-row justify-between gap-5">
      <SearchBar setSearchQuery={setSearchQuery} />
        <div className="mt-2 flex items-end">
          <SortingOptions />
        </div>
      </div>
      <h2 className="text-xl font-bold mt-6">12,000 Results</h2>
      <div className="mt-4">
       <CardListFreelancer freelancers={filteredFreelancers} />
      </div>
    </div>
  );
};

export default ListFreelancer;
