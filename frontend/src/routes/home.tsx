export default function Home() {
  const token = localStorage.getItem("token");
  if (token) {
    const base64Url = token.split(".")[1];
    const name = atob(base64Url);
    const text = name.split('"')[5];
    return (
      <h1>
        <center>Hi {text} now you can use the webshop </center>
      </h1>
    );
  }
}
