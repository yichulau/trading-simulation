import { SiteHeader } from "@/components/site-header";


export default function NewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">
                <section className="container flex flex-col px-0 md:px-2 items-start justify-center ">
                    {children}
                </section>
            </div>
        </div>
	);
}
