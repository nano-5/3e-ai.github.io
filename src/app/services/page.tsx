import Services from '@/mdx/services.mdx';

export const metadata = {
    pathname: '/services'
};

export default function ServicesPage() {
    return (
        <div className="prose">
            <Services />
        </div>
    );
}
