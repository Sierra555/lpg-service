'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import UserForm from './Form';

type ModalProps = {
    label?: string;
    serviceLabel?: string | undefined;
    ref?: React.RefObject<HTMLDivElement> | undefined;
}

const Modal = ({ label, serviceLabel, ref }: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>   
            {   serviceLabel ? 
                (<p 
                    className="hover:text-primary cursor-pointer transition"
                >
                    {serviceLabel}
                </p>) :
                (<Button className='text-white w-full md:w-auto'>{label}</Button>)
            }
        </DialogTrigger>
        <DialogContent ref={ref}>
            <DialogHeader>
                <DialogTitle>Залиште заявку</DialogTitle>
                <DialogDescription>
                    Ми зв&apos;яжемося з вами якнайшивдше.
                </DialogDescription>
            </DialogHeader>
            <UserForm service={serviceLabel} setOpen={setOpen} />
        </DialogContent>
    </Dialog>
  );
};

export default Modal;