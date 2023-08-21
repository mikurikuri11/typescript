import './App.css'
import { UserCard } from './components/UserCard'
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, users, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <>
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p style={{ color: 'red' }}>データの取得に失敗しました。</p>
      ) : null}
      {loading ? (
        <p>Loading...</p>
      ) : null}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}

export default App
