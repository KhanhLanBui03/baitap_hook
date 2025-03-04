import { useState, useEffect } from 'react';

const DisplayInfor = (props) => {
  const { listUser, handleDeleteUser, handleDeleteAllUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    setIsListEmpty(listUser.length === 0);
  }, [listUser]);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <div>
      <div style={{ color: 'orange', textAlign: 'center' }}>HIDE LIST USER</div>
      <button onClick={handleShowHideListUser}>
        {isShowHideListUser ? 'Hide' : 'Show'}
      </button>
      {isShowHideListUser && (
        <>
          {isListEmpty ? (
            <div style={{ textAlign: 'center', color: 'red' }}>
              The list is empty
            </div>
          ) : (
            <>
              <button 
                onClick={handleDeleteAllUsers}
              >
                Delete All
              </button>
              {listUser.map((user) => {
                return (
                  <div key={user.id} className={user.Age < 18 ? 'red' : 'blue'}>
                    <div>User name is: {user.Name}</div>
                    <div>User Age: {user.Age}</div>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    <hr />
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
