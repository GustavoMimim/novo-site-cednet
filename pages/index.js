import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Grupo Cednet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Grupo Cednet <Link href="/posts/first-post"><a>mantendo você conectado!</a></Link>
        </h1>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Acesse &rarr;</h3>
            <p>Confira e pague seus boletos ou libere a sua conexão em caso de atrasos.</p>
          </a>
        </div>
      </main>

      <section>
        <div className="section-columns">
          <div className="section-column-bills padding-64">
            <p className="section-title">Pague seus boletos sem sair de casa.</p>
            <Image
              src="/boletos.svg"
              alt="Logo do site"
              width={550}
              height={400}
            />
            <p>Seje em boleto ou cartão, com poucos cliques está feito,<br />tudo no conforto e segurança de sua casa!</p>
          </div>
          <div className="section-column-conection padding-64">
            <p className="section-title">Conexão bloqueada por falta de pagamento?</p>
            <Image
              src="/conexao.svg"
              alt="Logo do site"
              width={550}
              height={400}
            />
            <p>Sem problemas, nos de seu CPF para confirmamos quem você é<br />e a sua conexão é liberada imediatamente!<br /></p>
          </div>
        </div>
      </section>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/grupocednet.png"
            alt="Logo do site"
            width={148}
            height={50}
          />
        </a>
      </footer>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        main {
          min-height: 100vh;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        section {    
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          padding: 0px;
          position: relative;
          background-color: rgb(245, 245, 245);
        }

        .section-columns {          
          width: 100%;
          max-width: 1328px;
          display: flex;
          flex-direction: row;
        }

        .section-title {
          font-weight: 500;
          letter-spacing: -0.03em;
          font-size: 1.75rem;
        }

        .section-column-bills {
          color: white;
          background-color: #004a8b;
        }

        .section-column-conection {
        
        }

        .padding-64 {
          padding: 64px
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #004b8d;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #004b8d;
          border-color: #004b8d;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
