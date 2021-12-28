import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Product from "../components/Product/Product";

const Banner = styled.div`
  width: 70%;
  height: 500px;
  background-color: var(--header-color);
  position: relative;
  margin: 20px auto;
`;

const ProductsContainer = styled.div`
  width: 70%;
  height: auto;
  background-color: red;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Head>
      <Banner>
        <Image src="/images/banner.png" layout="fill" objectFit="fill" />
      </Banner>
      <ProductsContainer>
        {/* <Product />
        <Product />
        <Product />
        <Product /> */}
      </ProductsContainer>
    </div>
  );
}
