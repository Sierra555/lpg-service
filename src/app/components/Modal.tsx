'use client';

import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

type ModalProps = {
    trigger: React.ReactNode;
    title?: string;
    description?: string;
    content: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement> | undefined;
    className?: string;
}

const Modal = ({ trigger, title, description, content, ref, className }: ModalProps) => {
  return (
    <Dialog >
        <DialogTrigger asChild>
            {trigger}
        </DialogTrigger>
        <DialogContent ref={ref} className={className}>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            {content}
        </DialogContent>
    </Dialog>
  );
};

export default Modal;