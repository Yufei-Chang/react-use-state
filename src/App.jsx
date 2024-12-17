import { useState } from "react";
import languages from "./datas";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <>
      <main className="container my-5">
        <div className="d-flex flex-column align-items-center">
          <nav>
            {
              languages.map((curLang) => (
                <button onClick={() => {setSelectedLanguage(curLang)}} key={curLang.id} className="btn btn-primary me-2">{curLang.title}</button>
              ))
            }
          </nav>
          <section className="w-50">
            <div className="card">
              <div className="card-body">
                <h3>{selectedLanguage.title}</h3>
                <p>{selectedLanguage.description}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
