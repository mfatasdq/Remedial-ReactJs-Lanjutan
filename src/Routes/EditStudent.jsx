import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Button, Input} from "@chakra-ui/react"
import Footer from "../components/Footer";

const EditStudent = () => {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(true);// TODO: answer here

    const navigate = useNavigate();
    let { id } = useParams();

    const prody = [
        "Ekonomi",
        "Manajemen",
        "Akuntansi",
        "Administrasi Publik",
        "Administrasi Bisnis",
        "Hubungan Internasional",
        "Teknik Sipil",
        "Arsitektur",
        "Matematika",
        "Fisika",
        "Informatika",
    ];
    
    const editStudent = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/student/${id}`, {
            method: "PUT",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(student),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    navigate("/student");
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (
            student.programStudy === "Ekonomi" ||
            student.programStudy === "Manajemen" ||
            student.programStudy === "Akuntansi"
        ) {
            setStudent({ ...student, faculty: "Fakultas Ekonomi"});
        } else if (
            student.programStudy === "Administrasi Publik" ||
            student.programStudy === "Administrasi Bisnis" ||
            student.programStudy === "Hubungan Internasional"
        ) {
            setStudent({ ...student, faculty: "Fakultas Ilmu Sosial dan Politik"});
        } else if (
            student.programStudy === "Teknik Sipil" ||
            student.programStudy === "Arsitektur"
        ) {
            setStudent({ ...student, faculty: "Fakultas Teknik"});
        } else if (
            student.programStudy === "Matematika" ||
            student.programStudy === "Fisika" ||
            student.programStudy === "Informatika"
        ) {
            setStudent({ ...student, faculty: "Fakultas Teknologi Infomasi dan Sains"});
        }
        
    }, [student.programStudy]);

    useEffect(() => {
        fetch(`http://localhost:3001/student/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setStudent(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Navbar />
                {loading ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <p style={{ fontSize: "20px", fontWeight: "700"}}>
                            Loading ...
                        </p>
                    </div>
                ) : (
                    <div
                        style={{
                            minWidth: "1024px",
                            display: "flex",
                            padding: "20px",
                        }}
                    >
                        <img 
                            src={student?.profilePicture}
                            alt={student?.fullname}
                            style={{
                                width: "144px",
                                height: "144px",
                                marginRight: "20px",
                                borderRadius: "8px",
                            }}
                        />
                        <form
                            id="form-edit-student"
                            style={{
                                width: "100%",
                                background: "#fff",
                                padding: "20px",
                                borderRadius: "8px",
                            }}
                            onSubmit={editStudent}
                        >
                            <div
                                className={student}
                                style={{ marginBottom: "1rem"}}
                            >
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: "0.5rem",
                                        color: "#374151",
                                        fontSize: "0.875rem",
                                        fontWeight: "700",
                                        lineHeight: "1.25rem",
                                    }}
                                    htmlFor="name"
                                >
                                    Fullname
                                </label>
                                <Input 
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        color: "#374151",
                                        lineHeight: "1.25",
                                        width: "100%",
                                        borderRadius: "0.25rem",
                                        borderWidth: "1px",
                                        appearance: "none",
                                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0, 1), 0 1px 2px 0 rgba (0, 0, 0, 0, 06)",
                                    }}
                                    type='text'
                                    name='name'
                                    id='name'
                                    data-testid='name'
                                    required
                                    defaultValue={student?.fullname}
                                    onChange={(e) => setStudent({...student, fullname: e.target.value,
                                    })
                                }
                                />
                            </div>
                            <div
                                className={student}
                                style={{marginBottom: "1rem"}}
                            >
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: "0.5rem",
                                        color: "#374151",
                                        fontSize: "0.875rem",
                                        fontweight: "700",
                                        lineHeight: "1.25rem",
                                    }}
                                    htmlFor='address'
                                >
                                    Address
                                </label>
                                <Input 
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        color: "#374151",
                                        lineHeight: "1.25",
                                        width: "100%",
                                        borderRadius: "0.25rem",
                                        borderWidth: "1px",
                                        appearance: "none",
                                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0, 1), 0 1px 2px 0 rgba (0, 0, 0, 0, 06)",
                                    }}
                                    type='text'
                                    name='address'
                                    id='address'
                                    data-testid='address'
                                    required
                                    defaultValue={student?.address}
                                    onChange={(e) => setStudent({...student, address: e.target.value,})
                                    }
                                /> 
                            </div>
                            <div
                                className={student}
                                style={{marginBottom: "1rem"}}
                            >
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: "0.5rem",
                                        color: "#374151",
                                        fontSize: "0.875rem",
                                        fontweight: "700",
                                        lineHeight: "1.25rem",
                                    }}
                                    htmlFor='phoneNumber'
                                >
                                    Phone Number
                                </label>
                                <Input 
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        color: "#374151",
                                        lineHeight: "1.25",
                                        width: "100%",
                                        borderRadius: "0.25rem",
                                        borderWidth: "1px",
                                        appearance: "none",
                                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0, 1), 0 1px 2px 0 rgba (0, 0, 0, 0, 06)",
                                    }}
                                    type='text'
                                    name='phoneNumber'
                                    id='phoneNumber'
                                    data-testid='phoneNumber'
                                    required
                                    defaultValue={student?.phoneNumber}
                                    onChange={(e) => setStudent({...student, phoneNumber: e.target.value,})
                                    }
                                /> 
                            </div>
                            <div
                                className={student}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                }}
                            > 
                                <div
                                    className={student}
                                    style={{
                                        marginBottom: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <label
                                        style={{
                                            display: "block",
                                            marginBottom: "0.5rem",
                                            color: "#374151",
                                            fontSize: "0.875rem",
                                            fontweight: "700",
                                            lineHeight: "1.25rem",
                                        }}
                                        htmlFor='date'
                                    >
                                        Birth Date
                                    </label>
                                    <Input 
                                        style={{
                                            padding: "0.5rem 0.75rem",
                                            color: "#374151",
                                            lineHeight: "1.25",
                                            width: "100%",
                                            borderRadius: "0.25rem",
                                            borderWidth: "1px",
                                            appearance: "none",
                                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0, 1), 0 1px 2px 0 rgba (0, 0, 0, 0, 06)",
                                        }}
                                        type='date'
                                        name='date'
                                        id='date'
                                        data-testid='date'
                                        required
                                        defaultValue={student?.birthDate}
                                        onChange={(e) => setStudent({...student, birthDate: e.target.value,})
                                        }
                                    />
                                </div>
                                <div
                                    className={student}
                                    style={{
                                        marginBottom: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <label
                                        style={{
                                            display: "block",
                                            marginBottom: "0.5rem",
                                            color: "#374151",
                                            fontSize: "0.875rem",
                                            fontweight: "700",
                                            lineHeight: "1.25rem",
                                        }}
                                        htmlFor='gender'
                                    >
                                        Gender
                                    </label>
                                    <select 
                                        style={{
                                            padding: "0.5rem 0.75rem",
                                            color: "#374151",
                                            lineHeight: "1.25",
                                            width: "100%",
                                            borderRadius: "0.25rem",
                                            borderWidth: "1px",
                                            appearance: "none",
                                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0, 1), 0 1px 2px 0 rgba (0, 0, 0, 0, 06)",
                                        }}
                                        name='gender'
                                        id='gender'
                                        data-testid='gender'
                                        value={student?.gender}
                                        onChange={(e) => setStudent({...student, gender: e.target.value,})
                                        }
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div
                                className={prody}
                                style={{marginBottom: "1rem"}}
                            >
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: "0.5rem",
                                        color: "#374151",
                                        fontSize: "0.875rem",
                                        fontweight: "700",
                                        lineHeight: "1.25rem",
                                    }}
                                    htmlFor='prody'
                                >
                                    Program Study
                                </label>
                                <select
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        color: "#374151",
                                        lineHeight: "1.25",
                                        width: "100%",
                                        borderRadius: "0.25rem",
                                        borderWidth: "1px",
                                        appearance: "none",
                                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0, 1), 0 1px 2px 0 rgba (0, 0, 0, 0, 06)",
                                    }}
                                    name='prody'
                                    id='prody'
                                    value={student?.programStudy}
                                    data-testid='prody'
                                    onChange={(e) => setStudent({...student, programStudy: e.target.value,})
                                    }
                                >
                                    {prody.map((el, index) => (
                                        <option key={index} value={el}>
                                            {el}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className={editStudent}
                                style={{marginBottom: "1rem"}}
                            >
                                <Button
                                    style={{
                                        width: "fit-content",
                                        padding: "0.5rem 1rem",
                                        backgroundColor: "#3b82f6",
                                        color: "#fffff",
                                        fontweight: "700",
                                        borderRadius: "0.25rem",
                                    }}
                                    id="edit-btn"
                                    data-testid="edit-btn"
                                    type="submit"
                                >
                                    Edit Student
                                </Button>    
                            </div>
                        </form>
                    </div>
                )}
                
            </div> 
            <Footer />
        </>
    );
};

export default EditStudent;
