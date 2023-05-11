import DefaultLayout from "../Layouts/DefaultLayout";


export default function Profile() {
  return (
    <DefaultLayout className="text-red h-screen">
      <h2 className="text-2xl font-bold">Name</h2>
      <div className="flex flex-col content-center pt-12">
        <div className="rounded-full p-14 w-14 h-14 self-center bg-gradient-to-br from-greenblue to-seablue"></div>
        <p className="font-normal text-m pt-2 self-center">Profil bearbeiten</p>
      </div>
      <p className="font-normal text-m">Aktueller Trainingsplan</p>
      <div className="bg-bgmedium m-0 pt-16 rounded-2xl px-4 pb-3 h-auto shadow-white flex gap-4">
        <img src="./img/profile_circle.svg" className="w-18 h-18 "></img>
        <div>
          <p className="font-normal text-m pt-2">Titel des Programms</p>
          <p className="font-normal text-xs pt-2">1 von 8 geschafft</p>
        </div>
      </div>
    </DefaultLayout>
  );
}
