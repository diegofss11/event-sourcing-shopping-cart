const chai = require('chai');
const { sinon, spy, stub } = require('sinon');

chai.use(require('chai-events'));
global.expect = chai.expect;
global.sinon = sinon;
global.stub = stub;
global.spy = spy;