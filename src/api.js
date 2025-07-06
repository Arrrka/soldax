import { caseTest } from './test';
import { users } from './testWeekly';

export function fakeFatchCase() {
  return new Promise((resolve) => {
    resolve(caseTest);
  });
}

export function fakeFatchUsers() {
  return new Promise((resolve) => {
    resolve(users);
  });
}
