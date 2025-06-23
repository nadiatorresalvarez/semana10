type Params = {
    params: {
        id: string;
    };
};

export async function generateStaticParams() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return products.map((product: any) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: Params) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 font-semibold">${product.price}</p>
        </div>
    );
}