import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="icon" type="imagem/png" href="/logo.svg"/>
                    <title>Vanderley Gama</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://kit.fontawesome.com/5fb634a247.js"></script>
                </body>
            </Html>
        );
    }
}