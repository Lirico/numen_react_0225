import CounterContextProvider from "@/context/CounterContextProvider";
import Contador2 from "@/components/clase_5/Contador2";



const Services = () => {
  return (
    <>
      <CounterContextProvider>
        <Contador2 />
      </CounterContextProvider>
    </>
  )
}

export default Services