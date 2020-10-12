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

interface OneError {
    message: string;
    promise?: Promise<any>;
}

const Validator = (
    formValue: FormValue,
    rules: FormRules,
    callback: (errors: any) => void
): void => {
    let errors: any = {};
    const addError = (key: string, error: OneError) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(error);
    };
    rules.map((rule) => {
        const value = formValue[rule.key];
        if (rule.validator) {
            // Customised Validator
            const promise = rule.validator.validate(value);
            addError(rule.key, { message: "username already exists", promise });
        }

        if (rule.required && isEmpty(value)) {
            addError(rule.key, { message: "Required" });
        }
        if (
            rule.minLength &&
            !isEmpty(value) &&
            value.length < rule.minLength
        ) {
            addError(rule.key, { message: "Too short. Min length: 6" });
        }
        if (
            rule.maxLength &&
            !isEmpty(value) &&
            value.length > rule.maxLength
        ) {
            addError(rule.key, { message: "Too long. Max length: 16" });
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addError(rule.key, { message: "Illegal Formate" });
        }
        // console.log(rule);
    });
    const promiseList = flat(Object.values(errors))
        .filter((item) => item.promise)
        .map((item) => item.promise);
    Promise.all(promiseList).then(
        () => {
            const newErrors = fromEntries(
                Object.keys(errors).map<[string, string[]]>((key) => [
                    key,
                    errors[key].map((item: OneError) => item.message),
                ])
            );
            callback(newErrors);
        },
        () => {
            const newErrors = fromEntries(
                Object.keys(errors).map<[string, string[]]>((key) => [
                    key,
                    errors[key].map((item: OneError) => item.message),
                ])
            );
            callback(newErrors);
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

function fromEntries(array: Array<[string, string[]]>) {
    const result: { [key: string]: string[] } = {};
    for (let i = 0; i < array.length; i++) {
        result[array[i][0]] = array[i][1];
    }
    return result;
}
