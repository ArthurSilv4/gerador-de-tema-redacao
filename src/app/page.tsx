import Image from 'next/image'
import { BoxAds } from './components/boxAds'

export default function Home() {
  return (
    <main className="">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5537187449610195"
      ></script>

      <ins id="adsbygoogle"
        className="block bg-red-100"
        data-ad-client="ca-pub-5537187449610195"
        data-ad-slot="9882629147"
        date-adstest="on"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </main>
  )
}
