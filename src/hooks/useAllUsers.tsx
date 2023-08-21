// 全ユーザー一覧を取得するカスタムフック
import { useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { UserProfile } from "../types/userProfile";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(users)

  const getUsers = () => {
    setLoading(true);
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }))
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      }
    );
  }
  return { getUsers, users, loading, error }
}