import styles from '../../styles/Home.module.css'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'


export default function Posts({info}) {

  const md = new MarkdownIt({
    html: true
  })

  const htmlTexto = md.render(info.texto)  

  console.log(`http://localhost:1337/${info.imagem.url}`)


  return (
    <div className={styles.containerPost}>
        <div>
          <div className={styles.button}>
            <Link href="http://192.168.18.6:3000/">
              <a>
                <button>Home</button>
              </a>
            </Link>
          </div>
          <h1>{info.title}</h1>
          <p>{info.Resumo}</p>
          <span>{info.Data}</span>
          <img src={`http://localhost:1337${info.imagem.url}`} alt={info.Titulo}/>
          <section dangerouslySetInnerHTML={{__html: htmlTexto}}></section>
        </div>
    </div>
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
