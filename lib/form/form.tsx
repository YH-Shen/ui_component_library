import React, { ReactEventHandler, ReactFragment } from "react";

export interface FormValue {
    [Key: string]: any;
}

interface Props {
    value: FormValue;
    fields: Array<{ name: string; label: string; input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue) => void;
}
const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value;
    const onSubmit: ReactEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    const onInputChange = (
        name: string,
        // e: React.ChangeEvent<HTMLInputElement>
        value: string
    ) => {
        // console.log(name, e.target.value);
        const newFormValue = { ...formData, [name]: value };
        props.onChange(newFormValue);
    };
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map((f) => (
                <div key={f.name}>
                    {f.label}
                    <input
                        type={f.input.type}
                        value={formData[f.name]}
                        onChange={(e) => onInputChange(f.name, e.target.value)}
                        // onChange={onInputChange.bind(null, f.name)}
                    />
                </div>
            ))}
            <div>{props.buttons}</div>
        </form>
    );
};

export default Form;
