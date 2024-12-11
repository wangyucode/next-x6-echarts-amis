"use client"
import dynamic from 'next/dynamic'

const AmisWithNoSSR = dynamic(
  () => import('@/components/Amis'),
  { ssr: false }
)

export default function Amis() {

  return (
    <AmisWithNoSSR></AmisWithNoSSR>
  );

}