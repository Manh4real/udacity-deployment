export const environment = {
  POSTGRES_HOST:
    "udacity-deployment-db.cydyot1xw3pt.us-west-2.rds.amazonaws.com",
  POSTGRES_PORT: "4000",
  POSTGRES_DB: "storefront",
  POSTGRES_USER: "storefront_user",
  POSTGRES_PASSWORD: "storefront_db",

  POSTGRES_DB_TEST: "storefront_test",

  POSTGRES_PROD_HOST:
    "udacity-deployment-db.cydyot1xw3pt.us-west-2.rds.amazonaws.com",
  POSTGRES_PROD_PORT: "4000",
  POSTGRES_PROD_DB: "storefront",
  POSTGRES_PROD_DB_TEST: "storefront_test",
  POSTGRES_PROD_USER: "storefront_user",
  POSTGRES_PROD_PASSWORD: "storefront_db",

  BASE_URL: "http://udacity-deployment-dev.us-west-2.elasticbeanstalk.com",

  JWT_SECRET:
    "722e356fd4e51a265044b27803ec8bfc095f9fdf13abc68605f23eec9d172b26817c5488b151034123be15f79f287f9b",
  ENV: "prod",
};
