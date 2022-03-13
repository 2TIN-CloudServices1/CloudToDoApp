const dynamoose = require("dynamoose");
console.log(process.env.AWS_ACCESS_KEY);
console.log(process.env.AWS_ACCESS_KEY_ID);
dynamoose.aws.sdk.config.update({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_ACCESS_KEY,
    "region": process.env.AWS_REGION || 'us-east-1'
});

const ddb = new dynamoose.aws.sdk.DynamoDB({
    "accessKeyId": "AKID",
    "secretAccessKey": "SECRET",
    "region": "us-east-1"
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);