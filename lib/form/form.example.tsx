import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

const FormExample = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: "",
        password: "",
    });
    const [fields] = useState([
        { name: "username", label: "username", input: { type: "text" } },
        { name: "password", label: "password", input: { type: "password" } },
    ]);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // axios.post("./signIn", formData).then(success, fail);
        const rules = [
            { key: "username", required: true },
            { key: "username", minLength: 6, maxLength: 16 },
            { key: "username", pattern: /^[A-Za-z0-9]+$/ },
        ];
        const errors = Validator(formData, rules);
        console.log(errors);
    };
    return (
        <div>
            {JSON.stringify(formData)}
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
                onChange={(newValue) => setFormData(newValue)}
            />
        </div>
    );
};

export default FormExample;