import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Page for contact',
    keywords: ['Contact Page', 'Next.js introduction', '...'],
    authors: { name: 'Vanessa Villalba' }
};

export default function Contact() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}