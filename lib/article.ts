import { Article } from "@/types/article";
import articlesData from "@/data/articles.json";

export function getArticleById(id: string): Article | null {
    const article = articlesData.find(article => article.id === id);
    return article || null; // Retourne null si aucun article n'est trouvé
}

export function getAllArticles(): Article[] {
    return articlesData;
}
