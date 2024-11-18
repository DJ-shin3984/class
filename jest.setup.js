// mock server 를 실행시킨다
import {server} from './src/commons/mocks'
beforeAll(() => server.listen())
afterAll(() => server.close())