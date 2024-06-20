import { RegisterInterface } from '@/interface/Authentication';
import React, { ClipboardEvent } from 'react'
import { Controller, useForm } from 'react-hook-form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { registerService } from '@/services/authentication';

const RegisterForm = () => {
    const {
        getValues,
        control,
        formState: { errors, isValid },
    } = useForm<RegisterInterface>({ mode: 'onChange' });

    const onSubmit = async () => {
        const data = getValues();
        const { response } = await registerService(data)
        console.log(data)
    }
    return (
        <div className="rounded-xl bg-white p-2 w-[400px] smd:w-[100%] md:w-[73%] lgsm:w-[90%] lg:w-[100%] xl:w-[73%] xxl:w-[400px] mt-[68px] md:px-4   px-3 shadow  ">
            <h2 className='py-4 text-center font-semibold text-[30px]'>Ingresa tus datos</h2>
            <Controller
                rules={{ required: true }}
                render={({ field }) => (
                    <Input
                        helperText={errors.name ? 'Este campo es requerido' : 'Digita tu nombre'}
                        error={!!errors.name}
                        onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                            e.preventDefault();
                        }}
                        value={field.value || ''}
                        tabIndex={0}
                        id="name"
                        placeholder='Ingresa tu nombre'
                        inputMode="text"
                        dataTestId="employeeYearTest"
                        label="Ingresa tu nombre"
                        onChange={(e: any) => {
                            const inputValue = e.target.value;
                            const regex = /[^A-Za-zñÑáéíóúÁÉÍÓÚ' ]/g;
                            field.onChange(inputValue.replace(regex, ''));
                        }}
                    />
                )}
                name="name"
                control={control}
            />
            <div className='mt-3'>
                <Controller
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            helperText={errors.lastName ? 'Este campo es requerido' : 'Digita tu nombre'}
                            error={!!errors.lastName}
                            onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                                e.preventDefault();
                            }}
                            value={field.value || ''}
                            tabIndex={0}
                            id="name"

                            placeholder='apellido'
                            inputMode="text"
                            dataTestId="lastName"
                            label="Ingresa tu apellido"
                            onChange={(e: any) => {
                                const inputValue = e.target.value;
                                const regex = /[^A-Za-zñÑáéíóúÁÉÍÓÚ' ]/g;
                                field.onChange(inputValue.replace(regex, ''));
                            }}
                        />
                    )}
                    name="lastName"
                    control={control}
                />
            </div>
            <div className='mt-3'>
                <Controller
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            helperText={errors.username && 'Este campo es requerido'}
                            error={!!errors.username}
                            onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                                e.preventDefault();
                            }}
                            value={field.value || ''}
                            tabIndex={0}
                            id="name"

                            placeholder=' Correo'
                            inputMode="email"
                            dataTestId="lastName"
                            label="Ingresa tu correo electrónico"
                            onChange={(e: any) => {
                                const inputValue = e.target.value;
                                field.onChange(inputValue);
                            }}
                        />
                    )}
                    name="username"
                    control={control}
                />
            </div>

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
                            placeholder='Contraseña'
                            dataTestId="name"
                            label="Ingresa tu contraseña"
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
            <div className='w-full'>
                <Button className='mt-5 ' disabled={!isValid} onClick={onSubmit}> Registrarme</Button>
            </div>
        </div>
    )
}

export default RegisterForm
