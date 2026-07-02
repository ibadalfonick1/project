import fs from "fs";
import path from "path";

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "public", "site.html"),
    "utf8"
  );

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}