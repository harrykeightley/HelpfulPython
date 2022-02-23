import MarkdownArticle from "../components/MarkdownArticle";
import { getPageBySlug } from "../lib/getPageMarkdown";
import markdownToHtml from "../lib/markdownToHtml";

export default function Home({ homeContent }) {
  return (
    <div className="">
      <MarkdownArticle markdownPage={homeContent} />
    </div>
  );
}

export async function getStaticProps() {
  const home = getPageBySlug("home", ["title", "date", "author", "content"]);
  const content = await markdownToHtml(home.content || "");

  return {
    props: { homeContent: { ...home, content } },
  };
}
