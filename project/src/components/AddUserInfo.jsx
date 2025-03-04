import { useState } from 'react';
const AddUserInfor = (props) => {
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'Name') {
      setName(event.target.value);
    } else {
      setAge(event.target.value);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + 'user',
      Name: Name,
      Age: Age,
    });
    setName('');
    setAge('');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <hr />
        <div>
          <label style={{ color: 'black' }}>Name:</label>
          <input type='text' name='Name' value={Name} onChange={handleChange} />
        </div>

        <div>
          <label style={{ color: 'black' }}>Age:</label>
          <input type='text' name='Age' value={Age} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
