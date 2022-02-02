import Folder from "./Folder";
import "./styles.css";
import explorer from "./explorer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {explorer.isRoot &&
        explorer.items.map((exp) => <Folder key={exp.name} explorer={exp} />)}
    </div>
  );
}
