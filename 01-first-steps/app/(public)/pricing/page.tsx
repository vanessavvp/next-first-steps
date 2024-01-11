import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'Page for pricing',
    keywords: ['Pricing page', 'Next.js introduction', '...'],
    authors: { name: 'Vanessa Villalba' }
};

export default function Pricing() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}