import axios from "axios";

export const handleEsewaPayment = async () => {
    const url = "https://api-pz.mindxcape.com/api/v1/create/order";
    const data = {
      amount: 9,
      name: "dipesh",
      email: "dipeshsah98@gmail.com",
      offerType: "basic",
    };
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
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
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