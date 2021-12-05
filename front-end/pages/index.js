import styles from '../styles/Home.module.css'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'

export default function Home(props) {

  const md = new MarkdownIt({
    html: true
  })

  return (
    <section className={styles.container}>
      <h1> Todos os posts </h1>
      <div className={styles.categories}>
          <div className={styles.button}>
          <Link href="categories/front">
            <a>
              <button>Front-end</button>
            </a>
          </Link>
          </div>
          <div className={styles.button}>
          <Link href="categories/back">
            <a>
              <button>Back-end</button>
            </a>
          </Link>
          </div>
      </div>
      {props.post.map((item) => (
        <div>
          <Link href={`posts/${item.slug}`}>
            <a>
              <div key={item.id} className={styles.postsHome}>
                <h2>{item.title}</h2>
                <p>{item.Resumo}</p>
                <span>{item.Data}</span>
                <div>
                  <img src={`http://localhost:1337${item.imagem.url}`} alt={item.Titulo}/>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts')
  .then(res => res.json())
  return {
    props: {
      post: res.map((item) => {
        return {
          title: item.title,
          slug: item.slug,
          id: item.id,
          Resumo: item.Resumo,
          Data: item.Data,
          imagem: item.imagem
        }
      })
    }
  }
}
