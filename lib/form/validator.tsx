// import React from "react";
import { FormValue } from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: {
        name: string;
        validate: (value: string) => Promise<void>;
    };
}
type FormRules = Array<FormRule>;

// interface FormErrors {
//     [Key: string]: string[];
// }

function isEmpty(value: any) {
    return value === undefined || value === null || value === "";
}
export function noError(errors: any) {
    // Object.values(errors).filter
    return Object.keys(errors).length === 0;
}

const Validator = (
    formValue: FormValue,
    rules: FormRules,
    callback: (errors: any) => void
): void => {
    let errors: any = {};
    const addError = (key: string, message: string | Promise<any>) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map((rule) => {
        const value = formValue[rule.key];
        if (rule.validator) {
            // Customised Validator
            const promise = rule.validator.validate(value);
            addError(rule.key, promise);
        }

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
        // console.log(rule);
    });
    Promise.all(flat(Object.values(errors))).then(
        () => {
            callback(errors);
        },
        () => {
            callback(errors);
        }
    );
    // console.log("errors");
};

export default Validator;

function flat(array: Array<any>) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i]);
        } else {
            result.push(array[i]);
        }
    }
    return result;
}
