'use client';

import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/app/components/ui/form";
import { Button } from "@/app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/app/schemas/User";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle } from "@/app/components/ui/alert";
import axios from 'axios';
import InputWithLabel from "@/app/components/inputs/InputWithLabel";
import { ClipLoader } from 'react-spinners';

type FormProps = {
  service?: string;
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));

const UserForm = ({ service }: FormProps) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const Spinner = () => <ClipLoader color="#fff" size={16} />;

  const form = useForm<FieldValues>({
    mode: 'onBlur',
    resolver: zodResolver(UserSchema),
    defaultValues: {
      service: service || '',
      name: '',
      tel: '+380',
      message: '',
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post('/api/appointments', data);
      setMessage('Дякую! Ми вам зателефонуємо.');
      wait().then(() => router.refresh());
    } catch (error: any) {
      setIsError(true);
      setMessage(`Щось пішло не так: ${error.message || error}`);
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputWithLabel
            fieldTitle="Послуга"
            nameInSchema="service"
            control={control}
            tabIndex={service ? -1 : 0}
          />
          <InputWithLabel
            fieldTitle="Ваше ім'я"
            nameInSchema="name"
            control={control}
          />
          <InputWithLabel
            fieldTitle="Номер телефону"
            nameInSchema="tel"
            control={control}
            inputMode='tel'
          />
          <InputWithLabel
            fieldTitle="Повідомлення"
            nameInSchema="message"
            textArea
            control={control}
          />
          <div className="flex justify-end">
          <Button disabled={isLoading} className='text-white w-full md:w-[150px] '>{isLoading ? <Spinner /> : 'Залишити заявку'}</Button>
          </div>
        </form>
      </Form>
      {message && (
        <Alert className='mt-2 text-lg' variant={isError ? 'destructive' : 'default'} >
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
    </>
  );
};

export default UserForm;
