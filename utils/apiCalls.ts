import axios from "axios";

export const handleEsewaPayment = async (data: any) => {
    const url = `${process.env.API_URL}/create/order` as string;
    try {
        const response = await axios.post(url, data);
        if (response?.status === 200) {
            esewaCall(response?.data?.payload?.data.formData);
        }
    } catch (error) {
        return 'error';
    }
};

export const esewaCall = (formData: any) => {
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

export const postData = async (data: string) => {
    const url = `${process.env.API_URL}/esewa/success?data=${data}`;
    try {
        const response = await axios.get(url);
        if (response?.status === 200) {
            return response.data.payload.data
        } else {
            throw Error
        }
    } catch (error) {
        throw error
    }
  };

export const recordData = async () => {
    const url = `${process.env.API_URL}/records/`;
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data.payload.data
        } else {
            throw Error
        }
    } catch (error) {
        throw error;
    }
}