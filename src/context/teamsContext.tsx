import { ReactNode, createContext, useContext, useState } from "react";
import { ITeam } from "../components/League";
import toast, { Toaster } from 'react-hot-toast';
import { IUser } from "../pages/User";


type TeamContextProvider = {
    children: ReactNode
}

export type TeamsContext = {
    addToMyTeams: ({id,team,logo, user}: ITeam & IUser) => void
    removeFromMyTeam: ({id,team,logo, user}: ITeam & IUser) => void 
    finalLineup: (user: string) => void
    randomTeams: () => void
    user1Teams: ITeam[]
    user2Teams: ITeam[]
    finalTeams: ITeam[]
    gameTeam: ITeam[] 
    formerTeams: ITeam[]
}

const TeamsContext = createContext({} as TeamsContext)

export function useTeamContext() {
    return useContext(TeamsContext)
}


export function TeamContextProvider({children}: TeamContextProvider){

    const [finalTeams, setFinalTeams] = useState<ITeam[]>([])
    const [gameTeam, setGameTeam] = useState<ITeam[]>([])
    const [formerTeams, setFormerTeams] = useState<ITeam[]>([])

    const [user1Teams, setUser1Teams] = useState<ITeam[]>([])
    const [user2Teams, setUser2Teams] = useState<ITeam[]>([])

    const addToMyTeams = ({id, team, logo, user}:any) => {
        const addTeam = { id, team ,logo}
        if(user === 'user1') {
            setUser1Teams((myTeams: ITeam[]) => {
                if(myTeams.find((item: ITeam )=> item.id === id)){
                    toast.error('Уже добавил, глаза протри!')
                    return myTeams
                } else {
                    return [...myTeams, addTeam]
                }
            })
        } else {
            setUser2Teams((myTeams: ITeam[]) => {
                if(myTeams.find((item: ITeam )=> item.id === id)){
                    toast('Уже добавил, глаза протри!')
                    return myTeams
                } else {
                    return [...myTeams, addTeam]
                }
            })
        }
        
    }

    const removeFromMyTeam = ({id, user}: ITeam & IUser) => {
        if(user === 'user1') {
            return setUser1Teams((myTeams: ITeam[]) => {
                return myTeams.filter((item: ITeam)=> item.id !== id)
            })
        } else {
            return setUser2Teams((myTeams: ITeam[])  => {
                return myTeams.filter((item: ITeam) => item.id !== id)
            })
        }
    }

    const finalLineup = (user: string) => {
        if(user === 'user1') {
            setFinalTeams((finalTeams: ITeam[] )=> [...finalTeams,...user1Teams])
            setUser1Teams([])
            toast.success('команды на арене чемпион!')
        } else {
            setFinalTeams((finalTeams: ITeam[] )=> [...finalTeams,...user2Teams])
            setUser2Teams([])
            toast.success('команды на арене победитель!')
        }
        
    }
    
    const randomTeams = () => {
        if(gameTeam.length === 2) setGameTeam([])

        let randomArr: ITeam[] = [...finalTeams]
        if(randomArr.length < 1) return []
        let index: number = Math.floor(Math.random() * randomArr.length);
        setGameTeam((gameTeam: ITeam[]) => [...gameTeam, randomArr[index]])
        setFormerTeams((prevTeams: ITeam[]) => [...prevTeams, randomArr[index]])
        finalTeams.splice(index,1)
    }

    return (
        <TeamsContext.Provider value={{
            addToMyTeams,
            removeFromMyTeam,
            finalLineup,
            randomTeams,
            user1Teams,
            user2Teams,
            finalTeams,
            gameTeam,
            formerTeams
        }}>
            {children}
            <Toaster
                position='bottom-right'
                toastOptions={{
                    style: {
                      fontSize: '1.5rem'
                    },
                  }}
            />
        </TeamsContext.Provider>
    )
}