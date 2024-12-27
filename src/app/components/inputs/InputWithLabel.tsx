import React from 'react';
import { FieldValues, Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Input } from "@/app/components/ui/input";
import { Textarea } from '../ui/textarea';

type InputWithLabelProps = {
    fieldTitle: string;
    nameInSchema: string;
    textArea?: boolean;
    control: Control<FieldValues>;
    tabIndex?: number | undefined;
    inputMode?: any;
    placeholder?: string;
}

const InputWithLabel = ({ 
  fieldTitle, 
  nameInSchema, 
  textArea, 
  control, 
  tabIndex, 
  inputMode, 
  placeholder } : InputWithLabelProps) => {
  return (
    <FormField
        control={control}
        name={nameInSchema}
        render={({ field }) => (
        <FormItem>
        <FormLabel>{fieldTitle}</FormLabel>
        <FormControl>
            {  textArea ? (
                <Textarea {...field} className='resize-none min-h-[80px]' />
            ) : 
                <Input 
                  {...field} 
                  tabIndex={tabIndex} 
                  inputMode={inputMode} 
                  placeholder={placeholder}
                />
            }
        </FormControl>
      <FormMessage />
    </FormItem>
   )}
  />
  );  
};

export default InputWithLabel;