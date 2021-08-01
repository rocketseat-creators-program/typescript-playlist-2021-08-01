import { log } from "./colors";

type GithubUser = { username: string; stars: number };

type logOptions = {
  fields?: {
    "user-id"?: number;
    avatarUrl?: string;
    totalStars?: number;
    getStars?: (user: GithubUser) => number;
  };
};

const user = {
  stars: 100,
  totalStars: 0,
  username: "vitormalencar",
};

const getUser = (user: GithubUser) => {
  const userName = user.username;
  return userName
};
const result = getUser(user);

log(result);
