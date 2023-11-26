import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-32 md:py-10">
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: '100%',
              left: '50%',
              top: '50%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              opacity: '0.35',
              zIndex: '-1'
            }}
            src="https://framerusercontent.com/assets/CVWSTXnGpaxPiWrkTvH1Y2mIR8Q.mp4"
          />
          <div className="flex max-w-[980px] flex-col gap-2 items-center justify-center pt-32 ">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Make Trading easier with AI.<br className="hidden sm:inline" />
              Precise, fast and easy with us.
            </h1>
            {/* <p className="max-w-[700px] text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste
              into your apps. Free. Open Source. And Next.js 13 Ready.
            </p> */}
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Link
              href={'/login'}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Login
            </Link>
          </div>
        </section>
      </div>
    </div> 
  )
}