import { useAuthContext } from "./useAuthContext"


export const useLogout = ()=>{

    const {dispatch} = useAuthContext()
    const {dispatch:workoutsDispatch} = useAuthContext()

    const logout = ()=>{
        // remove user from storage
        localStorage.removeItem('user')
        localStorage.removeItem('selectedSidebarItem')
        localStorage.removeItem('prices')
        localStorage.removeItem('actions')
        localStorage.removeItem('sessionKey')

        //
        dispatch({type:'LOGOUT'})
        workoutsDispatch({type:`SET_STOCKS`,payload:null})

    }
    return {logout}
}