import styles from '../styles/Home.module.css'
import MarkdownIt from 'markdown-it'

export default function Home(props) {

  const md = new MarkdownIt({
    html: true
  })

  return (
    <section className={styles.container}>
      <h1> Todos os posts </h1>
      {props.post.map((item) => (
        <div>
          <a href={`/post/${item.slog}`}>
            <div key={item.id} className={styles.postsHome}>
              <h2>{item.Titulo}</h2>
              <p>{item.Resumo}</p>
              <span>{item.Data}</span>
              <div>
                <img src={item.imagem.name} alt={item.Titulo}/>
              </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/posts')
  .then(res => res.json())
  return {
    props: {
      post: res
    }
  }
}
