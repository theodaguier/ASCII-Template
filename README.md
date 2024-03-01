# React + TypeScript + Vite ASCII Template

This project is based on [this template](https://play.ertdfgcvb.xyz/).

## Architecture

Scripts can be imported into the `/src/programs/basics/` directory. It's important to link them from the `index.html` file.

Here is an example of how to do this:

```html
<body>
  <pre></pre>
  <script type="module">
    import { run } from "/src/run.js";
    import * as program from "/src/programs/basics/ascii-waves.js";
    run(program, { element: document.querySelector("pre") })
      .then(function (e) {
        console.log(e);
      })
      .catch(function (e) {
        console.warn(e.message);
        console.log(e.error);
      });
  </script>
</body>
```
