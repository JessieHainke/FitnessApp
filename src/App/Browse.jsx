import DefaultLayout from "../Layouts/DefaultLayout";
import Program from "./Program";

export default function Browse() {
  
  function Programs( {className, children} ) {
  {/*function Title( {className, children}) {
              <h2 className="text-2xl font-bold">${className}test</h2>
              
              return (
                <Title className={`bg-red ${children}`}/>
              
                <div className={`bg-gradient-to-br  pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center ${className}`}>
                    {children}
                    <Title />
                </div>)
            }
        } */}
        
  }

  return (
    <DefaultLayout>
      <div>
      {/*<Programs className="bg-gradient-to-br from-orange to-pink ${className}" />
      <Programs className="bg-gradient-to-br from-cyan to-yellowgreen ${className} {`<Title />`}" />*/}
      </div>
      <h2 className="text-2xl font-bold" >Browse</h2>
      <button className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center" onClick={clickHandler}>
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </button>
      <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">100 Push-Ups Challenge</h2>
      </div>
      <div className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </div>
      <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Stretch and Relax</h2>
      </div>
      <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </div>
    </DefaultLayout>
  );

}


export function clickHandler() {
  console.log("test");
  return (
  console.log(<Program />)
  )
}

