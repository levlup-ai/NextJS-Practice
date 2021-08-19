import Link from 'next/link'
import Components from "../components/Components"
import Image from "next/image"
import Head from "next/head"

function index() {
  return (
    <div className="container">
        
        <head>
            <title>Learning Next.JS</title>
            <meta name="keywords" content="Next.js, javascript"/>
        </head>

        <Image src="/image.png" width={100} height={100} alt="Logo"/>
        <h1 style={{color:"pink"}}>Next.JS Test Project</h1>  
        <ul>
        <li>
            <Link href="/">
            <a style={{color:"green"}}>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
            <a className="about">About Us</a>
            </Link>
        </li>
        </ul>
        <Components></Components>

        <style jsx>
            {
                `
                    .about{
                       color:red 
                    }
                `
            }
        </style>

    </div>
  )
}

export default index