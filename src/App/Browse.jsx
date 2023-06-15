import React from "react";
import { render } from "react-dom";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { NavLink, Link } from "react-router-dom";
import "./browse.css";
import DefaultLayout from "../Layouts/DefaultLayout";
import Program from "./Program";

const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
    }
  }
`;

export default function Browse() {
  const { data, loading, error } = useQuery(PROGRAMS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  const { programs } = data;

  const backgroundColors = [
    "bg-gradient-to-br from-orange to-pink  pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center",
    "bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center",
    "bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center",
  ];

  return (
    <DefaultLayout
      className={"flex flex-col p-2 m-2 h-max bg-bgdark space-y-4"}
    >
      <h2 className="text-2xl font-bold">Browse</h2>
      {programs.map((program, index) => (
        <Link
          to={`/program/${program.id}`}
          key={`program-${index}`}
          className={`${backgroundColors[index % backgroundColors.length]}`}
        >
          <h2 className="text-2xl font-bold">{program.name}</h2>
        </Link>
      ))}
    </DefaultLayout>
  );
}
