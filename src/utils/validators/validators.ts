import React from "react";

export const required = (value: any) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length < maxLength) return undefined;
    return `Max length should be less than ${maxLength}`;
}

export const maxLength15 = maxLengthCreator(15)
export const maxLength50 = maxLengthCreator(50)
