import * as yup from "yup";

export const schema = yup.object({
    resident_id: yup.string().required().email(),
    fname: yup.string().required().email(),
    mname: yup.string().required().email(),
    lname: yup.string().required().email(),
    suffix: yup.string().required().email(),
    bdate: yup.string().required().email(),
    age: yup.string().required().email(),
    sex: yup.string().required().email(),
    religion: yup.string().required().email(),
    citizenship: yup.string().required().email(),
    occupation: yup.string().required().email(),
    status: yup.string().required().email(),
    purok: yup.string().required().email(),
    address: yup.string().required().email(),
});

