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
    errorsDisplayMode?: "first" | "all";
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
            <table className="syhui-form-table">
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
                                <div className="syhui-form-error">
                                    {props.errors[f.name] ? (
                                        props.errorsDisplayMode === "first" ? (
                                            props.errors[f.name][0]
                                        ) : (
                                            props.errors[f.name].join(", ")
                                        )
                                    ) : (
                                        <span>&nbsp;</span>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                    <tr className={classnames("syhui-form-tr")}>
                        <td className="syhui-form-td" />
                        <td className="syhui-form-td">{props.buttons}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

Form.defaultProps = {
    errorsDisplayMode: "first",
};

export default Form;
