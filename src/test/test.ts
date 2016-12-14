import * as assert from 'assert';
import * as mocha from 'mocha';
import * as bluebird from 'bluebird';

import meaning from '../';

describe('Testing the meaning of life, the universe, and everything', async function(): Promise<void> {
  it('asks for the answer', async function() {
    await bluebird.delay(1500);
    const answer = meaning.answer();
    assert.equal(answer, 42);
  });

  it('asks for the question', async function() {
    await bluebird.delay(1500);
    const question = meaning.question();
    assert.equal(question, 'Sorry, Earth was destroyed before I was able to calculate the question.');
  });
});
