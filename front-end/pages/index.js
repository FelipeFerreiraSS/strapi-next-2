import styles from '../styles/Home.module.css'
import MarkdownIt from 'markdown-it'

export default function Home(props) {
  const teste = "http://localhost:1337"
  const teste2 = props.post[0].imagem.url

  const md = new MarkdownIt({
    html: true
  })
  const htmlTexto = md.render(props.post[0].texto)

  return (
    <div className={styles.container}>
      {props.post.map((item) => (
        <div key={item.id} className={styles.post}>
          <h1>{item.Titulo}</h1>
          <span>{item.Data}</span>
          <img src={teste + teste2} alt={item.Titulo}/>
          <section dangerouslySetInnerHTML={{__html: htmlTexto}}></section>
        </div>
      ))}
    </div>
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
