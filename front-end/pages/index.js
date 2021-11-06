import styles from '../styles/Home.module.css'
import MarkdownIt from 'markdown-it'

export default function Home(props) {

  const md = new MarkdownIt({
    html: true
  })

  return (
    <section className={styles.container}>
      <h1> Todos os posts </h1>
      <ul>
        <li><a href="categories/front">Front-end</a></li>
        <li><a href="categories/back">Back-end</a></li>
      </ul>
      {props.post.map((item) => (
        <div>
          <a href={`posts/${item.id}`}>
            <div key={item.id} className={styles.postsHome}>
              <h2>{item.title}</h2>
              <p>{item.Resumo}</p>
              <span>{item.Data}</span>
              <div>
                <img src={`http://localhost:1337${item.imagem.url}`} alt={item.Titulo}/>
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
