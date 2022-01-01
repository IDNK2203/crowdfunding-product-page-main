import Header from "./components/Header";
import ProjectHeader from "./components/ProjectHeader";
import ProjectMetrics from "./components/ProjectMetrics";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header></Header>
      </div>
      <main>
        <div className="cf_project">
          <ProjectHeader></ProjectHeader>
          <ProjectMetrics></ProjectMetrics>
          <ProjectDetails></ProjectDetails>
        </div>
      </main>
    </div>
  );
}

export default App;
