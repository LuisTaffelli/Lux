import { createContext, useState  } from 'react'

const WebSocketContext = createContext(null)

export { WebSocketContext }


export default ({ children }) => {

    const [PersonalInfo, setPersonalInfo] = useState({

    })

    const [Flag, setFlag] = useState(null)

    let ws;

    const PlanHandler = ({PackName, ExtraOptions})=>{
        const ProvObject = {
            ...PersonalInfo,
            name: PackName,
            text: `Me gustaria contratar ${PackName}`
        }
        if(ExtraOptions){
            ProvObject.text = `Me gustaria contratar ${PackName} con ${ExtraOptions}`
        }

        setPersonalInfo(ProvObject)

    }

    


    

    


    ws = {
        PersonalInfo,
        PlanHandler,
        Flag,
        ChangeFlag : ()=>{
            setFlag((old)=>!old)
        },
    }
    




    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}


