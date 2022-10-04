// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

const storage = new Storage();

const bucketName = "work-poc";
const fileName = "README.md";

async function createBucket() {
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

async function uploadFile(bucketName, fileName) {
  const bucket = storage.bucket(bucketName);
  const option = {
    gzip: true,
    destination: fileName,
    resumable: true,
  };
  bucket.upload(fileName, option);
}

async function downloadFile(bucketName, fileName) {
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);
  file.download({
    destination: `/Users/junhui.tee/poc/gcp-storage/node/test/${fileName}`,
  });
}

async function generateSignedUrl(bucketName, fileName) {
  const options = {
    version: "v2", // defaults to 'v2' if missing.
    action: "read",
    expires: Date.now() + 1000 * 60 * 60, // one hour
  };

  // Get a v2 signed URL for the file
  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  console.log(`The signed url for ${fileName} is ${url}.`);
}

async function listBucket(bucketName) {
  const bucket = storage.bucket(bucketName);

  bucket.getFiles();
}

generateSignedUrl(bucketName, fileName);
// createBucket().catch(console.error);
