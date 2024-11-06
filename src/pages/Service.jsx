// Service.js
import React from "react";
import { useState } from "react";
import HeroSection from "../components/molecules/Service/Hero/HeroService";
import CategoryFilter from "../components/molecules/filter/CategoryFilter";
import SearchBar from "../components/molecules/SearchBar";
import SortingOptions from "../components/molecules/filter/SortingOptions";
import ServiceCard from "../components/molecules/Service/Card/ServiceCard";
import BreadCrumbs from "../components/molecules/BreadCrumbs";

const Service = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const breadLink = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/service",
      name: "service",
    },
  ];

  return (
    <div className="mx-7 lg:mx-16 py-24">
      <BreadCrumbs breadLink={breadLink} />
      <HeroSection />
      <CategoryFilter />
      <div className="flex items-start flex-col lg:flex-row justify-between gap-5">
      <SearchBar setSearchQuery={setSearchQuery} />
        <div className="mt-2 flex items-end">
          <SortingOptions />
        </div>
      </div>
      <div className=" gap-4 mt-4">
        <ServiceCard searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Service;
