export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="container py-20">
      <h1 className="font-heading text-4xl">{title}</h1>
      <p className="mt-4 text-foreground/70 max-w-2xl">
        This page is a placeholder. Describe the content you want here and I will fill it in next. It will share the same global navigation and styling as the rest of the site.
      </p>
    </div>
  );
}
