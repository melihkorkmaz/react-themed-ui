import chai from 'chai';
const expect = chai.expect;

import { userProps, fromCamelCase } from '../../src/utils/helpers';

describe('Utils / Helpers', () => {
    describe('Set user props', () => {
        it('should clear unwanted prop keys', () => {

            const props = { prop1: true, props2: false, prop3: true };
            const newUserProps = userProps(props)('prop3', 'prop2');

            expect(newUserProps.prop1).to.exist;
            expect(newUserProps.prop2).to.not.exist;
            expect(newUserProps.prop3).to.not.exist;

        })
    });

    describe('From Camel Case', () => {
        it('should create css class name from camel case', () => {
            expect(fromCamelCase('myClassName')).equal('my-class-name');
        })
    })
})