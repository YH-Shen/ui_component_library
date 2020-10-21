// import React, { Fragment, useState } from "react";
import React from 'react'


import  { modal } from "./dialog";
import Button from "../button/button";
// import Form, { FormValue } from "../form/form";
// import Validator, { noError } from "../form/validator";



const DialogExample2: React.FunctionComponent = () => {
    // const usernames = ["Ross", "Monica", "Rachel", "Phoebe", "Chandler", "Joey"];
    // const checkUserName = (
    //     username: string,
    //     success: () => void,
    //     fail: () => void
    //     ) => {
    //     setTimeout(() => {
    //         console.log("now I know if username already exists");
    //         if (usernames.indexOf(username) >= 0) {
    //             fail();
    //         } else {
    //             success();
    //         }
    //     }, 1000);
    // };

    // const [formData, setFormData] = useState<FormValue>({
    //     username: "",
    //     password: "",
    // });
    // const [fields] = useState([
    //     { name: "username", label: "username", input: { type: "text" } },
    //     { name: "password", label: "password", input: { type: "password" } },
        
    // ]);
    // const [errors, setErrors] = useState({});
    // const validator = (username: string) => {
    //     return new Promise<string>((resolve, reject) => {
    //         checkUserName(username, resolve, () => reject("unique"));
    //     });
    // };

    // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     // axios.post("./signIn", formData).then(success, fail);
    //     const rules = [
    //         { key: "username", required: true },
    //         { key: "username", minLength: 6, maxLength: 16 },
    //         { key: "username", validator },
    //         { key: "username", validator },
    //         { key: "username", pattern: /^[A-Za-z0-9]+$/ },
    //         { key: "password", required: true },
    //         { key: "password", validator },
    //         { key: "password", validator },
    //     ];
    //     Validator(formData, rules, (errors) => {
    //         if (noError(errors)) {
    //             console.log("no error");
    //         }
    //         setErrors(errors);
    //     });
        
    // };

    // const transformError = (message: string) => {
    //     const map: any = {
    //         unique: "This username already exists",
    //         required: "Required field",
    //         minLength: "Too Short. Minimum Length: 6",
    //         maxLength: "Too Long. Maximum Length: 16",
    //     };
    //     return map[message];
    // };
    // const openModal = () => {
    //     const close = modal(
    //         <Form
    //             value={formData}
    //             fields={fields}
    //             buttons={
    //                 <Fragment>
    //                     <Button type="submit" level="primary" >
    //                         Submit
    //                     </Button>
    //                     <Button onClick={() => close()}>Back</Button>
    //                 </Fragment>
    //             }
    //             errors={errors}
    //             transformError={transformError}
    //             onSubmit={onSubmit}
    //             onChange={(newValue) => setFormData(newValue)}
    //         />
    const openModal = () => {
        const close = modal(
            <h1>
                This is a Modal.
                <Button onClick={() => close()}>close</Button>
            </h1>
        );
    };
   
     
    return <Button level="primary" onClick={openModal}>Open Modal</Button>;
        
    
}

export default DialogExample2;

