export function appendNonce() {
    const scripts = document.getElementsByTagName("script");
    // add nonce to scripts
    Array.from(scripts).forEach(script => {
        script.setAttribute("nonce", getMeta('nonce'));
    });

    const styles = document.getElementsByTagName("style");
    // add nonce to styles
    Array.from(styles).forEach(style => {
        style.setAttribute("nonce", getMeta('nonce'));
    })
}

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return '' || 'dummyNonce'; // workaround as meta nonce is not present when ng is build
  }
