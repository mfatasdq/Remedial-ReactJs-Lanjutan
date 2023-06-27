import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from '@chakra-ui/react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { studentId } from '../Task';

const AddStudent = () => {  
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const [programStudy, setProgramStudy] = useState('')

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

    const addStudent = (e) => {
        e.preventDefault();

        let faculty = "";

        if (
            programStudy === "Ekonomi" ||
            programStudy === "Manajemen" ||
            programStudy === "Akuntansi"
        ) {
            faculty = "Fakultas Ekonomi";
        } else if (
            programStudy === "Administrasi Publik" ||
            programStudy === "Administrasi Bisnis" ||
            programStudy === "Hubungan Internasional"
        ) {
            faculty = "Fakultas Ilmu Sosial dan Politik";
        } else if (
            programStudy === "Teknik Sipil" ||
            programStudy === "Arsitektur"
        ) {
            faculty = "Fakultas Teknik";
        } else if (
            programStudy === "Matematika" ||
            programStudy === "Fisika" ||
            programStudy === "Informatika"
        ) {
            faculty = "Fakultas Teknologi Infomasi dan Sains";
        }

        fetch ("http://localhost:3001/student", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                fullname,
                profilePicture,
                address,
                phoneNumber,
                birthDate,
                gender,
                faculty,
                programStudy,
            }),
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

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    flex: "column",
                    alignItems: "center",
                }}
            >
                <NavBar />
                <div
                    style={{
                        minWidth: "1024px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "26px",
                            fontWeight: "lighter",
                        }}
                    >
                        Add Student
                    </p>
                    <form
                        id="form-add-student"
                        style={{
                            width: "100%",
                            background: "#fff", 
                            padding: "20px", 
                            borderRadius: "8px",
                        }}
                        onSubmit={addStudent}
                    >
                        <div
                            className={fullname}
                            style={{ marginBottom: "1rem" }}
                        >   
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "8.5rem",
                                    color: "#374151",
                                    fontSize: "0.875 rem",
                                    fontweight: "700",
                                    LineHeight: "1.25rem",
                                }}
                                htmlFor ="name"
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
                                placeholder='Jhon Doe'
                                required
                                onChange={(e) => setFullname(e.target.value)}
                            /> 
                        </div>
                        <div
                            className={profilePicture}
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
                                htmlFor='profilePicture'
                            >
                                Profile Picture
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
                                name='profilePicture'
                                id='profilePicture'
                                data-testid='profilePicture'
                                placeholder='https://placehold.com/image.jpg'
                                required
                                onChange={(e) => setProfilePicture(e.target.value)}
                            />
                        </div>
                        <div
                            className={address}
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
                                placeholder='City, Country'
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            /> 
                        </div>
                        <div
                            className={phoneNumber}
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
                                placeholder='+628XXXXXXXX'
                                required
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div
                            className={studentId}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "1rem",
                                flexWrap: "wrap",
                            }}
                        > 
                            <div
                                className={birthDate}
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
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </div>
                            <div
                                className={gender}
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
                                <Select 
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
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Select>
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
                                htmlFor='programStudy'
                            >
                                Program Study
                            </label>
                            <Select
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
                                data-testid='prody'
                                required
                                onChange={(e) => setProgramStudy(e.target.value)}
                            >
                                <option value="">
                                    Choose your program study
                                </option>
                                {prody.map((el, index) => (
                                    <option key={index} value={el}>
                                        {el}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div
                            className={addStudent}
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
                                id="add-btn"
                                data-testid="add-btn"
                                type="submit"
                            >
                                    Add Student
                            </Button>    
                        </div>
                    </form>
                </div>        
            </div>
            <Footer />
        </>
    );
};

export default AddStudent;
