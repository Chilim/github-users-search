import React from "react";
import RepoItem from "./RepoItem";
import Proptypes from "prop-types";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propType = {
  repos: Proptypes.array.isRequired
};

export default Repos;
