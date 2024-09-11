export const PASSWORD_REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const USER_ID_EXAMPLE = '530350e2-cc3f-40fb-b82e-7e4241a3c03b';

export const EMAIL_OCCUPIED_MSG = 'This email address is already occupied';
export const EMAIL_MSG = 'The email has been sent';
export const CONFIRM_EMAIL_MSG = 'A new confirmation email has been sent';
export const REST_EMAIL_MSG = 'The password reset code has been sent';
export const LOGOUT_MSG = 'User logged out';
export const RESET_PASS_EMAIL_MSG = 'The password reset code has been sent to your email address';
export const DELETE_USER_MSG = 'The account has been deleted';

export const EMAIL_ERR_MSG = 'The email was not sent';
export const INVALID_CODE_ERR_MSG = 'Invalid code';
export const INVALID_CREDENTIALS_ERR_MSG = 'Invalid credentials';
export const UNCONFIRMED_EMAIL_ERR_MSG = 'Unconfirmed email';
export const USED_PASSWORD_ERR_MSG = 'You already used this password before';
export const INVALID_PASSWORD_ERR_MSG = 'Password requires a lowercase letter, an uppercase letter, and a number';
export const SUSPICIOUS_TOKEN_ERR_MSG = 'Suspicious token! Invalid user id!';
export const FORBIDDEN_ACTION_ERR_MSG = 'This action is prohibited for this user';
