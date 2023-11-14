

export const validateFields = (data, setError) => {
    const isFormFilled = Object.values(data).every((item) => item.trim() !== "");
    if (!isFormFilled) {
        for (const key in data) {
            if (data[key].trim() === "") {
                setError((prev) => {
                    return {
                        ...prev,
                        [key]: true,
                    };
                });
            }
        }
    }
    return isFormFilled;
};