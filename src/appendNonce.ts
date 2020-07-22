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
  
    return ''; // workaround as meta nonce is not present when ng is build
  }

  export function addLibs () {    
    document.addEventListener('DOMContentLoaded', function() {
        let scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', 'https://code.jquery.com/jquery-3.5.1.min.js');        
        scriptTag.setAttribute('crossorigin', 'a');
        scriptTag.setAttribute('integrity', "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=");
        scriptTag.setAttribute("nonce", getMeta('nonce'));
        document.body.appendChild(scriptTag);
    });
  }