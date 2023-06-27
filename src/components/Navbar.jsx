import {Link as RouteLink } from "react-router-dom"
import { Link } from "@chakra-ui/react";

const NavBar = () => {
    return (
        <div
            style={{
                width: "100%",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                background: "#fff",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            }}
        >
            <Link
                as={RouteLink}
                to="/"
                data-testid={"home-page"}
                style={{
                    textDecoration: "none",
                    fontSize: "26px",
                    color: "#000",
                    margin: "0 6px",
                }}
            >
                Student Portal
            </Link>
            <div style={{display: "flex", alignItems: "center"}}>
                <Link
                    as={RouteLink}
                    to="/student"
                    data-testid={"student-page"}
                    style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "lighter",
                        margin: "0 12px",
                    }}
                >
                    All Student
                </Link>
                <Link
                    as={RouteLink}
                    to="/add"
                    data-testid={"add-page"}
                    style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "lighter",
                        margin: "0 12px",
                    }}
                >
                    Add Student
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
