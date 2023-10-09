"use client";

import { useState, useEffect } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
import Slider from "react-slick";
import { BsArrowUpRight } from "react-icons/bs";

import "./repositories.css";

type Repository = {
  id: number;
  name: string;
  pushed_at: string;
  html_url: string;
  language: string;
};

const SLIDER_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 500,
  variableWidth: true,
};

function Repositories({ data }: { data: Repository[] }) {
  const [langInitialised, setLangInitialised] = useState(false);
  useEffect(() => {
    TimeAgo.addDefaultLocale(en);
    setLangInitialised(true);
  }, []);
  return (
    <div>
      <Slider {...SLIDER_SETTINGS}>
        {data.map((repo) => (
          <div
            key={repo.id.toString()}
            className="border rounded border-white/60 p-4 pr-24"
          >
            <h3 className="text-xl">{repo.name}</h3>
            {langInitialised && (
              <ReactTimeAgo
                className="block text-white/80 text-xs mb-4"
                date={new Date(repo.pushed_at)}
              />
            )}
            <div className="mb-20">{repo.language}</div>
            <a
              href={repo.html_url}
              target="_blank"
              className="bg-pink-600 py-2 pl-6 pr-4 border border-transparent rounded-full hover:bg-transparent hover:border hover:border-pink-600 hover:text-pink-600 transition inline-flex space-x-4 items-center"
            >
              <span>Visit repository</span>
              <BsArrowUpRight />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Repositories;
