import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Card from "../components/Card"
import Image from "../components/images"

const IndexPage = () => (
  <Layout>
    <SEO title="Douglas Oliveira" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12 lg:py-24 lg:mx-10">
      <div>
        <div className="m-5">
          <h1 className="text-3xl font-bold">
            Olá! eu sou o Douglas
            <img
              alt="👋"
              draggable="false"
              className="hello-animmated"
              src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
            ></img>
          </h1>
        </div>
        <div className="p-6">
          <p className="text-base lg:text-xl text-justify">
            Desenvolvedor Full Stack,
            <img
              alt="🚀"
              draggable="false"
              className="inline-block mx-2 w-6"
              src="https://twemoji.maxcdn.com/2/72x72/1f680.png"
            ></img>
            <br />
            tenho experiencia criando aplicações Web e Mobile com JavaScript /
            Reactjs / Nodejs / React Native e algumas outras bibliotecas e
            estruturas legais.
          </p>
        </div>
      </div>
      <div className="flex-wrap px-8 md:px-4 lg: px-0">
        <Image imageName="home.png" />
      </div>
    </div>
    <div className="flex-wrap mt-20">
      <p className="font-mono uppercase text-lg text-center ">
        Alguns de meus ultimos Trabalhos
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
      <Card
        name="Be The Hero"
        imageName="bethehero.png"
        description="Plataforma para ajudar pessoas que querem ajudar ONGs."
        backColor="#e53e3e"
        pageLink="https://be-the-hero-42.netlify.app/"
        sorceLink="https://github.com/douglasOlv/be-the-hero"
        techs={["NodeJS", "React", "React Native", "Knex"]}
      />
      <Card
        name="Video Maker"
        imageName="video-maker.png"
        description="Projeto para criar vídeos para o Youtube de forma automática."
        backColor="#3182ce"
        sorceLink="https://github.com/douglasOlv/video-maker"
        techs={["NodeJS", "IBM Watson", "Google Api", "Algorithmia Api"]}
      />
      <Card
        name="Modelo Site"
        imageName="site.png"
        description="Site institucional com navegação, galeria e captura de contato."
        backColor="#6c5ce7"
        pageLink="https://vibrant-bassi-3d6684.netlify.app/"
        sorceLink="https://github.com/douglasOlv/site-model"
        techs={["Gatsby", "Gatsby Image", "SEO", "Algorithmia Api"]}
      />
    </div>
  </Layout>
)

export default IndexPage
