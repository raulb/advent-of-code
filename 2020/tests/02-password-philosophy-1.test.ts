import { PasswordPhilosophy } from '../lib/02-password-philosophy-1';
import { assert, expect } from 'chai';
import { describe } from 'mocha';

describe('PasswordPolicy', function () {
  context('Using TEST_DATA', function() {
    it('returns what is expected', async function() {
      const validPasswords = await PasswordPhilosophy('/data/02-password-philosophy/sample.txt');
      expect(validPasswords).to.be.equal(2);
    });
  });

  context('Using input data', function() {
    it('returns what is expected', async function() {
      const validPasswords = await PasswordPhilosophy('/data/02-password-philosophy/input.txt');
      expect(validPasswords).to.be.equal(643);
    });
  });
});

