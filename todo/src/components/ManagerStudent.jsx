import { useEffect, useState, useRef, useMemo, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const studentReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return [...state, action.payload];
        case 'UPDATE_STUDENT':
            return state.map(student =>
                student.id === action.payload.id ? action.payload : student
            );
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
    const [score, setScore] = useState('');
    const [editingId, setEditingId] = useState(null);
    const inputRef = useRef();

    // Load danh sách sinh viên từ localStorage khi mở trang
    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        if (storedStudents) {
            dispatch({ type: 'SET_STUDENTS', payload: storedStudents });
        }
    }, []);

    // Lưu danh sách sinh viên vào localStorage khi có sự thay đổi
    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    // Tính điểm trung bình
    const averageScore = useMemo(() => {
        if (students.length === 0) return 0;
        const total = students.reduce((sum, student) => sum + student.score, 0);
        return (total / students.length).toFixed(2);
    }, [students]);

    // Thêm sinh viên
    const handleAddStudent = () => {
        if (!name.trim() || isNaN(score) || score < 0 || score > 10) return;
        const newStudent = {
            id: Date.now(),
            name,
            score: Number(score)
        };
        dispatch({ type: 'ADD_STUDENT', payload: newStudent });
        setName('');
        setScore('');
        inputRef.current.focus();
    };

    // Sửa sinh viên
    const handleUpdateStudent = () => {
        if (!name.trim() || isNaN(score) || score < 0 || score > 10) return;
        dispatch({ type: 'UPDATE_STUDENT', payload: { id: editingId, name, score: Number(score) } });
        setEditingId(null);
        setName('');
        setScore('');
        inputRef.current.focus();
    };

    // Chỉnh sửa sinh viên
    const handleEdit = (student) => {
        setEditingId(student.id);
        setName(student.name);
        setScore(student.score);
        inputRef.current.focus();
    };

    // Xóa sinh viên
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_STUDENT', payload: id });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Quản Lý Sinh Viên</h2>
            <div className="card p-3">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tên sinh viên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Điểm"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                {editingId ? (
                    <button className="btn btn-warning" onClick={handleUpdateStudent}>Sửa điểm</button>
                ) : (
                    <button className="btn btn-success" onClick={handleAddStudent}>Thêm sinh viên</button>
                )}
            </div>

            <h3 className="mt-4">Danh sách sinh viên</h3>
            <ul className="list-group">
                {students.map(student => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{student.name} - {student.score} điểm</span>
                        <div>
                            <button className="btn btn-info btn-sm me-2" onClick={() => handleEdit(student)}>Sửa</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>Xóa</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h3 className="mt-4">Điểm trung bình: <span className="text-primary">{averageScore}</span></h3>
        </div>
    );
}

export default ManagerStudent;
