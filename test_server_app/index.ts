import { error } from 'node:console';
import * as http from 'node:http';
// import { IncomingMessage, ServerResponse, createServer }  from 'node:http';

class MyCoolClass {
  toJSON() {
    return 'a string!'
  }
}

const main = () => {
  console.log('Starting Main Function');

  const port = 9999;

  const requestHandler = (request: http.IncomingMessage, response: http.ServerResponse) => {
    class MyError extends Error {};
    class YourError extends Error {};

    try {
      console.log(`We got a request: ${request.method} ${request.url}`);
      request.on('data', (chunk) => {
        console.log(JSON.parse(chunk.toString()));
      })

      switch (request.url) {
        default:
        case '/':
          response.write(JSON.stringify(request.headers));
          break;
        case '/my-page':
          response.write('My Cool Page');
          break;
        case '/another-page':
          response.write('This is another page');
          break;
      }
  
      response.statusCode = 200;
      response.end();
    }
    catch(error) {
        if (error instanceof MyError)
          console.log('Its my error!')
        else if (error instanceof YourError)
          console.log('Its your error!')
        else {
          throw new Error("Unknown Error")
        }
      response.write(JSON.stringify({
        message: 'an error happened',
        code: 'NotFound'
      }));
    }
    finally {
      response.end();
    }
  }
  const server = http.createServer(requestHandler)
  
  server.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
  });
};

main();

/*
const renderUI = () => {
  const uploadButton = document.createElement('input');
  uploadButton.type = 'file';
  uploadButton.multiple = false;

  uploadButton.oninput = async () => {
    const theFile = uploadButton.files.item(0);

    const binaryData = await theFile.arrayBuffer();
    
    await fetch('https://remote-server', {
      method: "POST",
      body: binaryData
    })
  };
};
*/
