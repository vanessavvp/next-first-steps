import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About page',
    keywords: ['About Page', 'Netx.js introduction', '...'],
    authors: { name: 'Vanessa Villalba' }
};

export default function About() {
    return (
        <span className="text-7xl">About Page</span>
    )
}