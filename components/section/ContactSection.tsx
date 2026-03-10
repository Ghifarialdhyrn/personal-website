'use client';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { SectionHeader } from './SectionHeader';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';



type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
  };

  return (
    <motion.section
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-20 scroll-mt-10'
    >
      <SectionHeader
        subtitle='Contact'
        title={`Let's make something awesome together!`}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full mx-auto space-y-4 mt-10'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Your Name'
                      className='border-0'
                      {... field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='company'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Company Name'
                      className='border-0'
                      {... field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

              <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                    type='email'
                      placeholder='you@example.com'
                      className='border-0'
                      {... field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

              <FormField
              control={form.control}
              name='phone'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                    type='tel'
                      placeholder='+628123456789'
                      className='border-0'
                      {... field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
              control={form.control}
              name='message'
              render={({field}) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Textarea 
                    placeholder='Write your message ...'
                    className='h-36 border-0'
                    {... field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' size='lg'>Send Message</Button>
        </form>
      </Form>
    </motion.section>
  );
};
