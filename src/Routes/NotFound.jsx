import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const NotFound = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div
                className={404}
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h1 style={{ textAlign: "center" }}>404 | Not Found</h1>
                <Button
                    data-testid="back"
                    style={{
                        background: "#1f2937",
                        border: "transparent",
                        padding: "10px",
                        borderRadius: "4px",
                        color: "#fff",
                        fontWeight: "lighter",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate(-1)}
                >
                    Take Me Back
                </Button>
            </div>
        </>
    );
};

export default NotFound;
