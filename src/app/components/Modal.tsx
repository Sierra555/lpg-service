'use client';

import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import Form from './Form';

type ModalProps = {
    label?: string;
    serviceLabel?: string | undefined;
    ref?: React.RefObject<HTMLDivElement> | undefined;
}

const Modal = ({ label, serviceLabel, ref }: ModalProps) => {
    const [open, setOpen] = React.useState(false);

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
            <Form service={serviceLabel} setOpen={setOpen} />
        </DialogContent>
    </Dialog>
  );
};

export default Modal;