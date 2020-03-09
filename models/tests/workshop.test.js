const Workshops = require('../workshops.model');
const mongoose = require('mongoose');
const expect = require('chai').expect;

describe('Workshops', () => {
    it('should throw an error if no args', () => {
        const workshops = new Workshops({});

        workshops.validate(err => {
            expect(err.errors.name).to.exist;
            expect(err.errors.concertId).to.exist;
        });
    });

    it('should throw an error if args are not strings', () => {
        const cases = [{}, []];

        for (let name of cases) {
            const workshops = new Workshops({ name, name });

            workshops.validate(err => {
                expect(err.errors.name).to.exist;
                expect(err.errors.concertId).to.exist;
            });
        }
    });

    it('should return proper workshop if args are correct', () => {
        const workshops = new Workshops({ name: 'Rock Music Style', concertId: '5e5834ea2ae01227ac246575' });

        workshops.validate(err => {
            expect(err).to.not.exist;
        });
    });
})