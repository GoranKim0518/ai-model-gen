export default function Head() {
  const naver = process.env.NAVER_SITE_VERIFICATION;
  return naver ? <meta name="naver-site-verification" content={naver} /> : null;
}