export default function SocialMetaTags() {
  return (
    <>
      {/* LinkedIn spécifique */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Facebook App ID (si vous en avez un) */}
      {/* <meta property="fb:app_id" content="your-app-id" /> */}

      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />

      {/* Autres métadonnées sociales */}
      <meta property="article:author" content="Daniel MWAMBA" />
      <meta property="profile:first_name" content="Daniel" />
      <meta property="profile:last_name" content="MWAMBA" />

      {/* WhatsApp et autres messageries */}
      <meta
        property="og:image:secure_url"
        content="https://danielmwamba.com/profile.png"
      />

      {/* Métadonnées supplémentaires pour un meilleur partage */}
      <meta name="author" content="Daniel MWAMBA" />
      <meta name="copyright" content="Daniel MWAMBA" />

      {/* Schema.org pour Google+ (même si obsolète, toujours utile) */}
      <meta itemProp="name" content="Daniel MWAMBA | Full Stack Developer" />
      <meta
        itemProp="description"
        content="Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies."
      />
      <meta itemProp="image" content="https://danielmwamba.com/profile.png" />
    </>
  );
}
