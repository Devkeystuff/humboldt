import Image from 'next/image';
import React from 'react';
import { images } from 'consts';
import { useForm } from 'react-hook-form';
import { Button } from 'components/styled/Button.styled';
import { StyledLogin } from './Login.styled';
import { FormControl } from 'components/styled/FormControl.styled';

interface LoginData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = handleSubmit((data: LoginData) => console.log(data));

  return (
    <StyledLogin>
      <form onSubmit={onSubmit}>
        <Image src={images.logoMedium} width={50} height={55} />
        <FormControl {...register('email')} />
        <FormControl {...register('password')} />
        <Button type="submit">Login</Button>
      </form>
    </StyledLogin>
  );
}
