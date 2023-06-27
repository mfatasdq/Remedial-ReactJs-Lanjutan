import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Select, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Student = () => {
    const [students, setStudents] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const thText = ["No", "Full Name", "Faculty", "Program Study", "Option"];
    
    const filterKey = [...new Set(students.map((el) => el.faculty))];
    
    const fecthData = () => {
        fetch("http://localhost:3001/student")
        .then((res) => res.json())
        .then((data) => {
            setStudents (data);
            setLoading (false);
        })
        .catch((err) => {
            console.log(err);
            setLoading (false);
        });
    };
    
    const deleteStudent = (id) => {
        fetch(`http://localhost:3001/student/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            fecthData();
        })
        .catch((err) => {
            console.log(err);
        });
    };
    
    useEffect(() => {
        fecthData();
    }, []);
        
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
                <NavBar />
                <div
                    style={{
                        minWidth: "1024px",
                    }}
                >
                    <div
                        style={{
                            margin: "5px 0",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "26px",
                                fontWeight: "lighter",
                            }}
                        >
                            All Student
                        </p>
                        <Select
                            maxWidth="xl"
                            color="#374151"
                            bgColor="#fff"
                            style={{
                                padding: "0.5rem 0.75rem",
                                lineHeight: "1.25",
                                borderRadius: "0.25 rem",
                                borderWidth: "1px",
                                appearance: "none", 
                                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                            }}
                            name="filter"
                            data-testid="filter"
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            {filterKey.map((faculty, index) => {
                                return(
                                    <option key={index} value={faculty}>
                                        {faculty}
                                    </option>
                                );
                            })}        
                        </Select>
                    </div>
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
                                Loading...
                            </p>
                        </div>
                    ) : (
                        <TableContainer>
                            <Table
                                id="table-student"
                                style={{
                                    width: "100%",
                                    margin: "1.5rem 0",
                                    borderRadius: "8px",
                                    overflow: "auto",
                                    overflowY: "auto",
                                    tableLayout: "auto",
                                    backgroundColor: "#fff",
                                    color: "#6b7280",
                                    fontSize: "0.875rem",
                                    textAlign: "left",
                                    lineHeight: "1.25rem",
                                }}
                            >
                                <Thead
                                    style={{
                                        backgroundColor: "#f9fafb",
                                        color: "#374151",
                                        fontSize: "0.75rem",
                                        lineHeight: "1rem",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    <Tr
                                        style={{
                                            backgroundColor: "#fffff",
                                            borderBottomWidth: "1px",
                                        }}
                                    >
                                        {thText.map((th, index) => {
                                            return(
                                                <Th
                                                    key={index}
                                                    style={{
                                                        padding: "0.75rem",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {th}
                                                </Th>
                                            );
                                        })}
                                    </Tr>
                                </Thead>
                                <Tbody id="students-data"> 
                                    {students
                                        .filter((student) => {
                                            return filter === "All"
                                                ? students
                                                : student.faculty === filter;
                                        })
                                        .map((student, index) => {
                                            return (
                                                <Tr
                                                    key={index}
                                                    style={{
                                                        backgroundColor: "#fffff",
                                                        borderBottomWidth: "1px",
                                                    }}
                                                    className="
                                                    "
                                                >
                                                    <Td
                                                        style={{
                                                            padding: "1rem 1.5rem",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </Td>
                                                    <Td
                                                        style={{
                                                            padding: "1rem 1.5rem",
                                                        }}
                                                    >
                                                        <Link 
                                                            to={`/student/${student.id}`}
                                                            style={{
                                                                textDecoration: "none",
                                                                color: "#6b7280",
                                                            }}
                                                        >
                                                            {student.fullname}
                                                        </Link>
                                                    </Td>
                                                    <Td
                                                        style={{
                                                            padding: "1rem 1.5rem"
                                                        }}
                                                    >
                                                        {student.faculty}
                                                    </Td>
                                                    <Td style={{
                                                            padding: "1rem 1.5rem"
                                                        }}
                                                    >
                                                        {student.programStudy}
                                                    </Td>
                                                    <Td
                                                        style={{
                                                            padding: "1rem 1.5rem",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <button
                                                            className={"delete-btn"}
                                                            type="button"
                                                            data-testid={`delete-${student.id}`}
                                                            style={{
                                                                background: "Transparent",
                                                                border: "Transparent",
                                                                color: "#ef4444",
                                                                fontWeight: "700",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() => deleteStudent(
                                                                    student.id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </Td>
                                                </Tr>
                                            );
                                        })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};            
    
export default Student;          
                