import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./Page"),
  loading: () => null
});
