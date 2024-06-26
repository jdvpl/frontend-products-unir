import React, { ClipboardEvent } from 'react'
import { LoginInterface } from '../../interface/Authentication';
import Input from '@/components/Input/Input';
import { useForm, Controller } from 'react-hook-form';
import Button from '../Button/Button';
import { loginService } from '@/services/authentication';
import { useSessionStorage } from '@/hooks/useSessionStorage';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes';
import { SessionStorageKeys } from '@/session';
import Link from 'next/link';
const LoginForm = () => {
    const [, setToken] = useSessionStorage<any>(SessionStorageKeys.login.key, "")
    const router = useRouter()
    const {
        getValues,
        control,
        setError,
        formState: { errors, isValid },
    } = useForm<LoginInterface>({ mode: 'onChange' });
    const onSubmit = async () => {
        const data = getValues();
        const { response, error } = await loginService(data)
        if (error) {
            setError('password', {
                type: 'custom',
                message: response.message
            })
            return;
        }
        setToken(response.token);
        router.push(routes.products)
    }
    return (
        <div>
            <div className="rounded-xl bg-white p-2 w-full smd:w-[100%] md:w-[73%] lgsm:w-[90%] lg:w-[100%] xl:w-[73%] xxl:w-[400px]  md:px-4   px-3 shadow  ">

                <h2 className='py-4 text-center font-semibold text-[30px]'>Iniciar sesión</h2>
                <Controller
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            helperText={errors.username?.message}
                            error={!!errors.username}
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
                                helperText={errors.password?.message}
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
                <div className='w-full'>
                    <Button className='mt-5 ' disabled={!isValid} onClick={onSubmit}> Iniciar Sesión</Button>
                </div>
            </div>
            <Link href={routes.register} className='text-primario-300 pt-5'>Aun no tienes cuenta, creala aqui?</Link>
        </div>
    )
}

export default LoginForm
