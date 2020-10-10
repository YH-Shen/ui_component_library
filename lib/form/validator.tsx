// import React from "react";
import { FormValue } from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
}
type FormRules = Array<FormRule>;

interface FormErrors {
    [Key: string]: string[];
}

function isEmpty(value: any) {
    return value === undefined || value === null || value === "";
}
export function noError(errors: any) {
    // Object.values(errors).filter
    return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: any = {};
    const addError = (key: string, message: string) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map((rule) => {
        const value = formValue[rule.key];
        if (rule.required && isEmpty(value)) {
            addError(rule.key, "Required");
        }
        if (
            rule.minLength &&
            !isEmpty(value) &&
            value.length < rule.minLength
        ) {
            addError(rule.key, "Too short. Min length: 6");
        }
        if (
            rule.maxLength &&
            !isEmpty(value) &&
            value.length > rule.maxLength
        ) {
            addError(rule.key, "Too long. Max length: 16");
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addError(rule.key, "Illegal Formate");
        }
        console.log(rule);
    });
    console.log("errors");
    return errors;
};

export default Validator;
