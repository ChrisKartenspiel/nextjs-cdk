#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkjsStack } = require('../lib/cdkjs-stack');
const { Builder } = require('@sls-next/lambda-at-edge');

const blr = new Builder(".", "/build", { args: ["build"]});

const initBuild = async () => {
  try {
    await blr.build();

    const app = new cdk.App();
    new CdkjsStack(app, 'CdkjsStack');

  } catch(error) {
    console.log(error);
    process.exit(1);
  }
  
}

initBuild();

// blr
//   .build()
//   .then(() => {
//     const app = new cdk.App();
//     new CdkjsStack(app, 'CdkjsStack');
//   })
//   .catch((error) => {
//     console.log(error);
//     process.exit(1);    
//   })


