import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';
import {MouseEventHandler} from "react";

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers:MouseEventHandler<HTMLButtonElement> // пропиши типизацию

};

export const UserList2 = (props: UserList2PropsType) => {


	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={ props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user) => (
			    <CurrentUser  user={user} />
			  ))}
			</ul>
		</div>
	);
};
