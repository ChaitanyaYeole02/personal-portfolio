import projectOcr from "../../public/projectOcr.png";
import projectBMS from "../../public/projectBMS.png";

export const projectsData = [
    {
        title: "IMDb Score Prediction System",
        description:
            "Anticipated IMDb scores with a predictive model using ensemble learning, enhancing user experience by employing ReactJS, MUI, and JavaScript for a dynamic front-end, and Python Flask for robust backend operations. CI/CD using AWS CodePipeline.",
        tags: ["Python", "PyTorch", "React", "MUI", "Ensemble Models"],
        imageUrl: projectOcr,
        hoverImageUrl: projectOcr, // You can use the same image or import a different one
        url: "#", // Add your project URL here
    },
    {
        title: "Bookstore Management System",
        description:
            "Developed a bookstore management platform reducing search times to 46ms for 10,000+ books. Improved scalability and efficiency with a relational database, and streamlined deployment with Docker.",
        tags: ["FastAPI", "AWS Lambda", "SQL", "Docker"],
        imageUrl: projectBMS,
        hoverImageUrl: projectBMS, // You can use the same image or import a different one
        url: "#", // Add your project URL here
    },
    {
        title: "Health Monitoring Dashboard",
        description:
            "Achieved real-time monitoring of over 50 patients' health metrics by developing a central hub that aggregates data streams from 78 medical devices using WebSockets and AWS IoT Core.",
        tags: ["Websockets", "AWS IoT Core", "Python", "React", "Next.js", "SQL", "MongoDB"],
        imageUrl: projectOcr,
        hoverImageUrl: projectOcr, // You can use the same image or import a different one
        url: "#", // Add your project URL here
    },
    {
        title: "Handwriting-Based Mental Health Analysis",
        description:
            "Predicted mental health states with a handwriting analysis model using SVM classifiers. Improved image quality with Adobe Photoshop and OpenCV pre-processing pipeline, and enabled sample analysis via a web portal.",
        tags: ["Python", "SVM Classifier", "React", 'Django'],
        imageUrl: projectOcr,
        hoverImageUrl: projectOcr, // You can use the same image or import a different one
        url: "#", // Add your project URL here
    },
    {
        title: "OCR using Google Cloud Platform",
        description:
            "Achieved real-time text extraction and multilingual translation by developing an OCR system with Google Vision API. Engineered an efficient image storage workflow on Google Cloud Platform, leveraging the OCR module for seamless text processing.",
        tags: ["Google Vision API", "GCP", "SQL"],
        imageUrl: projectOcr,
        hoverImageUrl: projectOcr, // You can use the same image or import a different one
        url: "#", // Add your project URL here
    },
    {
        title: "Molecular Solubility Prediction Using Deep Graph Neural Networks",
        description:
            "Predicted compound solubility in water by training a deep graph neural network in PyTorch, significantly advancing the accuracy of molecular solubility predictions.",
        tags: ["PyTorch", "GNNs", "Deep Learning"],
        imageUrl: projectOcr,
        hoverImageUrl: projectOcr, // You can use the same image or import a different one
        url: "#", // Add your project URL here
    },
];
