const cdk = require('@aws-cdk/core');
const { NextJSLambdaEdge } = require('@sls-next/cdk-construct');

class CdkjsStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new NextJSLambdaEdge(this, 'NextJsApp', {
      serverlessBuildOutDir: './build'
    });
    
    // The code that defines your stack goes here
  }
}

module.exports = { CdkjsStack }
