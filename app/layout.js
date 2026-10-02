import "./globals.css";
const siteUrl="https://preetamsinghpramukh.com";
const title="Chaudhary Preetam Singh Pramukh | District President, RLD — Mathura";
const description="Public profile of Chaudhary Preetam Singh Pramukh, District President of the Rashtriya Lok Dal in Mathura. Journey, public record, photos, videos and news coverage.";
export const metadata={
  metadataBase:new URL(siteUrl),
  title:{default:title,template:"%s | Preetam Singh Pramukh"},
  description,
  keywords:["Preetam Singh Pramukh","Rashtriya Lok Dal","RLD Mathura","Goverdhan MLA candidate","RLD district president Mathura","Preetam Singh RLD"],
  authors:[{name:"Preetam Singh Pramukh"}],
  alternates:{canonical:siteUrl},
  openGraph:{title,description,url:siteUrl,siteName:"Preetam Singh Pramukh",images:[{url:"/og-image.jpg",width:1200,height:630,alt:"Chaudhary Preetam Singh Pramukh — District President, RLD Mathura"}],locale:"en_IN",type:"profile"},
  twitter:{card:"summary_large_image",title,description,images:["/og-image.jpg"]},
  robots:{index:true,follow:true},
};
export const viewport={themeColor:"#F47D00"};
const jsonLd={
  "@context":"https://schema.org",
  "@type":"Person",
  name:"Chaudhary Preetam Singh Pramukh",
  alternateName:"Preetam Singh Pramukh",
  jobTitle:"District President, Rashtriya Lok Dal — Mathura",
  affiliation:{"@type":"PoliticalParty",name:"Rashtriya Lok Dal"},
  address:{"@type":"PostalAddress",addressLocality:"Mathura",addressRegion:"Uttar Pradesh",addressCountry:"IN"},
  url:siteUrl,
  image:siteUrl+"/images/portrait-podium.jpg",
  sameAs:["https://www.instagram.com/preetamsinghrld/","https://www.youtube.com/@preetamsinghrld1823"],
};
export default function RootLayout({children}){return <html lang="en"><body>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
{children}
</body></html>}
