/* global AD_CLIENT */
export default ({ router }) => {
  if (
    // only in production
    process.env.NODE_ENV === 'production' &&

    // only if we got an ID and tracker url
    AD_CLIENT &&

    // and we are ready
    typeof window !== 'undefined'
  ) {
    (function() {
      var d=document,
      g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];

      g.setAttribute('data-ad-client', AD_CLIENT);
      g.async=true;
      g.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      s.parentNode.insertBefore(g,s);
    })();
  }
}

