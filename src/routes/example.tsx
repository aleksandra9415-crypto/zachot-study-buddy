import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { referatPage } from "@/data/seoToolReferat";
import { SeoToolLayout } from "./ai.$slug";

export const Route = createFileRoute("/example")({
  head: () => ({
    meta: [
      { title: referatPage.metaTitle },
      { name: "description", content: referatPage.metaDescription },
      { property: "og:title", content: referatPage.metaTitle },
      { property: "og:description", content: referatPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://zachot-study-buddy.lovable.app/example" }
    ]
  }),
  component: SeoToolPage,
});

function SeoToolPage() {
  return <SeoToolLayout page={referatPage} />;
}
