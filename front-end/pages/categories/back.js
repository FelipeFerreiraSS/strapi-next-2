import styles from '../../styles/Home.module.css'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'


export default function Home(props) {

  const md = new MarkdownIt({
    html: true
  })

  return (
    <section className={styles.container}>
        <div className={styles.button}>
            <Link href="/">
              <a>
                <button>Home</button>
              </a>
            </Link>
          </div>
        <h1> Todos os posts sobre Back-end</h1>
        {props.back.posts.map((item) => (
            <div>
            <Link href={`/posts/${item.slug}`}>
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
  const res = await fetch('http://localhost:1337/categories/2')
  .then(res => res.json())
  return {
    props: {
      back: res
    }
  }
}
