import { Box, Center } from "@chakra-ui/react";
import { studentId, studentName } from "../Task";

const Footer = () => {
    return ( 
        <>
            <Box className="footer">
                <Center>
                    <p className="studentName">{studentName}</p>
                    <p className="studentId">{studentId}</p>
                </Center>
            </Box>
        </>
    );
};

export default Footer;
