import { ErrorMessage } from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
    {
        error: "required",
        format: requiredFormat
    }, {
        error: "email",
        format: emailFormat
    },
    {
        error: "duplicate",
        format: duplicateFormat
    }
];

export function requiredFormat(label?: string, error?: any): string {
    return `${label} is required!`;
}

export function emailFormat(label?: string, error?: any): string {
    return `${label} doesn't look like a valid email address.`;
}

export function duplicateFormat(label?: string, error?: any): string {
    return `${label} use another value, you value is already present.`;
}