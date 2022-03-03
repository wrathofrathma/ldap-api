import request from 'supertest';
import { app } from '../app';
import { test } from '@japa/runner';

test.group('AuthController', (group) => {
  test('User Login', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
  test('User Login: No UID', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
  test('User Login: No Password', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
  test('User Login: Empty UID', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
  test('User Login: Empty Password', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
  test('User Login: Invalid Password', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
  test('User Login: UID Not Found', async ({ expect }, done: Function) => {

	done();
  }).waitForDone();
});