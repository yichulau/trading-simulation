import { SiteHeader } from "@/components/site-header";
import ChartContext from "@/context/chartContext";

export default function TradingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">
                <section className="container flex flex-col items-start justify-center ">
                    {children}
                </section>
            </div>
        </div>
	);
}
