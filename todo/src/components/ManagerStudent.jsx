import { useEffect, useState, useRef, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const studentReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_OR_UPDATE_STUDENT': {
            return state.some(student => student.id === action.payload.id)
                ? state.map(student => student.id === action.payload.id ? action.payload : student)
                : [...state, action.payload];
        }
        case 'DELETE_STUDENT':
            return state.filter(student => student.id !== action.payload);
        case 'SET_STUDENTS':
            return action.payload;
        default:
            return state;
    }
};

function ManagerStudent() {
    const [students, dispatch] = useReducer(studentReducer, []);
    const [name, setName] = useState('');
    const [score1, setScore1] = useState('');
    const [score2, setScore2] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        if (storedStudents) {
            dispatch({ type: 'SET_STUDENTS', payload: storedStudents });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const validateInput = () => {
        if (!name.trim()) return "Tên sinh viên không được để trống!";
        if (!/^[0-9]+(\.[0-9]+)?$/.test(score1) || score1 < 0 || score1 > 10) return "Điểm 1 phải là số từ 0 đến 10!";
        if (!/^[0-9]+(\.[0-9]+)?$/.test(score2) || score2 < 0 || score2 > 10) return "Điểm 2 phải là số từ 0 đến 10!";
        return "";
    };

    const handleAddOrUpdateStudent = () => {
        const validationError = validateInput();
        if (validationError) {
            setError(validationError);
            return;
        }
        const avgScore = ((Number(score1) + Number(score2)) / 2).toFixed(2);
        const newStudent = {
            id: editingId || Date.now(),
            name,
            score1: Number(score1),
            score2: Number(score2),
            avgScore: Number(avgScore)
        };
        dispatch({ type: 'ADD_OR_UPDATE_STUDENT', payload: newStudent });
        setName('');
        setScore1('');
        setScore2('');
        setEditingId(null);
        setError('');
        inputRef.current.focus();
    };

    const handleEdit = (student) => {
        setEditingId(student.id);
        setName(student.name);
        setScore1(student.score1);
        setScore2(student.score2);
        setError('');
        inputRef.current.focus();
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_STUDENT', payload: id });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Quản Lý Sinh Viên</h2>
            <div className="card p-3">
                {error && <div className="alert alert-danger">{error}</div>}
                <input ref={inputRef} type="text" className="form-control mb-2" placeholder="Tên sinh viên" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" className="form-control mb-2" placeholder="Điểm 1" value={score1} onChange={(e) => setScore1(e.target.value)} />
                <input type="number" className="form-control mb-2" placeholder="Điểm 2" value={score2} onChange={(e) => setScore2(e.target.value)} />
                <button className={`btn ${editingId ? 'btn-warning' : 'btn-success'}`} onClick={handleAddOrUpdateStudent}>
                    {editingId ? 'Cập nhật' : 'Thêm sinh viên'}
                </button>
            </div>

            <h3 className="mt-4">Danh sách sinh viên</h3>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>STT</th>
                            <th>Tên sinh viên</th>
                            <th>Điểm 1</th>
                            <th>Điểm 2</th>
                            <th>Điểm TB</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">Không có sinh viên nào</td>
                            </tr>
                        ) : (
                            students.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.score1}</td>
                                    <td>{student.score2}</td>
                                    <td>{student.avgScore}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm me-2" onClick={() => handleEdit(student)}>Sửa</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>Xóa</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManagerStudent;