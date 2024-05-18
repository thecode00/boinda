export default () => {
  const py = document.createElement("div");
  py.innerHTML = `
    <script
      type="py"
      src="./src/wasm/main.py"
      config="./src/wasm/pyscript.toml"
    ></script>
`;

  document.body.appendChild(py);
};
