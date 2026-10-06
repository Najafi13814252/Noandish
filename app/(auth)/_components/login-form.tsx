'use client';

import { useActionState, useState } from 'react';
import { loginAction } from '@/actions/auth';
import { Input } from '@/components/ui/input';

import { HugeiconsIcon } from '@hugeicons/react';
import { LoaderIcon, ViewIcon, ViewOffIcon } from '@hugeicons/core-free-icons';
import Register from './register';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


export default function LoginForm() {
  const [passType, setPassType] = useState<'password' | 'text'>('password')
  const [state, action, pending] = useActionState(loginAction, undefined)


  const handlePassType = () => {
    if (passType === 'password') {
      setPassType('text')
    } else {
      setPassType('password')
    }
  }

  return (
    <Card className='w-full max-w-sm p-4 border border-teal-200 dark:border-teal-800 shadow'>
      <Register footer='حساب کاربری ندارید؟ ثبت‌نام' title="ورود" description='به صفحه ورود نواندیش خوش‌ برگشتید' href='/signup'>
        <form action={action} className="flex flex-col items-center mx-auto gap-6">
          {/*ایمیل */}
          <div className='w-full flex flex-col items-start gap-1.5'>
            <Input
              id='email'
              name='email'
              type="text"
              placeholder="ایمیل"
            />
            {state?.errors?.email && <p className='text-red-500 text-xs'>{state.errors.email}</p>}
          </div>

          {/* رمز عبور */}
          <div className='w-full flex flex-col items-start gap-1.5 relative'>
            <div className="flex items-center justify-between w-full">
              <Input
                id='password'
                name='password'
                type={passType}
                placeholder="رمز عبور را وارد کنید"
              />
              <HugeiconsIcon icon={passType === 'password' ? ViewIcon : ViewOffIcon} className='text-gray-500 text-xl cursor-pointer absolute left-2' onClick={handlePassType} />
            </div>
            {state?.errors?.password && <p className='text-red-500 text-xs'>{state.errors?.password}</p>}
          </div>

          <Button className="w-full" type="submit">
            {pending ? <HugeiconsIcon icon={LoaderIcon} className='mx-auto text-3xl animate-spin' /> : 'ورود'}
          </Button>
        </form >
      </Register>
    </Card>
  );
}