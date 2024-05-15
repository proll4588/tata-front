import axios from "axios";
import { useState } from "react";

export const useConvertImg = () => {
    const [isLoading, setIsLoading] = useState(false);

    const convertImg = async (img: File): Promise<string[]> => {
        const formData = new FormData();
        formData.append("content", img);

        setIsLoading(true);
        const response = await axios.post(
            "http://127.0.0.1:5000/process_image",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                        "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                },
            }
        );
        setIsLoading(false);
        return response.data.result_image;
    };

    return { isLoading, convertImg };
};
