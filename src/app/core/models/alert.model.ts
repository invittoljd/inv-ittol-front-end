/**
 * Internal Model
 */
export enum AlertType {
    Primary = 'alert-primary',
    Secondary = 'alert-secondary',
    Success = 'alert-success',
    Danger = 'alert-danger',
    Warning = 'alert-warning',
    Info = 'alert-info',
    Light = 'alert-light',
    Dark = 'alert-dark',
}

/**
 * Alert Model
 */
export interface AlertModel {
    type: AlertType;
    text: string;
    keep?: boolean;
}  