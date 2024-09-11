import { AppLogLevel, Environment } from '@/config/config.interfaces';
import Joi from 'joi';

export const validationSchema = Joi.object({
  APP_ID: Joi.string().uuid({ version: 'uuidv4' }).required(),
  APP_NAME: Joi.string().required(),
  APP_HOST: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  APP_DOMAIN: Joi.string().required(),
  APP_LOG_LEVEL: Joi.string().valid(...Object.values(AppLogLevel)),
  NODE_ENV: Joi.string()
    .valid(...Object.values(Environment))
    .required(),
  NODE_PORT_INTERNAL: Joi.number().required(),
  NODE_PORT_EXTERNAL: Joi.number().required(),
  COMPOSE_PROJECT_NAME: Joi.string().required(),
  API_PORT: Joi.number().required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT_EXTERNAL: Joi.number().required(),
  POSTGRES_PORT_INTERNAL: Joi.number().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_URL: Joi.string().required(),
  PRISMA_LOG_LEVEL: Joi.string(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT_EXTERNAL: Joi.number().required(),
  REDIS_PORT_INTERNAL: Joi.number().required(),
  REDIS_URL: Joi.string(),
  REDIS_USERNAME: Joi.string().required(),
  REDIS_PASSWORD: Joi.string().required(),
  CACHE_TTL: Joi.number(),
  DISABLE_CACHE: Joi.boolean(),
  JWT_ACCESS_TTL: Joi.number().required(),
  JWT_REFRESH_TTL: Joi.number().required(),
  EMAIL_HOST: Joi.string().required(),
  EMAIL_PORT: Joi.number().required(),
  EMAIL_SECURE: Joi.bool().required(),
  EMAIL_USER: Joi.string().email().required(),
  EMAIL_PASSWORD: Joi.string().required(),
  EMAIL_TTL: Joi.number().required(),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  AWS_SES_REGION: Joi.string().required(),
  DEFAULT_USER_ID: Joi.string().uuid().required(),
  DEFAULT_USER_EMAIL: Joi.string().required(),
  DEFAULT_USER_PASSWORD: Joi.string().required(),
  TEST_USER_ID: Joi.string().uuid(),
  TEST_USER_EMAIL: Joi.string(),
  TEST_USER_PASSWORD: Joi.string(),
});
