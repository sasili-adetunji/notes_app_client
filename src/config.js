export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "sasil-notes-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://vs74jlacy5.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_MbcWUyERr",
      APP_CLIENT_ID: "4tkpotcu1g74oe07k7kopg1t4k",
      IDENTITY_POOL_ID: "us-east-1:40a530f6-cafd-4df3-bb8e-6b9e69a2f806"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
  };