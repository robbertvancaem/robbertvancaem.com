"use client";

import { useState, useEffect } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";

type Repository = {
  id: number;
  name: string;
  pushed_at: string;
};

function Repositories({ data }: { data: Repository[] }) {
  console.log(data);
  const [langInitialized, setLangInitialized] = useState(false);
  useEffect(() => {
    TimeAgo.addDefaultLocale(en);
    setLangInitialized(true);
  }, []);
  return (
    <div>
      {data.map((repo) => (
        <div key={repo.id.toString()}>
          {repo.name}
          {langInitialized && <ReactTimeAgo date={new Date(repo.pushed_at)} />};
        </div>
      ))}
    </div>
  );
}

export default Repositories;
