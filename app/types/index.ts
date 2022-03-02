import { components, operations } from './types';

// System types
export type { default as User } from './User.type';

// Design generation types
export type RequestGenerateDesign = operations['generate_design_design_post']['parameters']['query'];
export type ResponseGenerateDesign = components['schemas']['ResponseGenerateDesign'];

export type RequestRegisterUser = operations['register_user_user_register_post']['parameters']['query'];
export type ResponseRegisterUser = components['schemas']['ResponseRegisterUser'];
