import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

const GitHubRepoComponent = () => {
  const [repos, setRepos] = useState([]);
  const [repoLanguages, setRepoLanguages] = useState({});

  const fetchAllLanguages = async (repositories) => {
    const languagesPromises = repositories.map((repo) =>
      fetchLanguages(repo.owner.login, repo.name)
    );
    const languages = await Promise.all(languagesPromises);
    const languagesObject = Object.assign({}, ...languages);
    setRepoLanguages(languagesObject);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/raghavendrareddy23/repos?sort=updated"
        );
        setRepos(response.data.slice(0, 6));
        fetchAllLanguages(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  const fetchLanguages = async (owner, repoName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repoName}/languages`
      );
      return { [`${owner}/${repoName}`]: response.data };
    } catch (error) {
      console.error("Error fetching languages:", error);
      return {};
    }
  };

  const renderLanguages = (owner, repoName) => {
    const key = `${owner}/${repoName}`;
    const languages = repoLanguages[key];
    if (!languages || Object.keys(languages).length === 0) {
      return (
        <div className="mb-2 text-gray-500">
          Languages: Code yet to be deployed
        </div>
      );
    }

    const langArray = Object.keys(languages);
    const totalSize = langArray.reduce(
      (total, lang) => total + languages[lang],
      0
    );

    return (
      <div className="mb-2">
        {langArray.map((lang) => (
          <span
            key={lang}
            className="bg-gray-200 rounded-full mr-3"
            style={{ width: `${(languages[lang] / totalSize) * 100}%` }}
          >
            {lang}: {((languages[lang] / totalSize) * 100).toFixed(2)}%
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
        <p className="text-center text-5xl" id="projects">Recent Projects</p>
      <div className="flex flex-wrap justify-center">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 px-2 py-4"
          >
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{repo.name}</div>
                <div className="flex justify-between mb-2">
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Clone Repository
                  </button>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Repo
                  </a>
                </div>
                <hr className="my-2" />
                {renderLanguages(repo.owner.login, repo.name)}
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600 flex justify-between">
                    <FaGithub size={20} />
                    Stars | Last Updated: {repo.updated_at.slice(0, 10)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepoComponent;
