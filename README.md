# 1. Install GCP CLI

https://cloud.google.com/sdk/docs/downloads-interactive

```
curl https://sdk.cloud.google.com > install.sh
bash install.sh --disable-prompts
```

# 2. Add gcloud to shell (~/google-cloud-sdk/bin/gcloud shortform to gcloud)

run the following command
## ZSHRC

```
echo "source ~/google-cloud-sdk/path.zsh.inc" >> ~/.zshrc
echo "source ~/google-cloud-sdk/completion.zsh.inc" >> ~/.zshrc
```

## BASHRC

```
echo "source ~/google-cloud-sdk/path.bash.inc" >> ~/.bashrc
echo "source ~/google-cloud-sdk/completion.bash.inc" >> ~/.bashrc
```

# 3. Authenticate GCP 

2 Options: `gcloud auth login` or `gcloud auth activate-service-account`

1. `gcloud auth login` will authenticate via gmail account
2. `gcloud auth activate-service-account` will authenticate via service account credential filepath. Default variable used is GOOGLE_APPLICATION_CREDENTIALS

For 2.`gcloud auth activate-service-account`
```
export GOOGLE_APPLICATION_CREDENTIALS=<service-account-filepath>
gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS
```