const express = require('express');
const carrouselRouter = express.Router();
const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const bucketName = '';
const region = 'us-east-1';
const listPublicFiles = async () => {
  try {
    const client = new S3Client({
        region: region,
    });
    const command = new ListObjectsV2Command({ Bucket: bucketName });
    const result = await client.send(command);
    const publicUrls = await Promise.all(
        result.Contents
        .filter(obj => obj.Size > 0)
        .map(async obj => {
          const getObjectCommand = new GetObjectCommand({ Bucket: bucketName, Key: obj.Key });
          const url = await getSignedUrl(client, getObjectCommand, { expiresIn: 3600 });
          return { url: url };
        })
    );
    console.log('publicUrls', publicUrls);
    return publicUrls;
  } catch (err) {
    console.error('Error retrieving object URLs from S3 bucket:', err.message);
    return [];
  }
};

carrouselRouter.get('', async (req, res) => {
    const publicUrls = await listPublicFiles();
    res.json(publicUrls);
});

module.exports = carrouselRouter;
