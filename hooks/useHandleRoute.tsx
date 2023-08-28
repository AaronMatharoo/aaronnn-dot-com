import { useRouter } from 'next/router';

interface Props {
}

const useHandleRoute = () => {
  const router = useRouter();

  const handleRoute = (link: string) => {
    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  return { handleRoute };
};

export default useHandleRoute;