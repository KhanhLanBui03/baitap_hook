import DisplayInfor from './DisplayInfo'
import AddUserInfor from './AddUserInfo'
import { useState } from 'react'


const Mycomponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: 'Dung', Age: 49 },
    { id: 2, Name: 'Hoang', Age: 10 },
    { id: 3, Name: 'Chien', Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userID) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    setListUser(listUserClone);
  };
  const handleDeleteAllUsers = () => {
    setListUser([]);
  };

  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>
      <hr />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
        handleDeleteAllUsers={handleDeleteAllUsers}
      ></DisplayInfor>
    </div>
  );
};
export default Mycomponent;
