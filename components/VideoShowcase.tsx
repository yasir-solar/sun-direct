import { installationVideos } from "@/data/media";
import { site } from "@/data/site";

export function VideoShowcase() {
  const schema={"@context":"https://schema.org","@graph":installationVideos.map(video=>({"@type":"VideoObject",name:video.title,description:video.description,contentUrl:`${site.url}${video.src}`,thumbnailUrl:`${site.url}${video.poster}`}))};
  return <section className="section video-section"><div className="container"><div className="video-intro"><p className="kicker">Installations in motion</p><h2>See the finished work from a different angle.</h2><p>Real field and aerial footage from supplied solar installations.</p></div><div className="video-grid">{installationVideos.map(video=><article key={video.src} className={video.vertical?"vertical-video":""}><video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}><source src={video.src} type="video/mp4"/>Your browser does not support embedded video.</video><div><h3>{video.title}</h3><p>{video.description}</p></div></article>)}</div></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></section>;
}
