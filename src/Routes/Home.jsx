import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: 'linear-gradient(to right, rgba(2,195,154,0.8), rgba(5, 102, 141,0.8)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdl fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80")',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "#fff",
                }}
            >
                <div
                    style={{
                        paddingRight: "50px",
                        marginRight: "10px",
                        borderRight: "1px solid #fff",          
                    }}
                >
                    <p 
                        style={{
                            fontSize: "26px",
                            fontWeight: "lighter",
                            margin: "0px",
                        }}
                    >
                        Studi Independen
                    </p>
                    <p
                        style={{
                            fontSize: "26px",
                            fontWeight: "lighter",
                            margin: "0px",
                        }}
                    >
                        Kampus Merdeka
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            margin: "6px 0 0 0",
                        }}
                    >
                        RUANGGURU
                    </p>
                </div>
                <div>
                    <p
                        style={{
                            fontSize: "26px",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Student Portal
                    </p>
                    <Button
                        className={Home}
                        type="button"
                        data-testid="student-btn"
                        style={{
                            background: "#lf2937",
                            border: "transparent",
                            padding: "10px",
                            borderRadius: "4px",
                            color: "#fff",
                            fontWeight: "lighter",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/student")}
                    >
                        ALL STUDENT
                    </Button>
                </div>
            </div>
            <Footer />
        </>
    );    
};
export default Home;
