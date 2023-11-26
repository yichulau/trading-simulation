"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserAuthForm } from "./components/user-auth-form"
import { useRouter } from "next/navigation"



export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: any) =>{
    e.preventDefault();
    router.push('/trading') 
  }
    return (
        <>
          <div className="md:hidden">
            <Image
              src="/examples/authentication-light.png"
              width={1280}
              height={843}
              alt="Authentication"
              className="block dark:hidden"
            />
            <Image
              src="/examples/authentication-dark.png"
              width={1280}
              height={843}
              alt="Authentication"
              className="hidden dark:block"
            />
          </div>
          <div className="container relative hidden h-[640px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            {/* <Link
              href="/examples/authentication"
              className={cn(
                "absolute right-4 top-4 md:right-8 md:top-8"
              )}
            >
              Login
            </Link> */}
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
              {/* <div className="absolute inset-0 bg-zinc-900" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: 0.35,
                }}
                // style={{
                //   position: 'absolute',
                //   width: '100%',
                //   height: '100%',
                //   objectFit: 'cover',
                //   zIndex: '-1'
                // }}
                src="https://framerusercontent.com/assets/CVWSTXnGpaxPiWrkTvH1Y2mIR8Q.mp4"
              />

              <div className="relative z-20 flex items-center text-lg font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                Acme Inc
              </div>
              <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This AI-driven trading platform has revolutionized my approach to the markets. It automates complex trading strategies with precision, enabling me to execute trades more efficiently and effectively than ever before.&rdquo;
                </p>
                  <footer className="text-sm">- Experience Trader - </footer>
                </blockquote>
              </div>
            </div>
            <div className="lg:p-8">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Sign In
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter your email to sign in
                  </p>
                </div>
                <UserAuthForm onSubmit={handleSubmit}/>
                <p className="px-8 text-center text-sm text-muted-foreground">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                     href="#"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </>
      )
}
