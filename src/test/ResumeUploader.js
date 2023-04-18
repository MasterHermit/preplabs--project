import { Button } from "@chakra-ui/react";

function ResumeUploader() {
    return (
        <Button
            as="label"
            htmlFor="resume-upload"
            variant="solid"
            colorScheme="blue"
            size="md"
            cursor="pointer"
        >
            Upload Resume
            <input
                id="resume-upload"
                type="file"
                style={{ display: "none" }}
                accept=".pdf"
            />
        </Button>
    );
}

export default ResumeUploader;