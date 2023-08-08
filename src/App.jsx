import { useState, useEffect } from "react";
import { supabase } from "./supabase.js";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("test").select();
    setData(data[0].name);
  }

  return <>{data}</>;
}

export default App;
