import { PureComponent } from "react";
import "./App.css";
import { ClassComponent } from "./components/ClassComponent";
import { Counter } from "./components/Counter";
import { EventBinding } from "./components/EventBinding";
import { FormHandling } from "./components/FormHandling";
import { Functional } from "./components/Functional";
import { FunctionalEvent } from "./components/FunctionalEvent";
import  ClickCounter  from "./components/render-props/ClickCounter";
import  HoverCounter  from "./components/render-props/HoverCounter";
import { Jsx } from "./components/Jsx";
import { LifeCycleForClass } from "./components/LifeCycleForClass";
import { ListRendering } from "./components/ListRendering";
import { ParentComponent } from "./components/ParentComponent";
import { PureComponentClass } from "./components/PureComponentClass";
import { ReactFragements } from "./components/ReactFragements";
import { RefDemo } from "./components/RefDemo";
import { StateClass } from "./components/StateClass";
import { TernaryOperator } from "./components/TernaryOperator";
import User from "./components/render-props/User";
import RenderCounter from "./components/render-props/RenderCounter";
import CompC from "./components/context/CompC";
import { UserProvider } from "./components/context/userContext";

function App() {
  return (
    <div className="App">
      {/* <Functional /> */}
      {/* <ClassComponent /> */}
      {/* <Jsx /> */}
      {/* <StateClass /> */}
      {/* <Counter /> */}
      {/* <FunctionalEvent /> */}
      {/* <EventBinding /> */}
      {/* <TernaryOperator /> */}
      {/* <ListRendering /> */}
      {/* <FormHandling /> */}
      {/* <LifeCycleForClass /> */}
      {/* <ReactFragements /> */}
      {/* <ParentComponent /> */}
      {/* <RefDemo /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter />
      <HoverCounter />
      <User name={(isLoggedIn)=>isLoggedIn?"Ankit":"Ankit Kumar"}/> */}
      {/* <RenderCounter render={(count,clickHandler)=>{
        return <ClickCounter count={count} clickHandler={clickHandler} />
      }}/>
      <RenderCounter render={(count,clickHandler)=>{
        return <HoverCounter count={count} clickHandler={clickHandler} />
      }}/> */}
      <UserProvider value="Ankit">
      <CompC />
      </UserProvider>
       
    </div>
  );
}

export default App;
