import { socialLinks } from '@/constants';
import { Button } from '@/components/ui/button';

export const Profile = () => {
  return (
    <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:top-10 lg:w-96'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>Ghifarialdhy</h1>
          <p className='text-sm'>Web Developer & Video Editor</p>
        </div>

        <img
          src='/avatar.jpeg'
          alt='Ghifarialdhy'
          className='lg:w-96 rounded-2xl object-cover'
        />

        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization:</p>
          <p className='text-lg capitalize'>
            Fullstack Web Developer & Video Editor
          </p>
        </div>

        <div>
          <p className='text-sm text-neutral-300'>Based in:</p>
          <p className='text-lg capitalize'>Based in Bandung, Indonesia</p>
        </div>

        <div className='flex gap-3 pt-2 text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;

            return (
              <a
                key={i}
                href={social.link}
                className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
        </div>

        {/* Button WhatsApp */}
        <Button
          asChild
          className='mt-2 cursor-pointer'
          size='lg'
        >
          <a
            href='https://wa.me/6285951816788?text=Hello%20Ghifari%2C%20I%20am%20interested%20in%20working%20with%20you.'
            target='_blank'
            rel='noopener noreferrer'
          >
            Lets Work!
          </a>
        </Button>
      </div>
    </aside>
  );
};
