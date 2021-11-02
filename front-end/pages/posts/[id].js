import styles from '../../styles/Home.module.css'
import MarkdownIt from 'markdown-it'

export default function Posts(props) {
  // const teste = "http://localhost:1337"
  // const teste2 = props.post[0].imagem.url

  const md = new MarkdownIt({
    html: true
  })
  // const htmlTexto = md.render(props.post[0].texto)
  const htmlTexto = md.render(props.post.texto)

  return (
    <div className={styles.containerPost}>
      {props.post.map((item) => (
        <div key={item.id}>
          <h1>{item.Titulo}</h1>
          <p>{item.Resumo}</p>
          <span>{item.Data}</span>
          <img src={teste + teste2} alt={item.Titulo}/>
          <section dangerouslySetInnerHTML={{__html: htmlTexto}}></section>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337/api/posts${context.params.id}`)
  .then(res => res.json())
  return {
    props: {
      post: res
    }
  }
}
