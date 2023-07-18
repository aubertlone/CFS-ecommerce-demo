import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ allProducts }) {
	return (
		<>
			<Head>
				<title>Plants | Home</title>
			</Head>
			<div className="container">
				<h2 className={styles.title}>
					All Products <span>🌿</span>
				</h2>
				<div className={styles.products_container}>
					{allProducts.map((product) => {
						return (
							<div className={styles.product_card} key={product.id}>
								<Link href={`products/${product.slug}`}>
									<a>
										<div className={styles.product_img}>
											<img  src={product.image.url} alt={product.name} className={styles.product_image}  />
										</div>
									</a>
								</Link>
								<div padding-bottom={'25 px'} className={styles.product_content}>
									<h3>{product.name}</h3>
									<p>${product.price} </p>
									
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clk79spfd0l7w01urb7gc30w0/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query Products {
				products(first: 25) {   
					id
					name
					slug
					price
					image {
						url
					}
				}
			}
		`,
	});
	
	const allProducts = data.data.products;
	
	console.log(allProducts)
	return {
		props: {
			allProducts,
		},
	};
}
