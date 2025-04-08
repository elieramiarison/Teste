import { getArticleById, getAllArticles } from "@/lib/article";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        id: article.id,
    }));
}

export default async function ArticlePage({
    params,
}: {
    params: { id: string };
}) {
    const article = getArticleById(params.id);

    if (!article) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={500}
                className="w-full object-cover rounded-md"
            />
            <div className="mt-4">
                <p>{article.content}</p>
                <p className="text-gray-500 mt-2">
                    Publié le: {new Date(article.createdAt).toLocaleDateString()}
                </p>
            </div>
            <div className="mt-6">
                <Link href="/" className="text-indigo-600 hover:text-indigo-800">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}
