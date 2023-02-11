import { createContext, useState  } from 'react'

const WebSocketContext = createContext(null)

export { WebSocketContext }


export default ({ children }) => {

    const [PersonalInfo, setPersonalInfo] = useState({

    })

    var Flag = null

    let ws;

    const PlanHandler = ({PackName, ExtraOptions})=>{
        const ProvObject = {
            ...PersonalInfo,
            name: PackName,
            text: ExtraOptions
        }
        if(!ExtraOptions){
            ProvObject.text = `Me gustaria contratar ${PackName}`
        }

        setPersonalInfo(ProvObject)

    }



    

    


    ws = {
        PersonalInfo,
        PlanHandler,
        Flag
    }
    




    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}


