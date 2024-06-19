import React, { ClipboardEvent } from 'react'
import { LoginInterface } from '../../interface/Authentication';
import Input from '@/components/Input/Input';
import { useForm, Controller } from 'react-hook-form';
import Button from '../Button/Button';
import {  loginService } from '@/services/authentication';
const LoginForm = () => {

    const {
        getValues,
        control,
        formState: { errors, isValid },
    } = useForm<LoginInterface>({ mode: 'onChange' });
    const onSubmit = async() => {
        const data = getValues();

        const {response}=await loginService(data)
        console.log(response)
    }
    return (
        <div>
            <div className="rounded-xl bg-white p-2 w-[400px] smd:w-[100%] md:w-[73%] lgsm:w-[90%] lg:w-[100%] xl:w-[73%] xxl:w-[400px]  md:px-4   px-3 shadow  ">

                <h2 className='py-4 text-center font-semibold text-[30px]'>Ingresa tus datos</h2>
                <Controller
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            helperText={errors.username ? 'Este campo es requerido' : 'Digita tu nombre'}
                            error={!!errors.username}
                            onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                                e.preventDefault();
                            }}
                            value={field.value || ''}
                            tabIndex={0}
                            id="name"
                            placeholder='Ingresa tu nombre'
                            inputMode="text"
                            dataTestId="employeeYearTest"
                            label="Ingresa tu correo"
                            onChange={(e: any) => {
                                const inputValue = e.target.value;
                                field.onChange(inputValue);
                            }}
                        />
                    )}
                    name="username"
                    control={control}
                />
                <div className='mt-3'>
                    <Controller
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Input
                                helperText={errors.password && 'Este campo es requerido'}
                                error={!!errors.password}
                                onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                                    e.preventDefault();
                                }}
                                value={field.value || ''}
                                tabIndex={0}
                                id="name"
                                type='password'
                                dataTestId="lastName"
                                label="Contraseña"
                                onChange={(e: any) => {
                                    const inputValue = e.target.value;
                                    field.onChange(inputValue);
                                }}
                            />
                        )}
                        name="password"
                        control={control}
                    />
                </div>
                <div className='!w-[33px]'>
                    <Button className='mt-5 ' disabled={!isValid} onClick={onSubmit}> Iniciar Sesión</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
