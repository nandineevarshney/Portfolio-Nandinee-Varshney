/** Image with lazy loading defaults — pass loading="eager" for above-the-fold LCP images */
export default function LazyImage({
  loading = "lazy",
  decoding = "async",
  ...props
}) {
  return <img loading={loading} decoding={decoding} {...props} />;
}
