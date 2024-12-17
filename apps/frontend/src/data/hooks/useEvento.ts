import { useContext } from "react";
import ContextoEvento from "../context/ContextoEvento";

const useEvento = () => useContext(ContextoEvento);
export default useEvento;
