import axios from "axios";

export const handleEsewaPayment = async (data: any) => {
    const url = `${process.env.API_URL}/create/order` as string;
    try {
        const response = await axios.post(url, data);
        if (response?.status === 200) {
            esewaCall(response?.data?.payload?.data.formData);
        } else {
            console.error("Failed to create order");
        }
    } catch (error) {
        console.log(error);
    }
};

export const esewaCall = (formData: any) => {
    console.log(formData);
    const path = process.env.ESEWA_URL as string;
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", formData[key]);
        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
};

export async function postData(data: string) {
    const url = `${process.env.API_URL}/esewa/success?data=${data}`;
    try {
        const response = await axios.get(url);
        if (response?.status === 200) {
            // redirect user to landing page
            console.log(response.data);
        } else {
            console.error("Failed to create order");
        }
    } catch (error) {
        console.log(error)
        throw error
    }
};