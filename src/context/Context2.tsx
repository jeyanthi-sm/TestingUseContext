import { createContext, useEffect, useState } from 'react';
import React from 'react';
import { Misdemeanour } from '../types/all-types';

export const functionTemplate = () => {};
export interface Context2Props {
    misdemeanours?: Misdemeanour[],
    updateStatus?:typeof functionTemplate
}
export const Context2:React.Context<Context2Props> 
= createContext<Context2Props>({misdemeanours:[]}); 

export const fetchMisdemeanours = async () => {
      const response = await fetch('http://localhost:8080/api/misdemeanours/10');
      if (response.ok)
      {
        const json = await response.json();
       // setapiGetMisDemeanour(json);
        console.log(json.misdemeanours);
        return json;
        }
       };


export  const Context2DataProvider = ({ children }: { children: React.ReactNode }) => {
     const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});
     const [context, setContext] = useState<Context2Props| undefined>();
      
        const updateContext = (contextUpdates = {}) =>
          setContext(currentContext => ({ ...currentContext, ...contextUpdates }))
      
        useEffect(() => {
          const populateContext = (contextUpdates = {}) =>
            setContext(currentContext => ({ ...currentContext, ...contextUpdates }))
      
          async function fetchMisdemeanours() {
            const misdemean = await fetchMisdemeanours();
            if (misdemean !== undefined)
            populateContext(misdemean)
          }
      
          fetchMisdemeanours()
        }, [])
      
        useEffect(() => {
          if (context?.updateStatus === functionTemplate) {
            updateContext({
              updateStatus: (value: any) => updateContext({ status: value }),
            })
          }
        }, [context?.updateStatus]) 
      
        return <Context2.Provider value={apiGetMisDemeanour}>{children}</Context2.Provider>
      
  
}
