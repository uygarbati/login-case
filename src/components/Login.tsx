import React, { useState } from 'react';
import AuthService from "../services/auth.service";
import { LoginForm } from "../types/login.type"
import Input from './Input';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const initialState: LoginForm = {
    email: '',
    password: '',
};

function Login() {
    const { t } = useTranslation()
    const [formData, setFormData] = useState(initialState);

    const clearFormData = () => {
        setFormData({
            email: '',
            password: '',
        });
    };

    const formHandle = () => {
        AuthService.login(formData).then(
            response => {
                if (response.length === 1) {
                    alert(t('form:success_login'))
                } else {
                    alert(t('form:invalid_credentials'))
                }
                clearFormData();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                console.log(resMessage);
            }
        );
    }

    const handleFormChange = (e: any, stateKey: string) => {
        setFormData({
            ...formData,
            [stateKey]: e.target.value,
        });
    };

    return (
        <div className="form">
            <div className="form__group">
                <Input
                    onChange={(e: any) => handleFormChange(e, 'email')}
                    placeholder={t('form:email_placeholder') || ''}
                    name="email"
                    type="text"
                    autoComplete="none"
                    value={formData.email}
                    id="name"
                    required />
            </div>
            <div className="form__group">
                <Input
                    onChange={(e: any) => handleFormChange(e, 'password')}
                    placeholder={t('form:password_placeholder') || ''}
                    name="password"
                    type="password"
                    autoComplete="none"
                    value={formData.password}
                    id="password_login"
                    required />
            </div>
            <Button className="green" onClick={formHandle}>
                <span>{t('form:sign_in') || ''}</span>
            </Button>
        </div>
    );
}

export default Login;