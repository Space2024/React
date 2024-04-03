import * as yup from "yup";


export const basicSchema = yup.object().shape({
    customerName: yup.string().required("Please enter a valid customer name."),
  });
  