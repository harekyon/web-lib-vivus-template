import Link from "next/link";

// ストロークだけのアニメーション
export default function Home() {
  return (
    <>
      <h1>Vivus+Reactのマスクアニメーション</h1>
      <Link href="stroke">stroke: 線だけのアニメーション</Link>
      <Link href="stroke2">stroke2: マスクさせたアニメーション</Link>
    </>
  );
}
