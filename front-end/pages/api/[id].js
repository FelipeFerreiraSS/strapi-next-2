// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async (req, res) => {
    const result = await fetch(`http://localhost:1337/posts/${req.query.id}`)
    const json = await result.json()
  
    res.status(200).json({ 
      info: json
    })
  }
