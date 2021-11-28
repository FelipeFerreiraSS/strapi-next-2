import styles from '../../styles/Home.module.css'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'

import Head from 'next/head'


export default function Posts({info}) {

  const md = new MarkdownIt({
    html: true
  })

  const htmlTexto = md.render(info.texto)  

  console.log(`http://localhost:1337/${info.imagem.url}`)


  return (
    <>
    <Head>
      <title>{info.title}</title>
    </Head>
    <main className={styles.containerPost}>
        <div>
          <div className={styles.button}>
            <Link href="/">
              <a>
                <button>Home</button>
              </a>
            </Link>
          </div>
          <h1>{info.title}</h1>
          <p>{info.Resumo}</p>
          <span>{info.Data}</span>
          <img src={`http://localhost:1337${info.imagem.url}`} alt={info.Titulo}/>
          <main dangerouslySetInnerHTML={{__html: htmlTexto}}></main>
        </div>
    </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://192.168.18.6:3000/api/posts/${context.params.slug}`)
  const json = await res.json()
  return {
    props: {
      info: json.info
    }
  }
}
