# install GCP Cli

https://cloud.google.com/sdk/docs/downloads-interactive

```
curl https://sdk.cloud.google.com > install.sh
bash install.sh --disable-prompts
```

# add to bashrc or zshrc

```
source ~/google-cloud-sdk/path.zsh.inc
source ~/google-cloud-sdk/completion.zsh.inc
```

#login GCP
2 Options: `gcloud auth login` or `gcloud auth activate-service-account`

1. `gcloud auth login` will authenticate via gmail account
2. `gcloud auth activate-service-account` will authenticate via service account credential filepath. Default variable used is GOOGLE_APPLICATION_CREDENTIALS

#
