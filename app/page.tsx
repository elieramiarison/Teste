import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/article";

export default async function Home() {
  const articles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Mini Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <Link
                href={`/articles/${article.id}`}
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Lire l'article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
