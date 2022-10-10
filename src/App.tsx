function App() {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex flex-col justify-center items-center bg-red-500 w-[900px] h-[500px] gap-[100px]">
        <p>Vuelo de noche, duermo en el día y nunca veras plumas en ala mía.</p>
        <form className="flex flex-col gap-5">
          <input className="bg-transparent border-b border-black" type="text" />
          <button className="bg-green-500 py-2 rounded-md">Adivinar!</button>
        </form>
      </div>
    </div>
  );
}

export default App;
