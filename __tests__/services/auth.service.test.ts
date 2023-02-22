import AuthService from "../../src/services/auth.service"
import axios from "axios";

jest.mock('axios', () => ({
    get: jest.fn(),
    post: jest.fn(),
}));

describe('src/services/auth.service', () => {
    const email = 'test@mail.com';
    const password = 'password';

    test('login', () => {
        AuthService.login({ email, password });

        expect(axios.get).toBeCalledWith('');
    });
})
