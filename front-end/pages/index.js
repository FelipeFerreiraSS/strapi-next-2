import styles from '../styles/Home.module.css'
import MarkdownIt from 'markdown-it'

export default function Home(props) {

  const md = new MarkdownIt({
    html: true
  })

  return (
    <div className={styles.container}>
      {props.post.map((item) => (
        <div key={item.id} className={styles.post}>
          <h1>{item.Titulo}</h1>
          <span>{item.Data}</span>
          <img src={item.imagem.name} alt={item.Titulo}/>
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
