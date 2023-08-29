'use client'
import { useRouter } from 'next/navigation';

export default function Loginform(props) {
  const router = useRouter();

  console.log(props)
  if (props == null) {
    router.push('/list');
    console.log(1)
  }
}