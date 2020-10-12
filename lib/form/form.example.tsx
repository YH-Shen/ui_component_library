import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Button from "../button/button";

import Validator, { noError } from "./validator";

const usernames = ["Ross", "Monica", "Rachel", "Phoebe", "Chandler", "Joey"];
const checkUserName = (
    username: string,
    success: () => void,
    fail: () => void
) => {
    setTimeout(() => {
        console.log("now I know if username already exists");
        if (usernames.indexOf(username) >= 0) {
            success();
        } else {
            fail();
        }
    }, 1000);
};

const FormExample = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: "",
        password: "",
    });
    const [fields] = useState([
        { name: "username", label: "username", input: { type: "text" } },
        { name: "password", label: "password", input: { type: "password" } },
    ]);
    const [errors, setErrors] = useState({});
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // axios.post("./signIn", formData).then(success, fail);
        const rules = [
            { key: "username", required: true },
            { key: "username", minLength: 6, maxLength: 16 },
            {
                key: "username",
                validator: {
                    name: "unique",
                    validate(username: string) {
                        console.log("Validator has been called");
                        return new Promise<void>((resolve, reject) => {
                            checkUserName(username, resolve, reject);
                        });
                    },
                },
            },
            { key: "username", pattern: /^[A-Za-z0-9]+$/ },
            { key: "password", required: true },
        ];
        Validator(formData, rules, (errors) => {
            console.log(errors);
            if (noError(errors)) {
                console.log("no error");
            }
            setErrors(errors);
        });

        // console.log(errors);
    };
    return (
        <div>
            {/* {JSON.stringify(formData)} */}
            <Form
                value={formData}
                fields={fields}
                buttons={
                    <Fragment>
                        <Button type="submit" level="primary">
                            Submit
                        </Button>
                        <Button>Back</Button>
                    </Fragment>
                }
                errors={errors}
                onSubmit={onSubmit}
                onChange={(newValue) => setFormData(newValue)}
            />
        </div>
    );
};

export default FormExample;
