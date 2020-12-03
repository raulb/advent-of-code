import { ReportRepair } from '../lib/01-report-repair';
import { expect } from 'chai';
import { describe } from 'mocha';
import { DATA } from '../data/01-report-repair';

const TEST_DATA = [
  1721,
  979,
  366,
  299,
  675,
  1456
]

describe('ReportRepair', function () {
  context('for two values', function() {
    context('using TEST_DATA', function() {
      it('returns what is expected', function() {
        let reportRepair = new ReportRepair(TEST_DATA, 2);
        expect(reportRepair.result()).to.be.equal(514579);
      });

      it('gets the right values', function() {
        let reportRepair = new ReportRepair(TEST_DATA, 2);
        expect(reportRepair.getValues()[0]).to.be.equal(299);
        expect(reportRepair.getValues()[1]).to.be.equal(1721);
      });
    });

    context('using data from the exercise', function() {
      it('returns what is expected', function() {
        let reportRepair = new ReportRepair(TEST_DATA, 2);
        expect(reportRepair.result()).to.be.equal(514579);
      });

      it('gets the right values', function() {
        let reportRepair = new ReportRepair(TEST_DATA, 2);
        expect(reportRepair.getValues()[0]).to.be.equal(299);
        expect(reportRepair.getValues()[1]).to.be.equal(1721);
      });
    });
  });

  context('for three values', function() {
    context('using TEST_DATA', function() {
      it('returns what is expected', function() {
        let reportRepair = new ReportRepair(TEST_DATA, 3);
        expect(reportRepair.result()).to.be.equal(241861950);
      });

      it('gets the right values', function() {
        let reportRepair = new ReportRepair(TEST_DATA);
        expect(reportRepair.getValues()[0]).to.be.equal(979);
        expect(reportRepair.getValues()[1]).to.be.equal(366);
        expect(reportRepair.getValues()[2]).to.be.equal(675);
      });
    });

    context('using data from the exercise', function() {
      it('returns what is expected', function() {
        let reportRepair = new ReportRepair(DATA, 2);
        expect(reportRepair.result()).to.be.equal(1016619);
      });
    });
  });
  
  context('resolving exercise for three values', function() {
    it('returns what is expected', function () {
      let reportRepair = new ReportRepair(DATA, 3);
      expect(reportRepair.result()).to.be.equal(218767230);
    });
  });
});

