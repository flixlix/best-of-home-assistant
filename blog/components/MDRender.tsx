import { Box, Link, TableContainer, Typography } from "@mui/material";
import React from "react";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { v4 as uuidv4 } from "uuid";
import { theme } from "@/styles/theme";
import axios from "axios";

export default function MDRender({ readmePost }: { readmePost: string }) {
  const MarkdownComponents: object = {
    ol: (props: any) => {
      const { ordered, children } = props;
      const start = props.start || 1;
      const listStyleType = ordered ? "decimal" : "disc";
      return (
        <ol start={start} style={{ listStyleType, marginTop: 0 }}>
          {children}
        </ol>
      );
    },

    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "768";
        const height = metaHeight ? metaHeight[1] : "532";
        const hasCaption = metastring?.toLowerCase().includes("{caption:");
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

        return (
          <div className="postImgWrapper">
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              component={"img"}
              alt={alt}
              src={image.properties.src}
              width={width}
              height={height}
            />
            {hasCaption ? (
              <div className="caption" aria-label={caption}>
                {caption}
              </div>
            ) : null}
          </div>
        );
      }
      return (
        <Typography
          sx={{
            paddingY: "0.5rem",
          }}
          gutterBottom
        >
          {paragraph.children}
        </Typography>
      );
    },
    h1: (heading: { children?: boolean; node?: any }) => {
      const id = uuidv4();
      return (
        <Typography
          variant="h3"
          component="h1"
          id={id}
          sx={{
            paddingY: "0.5rem",
          }}
        >
          {heading.children}
        </Typography>
      );
    },
    h2: (heading: { children?: boolean; node?: any }) => {
      const id = uuidv4();
      return (
        <Typography
          variant="h4"
          component="h2"
          id={id}
          sx={{
            paddingY: "0.5rem",
          }}
        >
          {heading.children}
        </Typography>
      );
    },
    h3: (heading: { children?: boolean; node?: any }) => {
      const id = uuidv4();
      return (
        <Typography
          variant="h5"
          component="h3"
          id={id}
          sx={{
            paddingY: "0.5rem",
          }}
        >
          {heading.children}
        </Typography>
      );
    },

    code({ className, ...props }: any) {
      return <code className={className} {...props} />;
    },
    blockquote: (props: any) => {
      return (
        <blockquote
          style={{
            backgroundColor: "#e6e6e6",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            paddingInline: "1rem",
            margin: 0,
          }}
        >
          {props.children}
        </blockquote>
      );
    },
    a: (props: any) => {
      return (
        <Link
          href={props.href}
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
          }}
        >
          {props.children}
        </Link>
      );
    },
    table: (props: any) => {
      return (
        <TableContainer sx={{ overflowX: "auto" }}>
          <table {...props} />
        </TableContainer>
      );
    },
  };
  return (
    <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
      {readmePost}
    </ReactMarkdown>
  );
}

