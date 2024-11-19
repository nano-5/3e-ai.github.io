import About from '@/mdx/about.mdx';

export const metadata = {
    pathname: '/about'
};

export default function AboutPage() {
    return (
        <div className="prose">
            <About />
        </div>
    );
}