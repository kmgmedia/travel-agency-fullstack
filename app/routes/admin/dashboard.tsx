import { Header} from "../../../components"

const Dashboard = () => {
  const user = { name: 'Moruf'} // Replace with actual user data fetching logic
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}⭐`}
        description="Get live insights into activity, trends, and the most popular destinations."
      />

      Dashboard Page Contents
    </main>
  );
}

export default Dashboard
