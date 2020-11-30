import { GetStaticProps } from "next";
import Header from '../components/header';

interface Props {
  pageTitle: string,
  pageDescription: string,
  posts: [{
    title: string,
    content: string
  }],
}

const Blog: React.FC<Props> = ({ posts, pageTitle, pageDescription }) => {
  return (
    <>
    <Header pageTitle={pageTitle} pageDescription={pageDescription} />
    {posts && posts.map(post => (
      <div key={Math.random()}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let posts = [];
  let pageTitle = '';
  let pageDescription = '';

  if(locale === 'en') {
    pageTitle = 'Next.JS | EN';
    pageDescription = 'next.js with internationalized routing';
    posts = [
      {
        title: "Post One",
        content: "This is the first post"
      },
      {
        title: "Post Two",
        content: "This is the second post"
      },
      {
        title: "Post Three",
        content: "This is the third post"
      }
    ]
  }

  if(locale === 'pt') {
    pageTitle = 'Next.JS | PT';
    pageDescription = 'next.js com sistema de rotas internacionais';
    posts = [
      {
        title: "Primeiro Post",
        content: "Esse é o primeiro post"
      },
      {
        title: "Segundo Post",
        content: "Esse é o segundo post"
      },
      {
        title: "Terceiro Post",
        content: "Esse é o terceiro post"
      }
    ]
  }

  return { 
    props: {
      pageTitle,
      pageDescription,
      posts
    }
  }
}
  
export default Blog;