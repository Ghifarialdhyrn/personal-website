import { App } from '@/components/App';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Profile } from '@/components/Profile';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10 pt-16'>
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
    </div>
  );
}