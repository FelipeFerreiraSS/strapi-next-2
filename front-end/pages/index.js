import styles from '../styles/Home.module.css'

export default function Home(props) {
  const teste = "http://localhost:1337"
  const teste2 = props.post[0].imagem.url
  console.log(teste + teste2)

  return (
    <div className={styles.container}>
      {props.post.map((item) => (
        <div key={item.id} className={styles.post}>
          <h1>{item.Titulo}</h1>
          <span>{item.Data}</span>
          <img src={teste + teste2} alt={item.Titulo}/>
          <p>{item.texto}</p>
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
