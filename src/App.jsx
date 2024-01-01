import "./App.css";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    
    <div className="bg-[url(../public/img/947ac202e6c04f0baa696848ba98b86d.jpg)] bg-cover bg-no-repeat ">
      <Header/>
      <section className="h-screen ">
        <div>
        <Booking/>
        <Table/>
        </div>
        
        
      </section>
      
    </div>
   
    
  
   
  );

}

export default App;
