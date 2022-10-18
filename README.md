# install GCP Cli

https://cloud.google.com/sdk/docs/downloads-interactive

```
curl https://sdk.cloud.google.com > install.sh
bash install.sh --disable-prompts
```

#login GCP
2 Options: `gcloud auth login` or `gcloud auth activate-service-account`

1. `gcloud auth login` will authenticate via gmail account
2. `gcloud auth activate-service-account` will authenticate via service account credential filepath. Default variable used is GOOGLE_APPLICATION_CREDENTIALS
