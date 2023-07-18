import { Landing } from "./pages";
import { GlobalStyle } from "./style/GlobalStyle";

export default () => {
  console.log("App");
  return (
    <>
      <GlobalStyle />
      <Landing />
    </>
  );
};
