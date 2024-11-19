import Index from '@/mdx/index.mdx';

export const metadata = {
    pathname: '/'
};

export default function Home() {
    return (
        <div className="prose">
            <Index />
        </div>
    );
}
