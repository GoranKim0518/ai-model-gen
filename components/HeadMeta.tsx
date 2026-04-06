export default function HeadMeta({ token }: { token?: string }) {
  return (
    <>
      <meta name="google-site-verification" content={token ?? ""} />
    </>
  );
}