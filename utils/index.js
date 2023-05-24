
const assert = require('assert');

class Test {
    static passedCount = 0;
    static totalCount = 0;
    static assertSimilar(actualOuput, expectedOutput) {
        try {
            assert.deepStrictEqual(actualOuput, expectedOutput);
            this.passedCount++;
            console.log(`Test Case ${this.totalCount} Passed ✅`);
        } catch (error) {
            console.error(`Test Case ${this.totalCount} Failed ❌`);
            console.error('Output:');
            console.error(actualOuput);
            console.error('Expected Output:');
            console.error(expectedOutput);
        } finally {
            this.totalCount++;
        }

    }
    static assertEquals(actualOuput, expectedOutput) {
        try {
            assert.deepStrictEqual(actualOuput, expectedOutput);
            this.passedCount++;
            console.log(`Test Case ${this.totalCount} Passed ✅`);
        } catch (error) {
            console.error(`Test Case ${this.totalCount} Failed ❌`);
            console.error('Output:');
            console.error(actualOuput);
            console.error('Expected Output:');
            console.error(expectedOutput);
        } finally {
            this.totalCount++;
        }

    }

    static assertNotEquals(actualOuput, expectedOutput,errorMessage) {
        try {
           
            assert.deepStrictEqual(!actualOuput, expectedOutput);
            this.passedCount++;
            console.log(`Test Case ${this.totalCount} Passed ✅`);
        } catch (error) {
            console.error(`Test Case ${this.totalCount} Failed ❌`);
            console.error('Output:');
            console.error(actualOuput);
            console.error('Expected Output:');
            console.error(expectedOutput);
            console.error(errorMessage)
        } finally {
            this.totalCount++;
        }

    }



    static getSummary() {
        const failedCount = this.totalCount - this.passedCount;
        console.log(`\n${this.passedCount} out of ${this.totalCount} Test Cases Passed.`);
        if (failedCount === 0) {
            console.log('All test cases passed! ✅');
        } else {
            console.log(`${failedCount} test case${failedCount === 1 ? '' : 's'} failed. ❌`);
        }
    }
}


module.exports = { Test };

