```
name: Resourcepack

on:
  workflow_dispatch:
  push:
    branches:
      - 'master'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: 1 Check main
      uses: actions/checkout@v3
      with:
       fetch-depth: 0   
  
    - name: zip resourcepack folder
      run: (cd resourcepack && zip -r - .) >resourcepack.zip

    - name: upload_resource_pack
      uses: jwdeveloper/McPackUploaderAction@1.0.8
      with:
        path: ./resourcepack.zip 
 
    - name: Display Upload Results
      run: |
       echo "Download URL: ${{ steps.upload_resource_pack.outputs.url }}"
       echo "Hash Code: ${{ steps.upload_resource_pack.outputs.hash }}"

```
