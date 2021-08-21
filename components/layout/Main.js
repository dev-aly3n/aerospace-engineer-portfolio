const Main = (props) => {
  return (
    <main className="bg-black w-full min-h-screen overflow-x-hidden">
      {props.children}
    </main>
  );
};

export default Main;
