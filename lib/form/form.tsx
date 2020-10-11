import React, { ReactEventHandler, ReactFragment } from "react";
import Input from "../input/input";
import classnames from "../helpers/classnames";
import "./form.scss";

export interface FormValue {
    [Key: string]: any;
}

interface Props {
    value: FormValue;
    fields: Array<{ name: string; label: string; input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue) => void;
    errors: { [key: string]: string[] };
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
            <table>
                <tbody>
                    {props.fields.map((f) => (
                        <tr
                            className={classnames("syhui-form-tr")}
                            key={f.name}
                        >
                            <td className="syhui-form-td">
                                <span className="syhui-form-label">
                                    {f.label}
                                </span>
                            </td>
                            <td className="syhui-form-td">
                                <Input
                                    className="syhui-form-input"
                                    type={f.input.type}
                                    value={formData[f.name]}
                                    onChange={(e) =>
                                        onInputChange(f.name, e.target.value)
                                    }
                                    // onChange={onInputChange.bind(null, f.name)}
                                />
                                <div>{props.errors[f.name]}</div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td>
                            <div>{props.buttons}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;
