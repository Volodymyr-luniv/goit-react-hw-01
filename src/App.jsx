import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./assets/friends.json";
import userData from "./assets/userData.json";
import transactions from "./assets/transactions.json";
import s from "./App.module.css";

const App = () => {
	return (
		<div className={s.appContainer}>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	);
};

export default App;
