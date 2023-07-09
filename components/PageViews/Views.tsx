import { FC } from "react";
import PageViews from "./PageViews";

interface BlogLayoutProps {
  slug: string;
}

const Views: FC<BlogLayoutProps> = ({ slug }) => {
  return (
    <div>
      <h3>{slug}</h3>
      <div>
        <PageViews slug={slug} />
      </div>
    </div>
  );
};

export default Views;
