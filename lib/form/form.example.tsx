import React, { Fragment, useState } from "react";
import Form from "./form";

const FormExample = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [fields] = useState([
        { name: "username", label: "username", input: { type: "text" } },
        { name: "password", label: "password", input: { type: "password" } },
    ]);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(formData);
    };
    return (
        <Form
            value={formData}
            fields={fields}
            buttons={
                <Fragment>
                    <button type="submit">Submit</button>
                    <button>Back</button>
                </Fragment>
            }
            onSubmit={onSubmit}
            onChange={(e) => setFormData(e.target.value)}
        />
    );
};

export default FormExample;
