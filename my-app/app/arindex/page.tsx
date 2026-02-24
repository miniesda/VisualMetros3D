import Image from "next/image";
import Index from "../../public/tsx/indexAR";
import { Suspense } from "react";



export default function IndexPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Index />
    </Suspense>
  );
}
