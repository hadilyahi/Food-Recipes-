import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // يمكنك وضع مؤشر تحميل هنا إذا أردت
};

export default IndexPage;
