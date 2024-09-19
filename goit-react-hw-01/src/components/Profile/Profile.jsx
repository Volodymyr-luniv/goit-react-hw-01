import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
	return (
		<div className={s.card}>
			<div className={s.cardTop}>
				<img className={s.image} src={image} alt={name} />
				<p className={s.userName}>{name}</p>
				<p className={s.tag}>@{tag}</p>
				<p className={s.location}>{location}</p>
			</div>

			<ul className={s.statsList}>
				<li className={s.statsItem}>
					<span className={s.label}>Followers</span>
					<span className={s.quantity}>{stats.followers}</span>
				</li>
				<li className={s.statsItem}>
					<span className={s.label}>Views</span>
					<span className={s.quantity}>{stats.views}</span>
				</li>
				<li className={s.statsItem}>
					<span className={s.label}>Likes</span>
					<span className={s.quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
