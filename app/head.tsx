export default function HeadMeta({ token }: { token?: string }) {
  return (
    <>
      <meta name="google-site-verification" content={token ?? "9mPI4iaZWCnXOa_sUT_9t2ZWxT7WJ4NEOTWsEg3NF2I"} />
    </>
  );
}