import React, { useState } from 'react';
import AuthService from "../services/auth.service";
import { RegisterForm } from '../types/register.type';
import Input from './Input';
import Button from './Button';
import { useTranslation } from 'react-i18next';


const initialState: RegisterForm = {
    email: '',
    password: '',
    name: '',
};

function Register() {
    const { t } = useTranslation()

    const [formData, setFormData] = useState(initialState);

    const clearFormData = () => {
        setFormData({
            email: '',
            password: '',
            name: '',
        });
    };

    const formCreateHandle = () => {
        AuthService.register(formData).then(
            response => {
                alert("Kayıt Başarılı")
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
                    onChange={(e: any) => handleFormChange(e, 'name')}
                    placeholder={t('form:name_placeholder') || ''}
                    name="fullname"
                    autoComplete="none"
                    value={formData.name}
                    id="fullname"
                    required />
            </div>
            <div className="form__group">
                <Input
                    onChange={(e: any) => handleFormChange(e, 'email')}
                    placeholder={t('form:email_placeholder') || ''}
                    name="email"
                    type="text"
                    autoComplete="none"
                    value={formData.email}
                    id="email"
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
                    id="password_register"
                    required />
            </div>
            <Button className="red" onClick={formCreateHandle}>
                <span>{t('form:sign_up') || ''}</span>
            </Button>
        </div>
    );
}

export default Register;