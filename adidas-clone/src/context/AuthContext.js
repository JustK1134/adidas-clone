import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate} from "react-router-dom"


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) =>{
    
    let [loading, setLoading] = useState(true)
    let [customerFirstName, setCustomerFirstName] = useState()
    
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [authToken, setAuthToken] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [error, setError] = useState({status: 200, detail: 'no error'})

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()

        let response = await fetch('https://khoiluc-portfolio-adidas-clone.up.railway.app/api/authentication/token/', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log('data:', data)
        
        if (response.status == 200){
            console.log(response.status)
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            // console.log(jwt_decode(data.access).user_id)
            localStorage.setItem('authTokens',JSON.stringify(data))
            // console.log("return data:", customer_name)
            setCustomerFirstName(jwt_decode(data.access).first_name)
            navigate('/')
        }else{
            alert('something went wrong')
        }

    }

    let logoutUser = ()=>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let updateToken = async () => {
 
        

        let response = await fetch('https://khoiluc-portfolio-adidas-clone.up.railway.app/api/authentication/token/refresh/', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({'refresh':authToken.refresh})
        })
        let data = await response.json()

        if (response.status === 200){
            console.log("update token")
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            setCustomerFirstName(jwt_decode(data.access).first_name)
            console.log(user)
            localStorage.setItem('authTokens',JSON.stringify(data))
        }else{
            logoutUser()
        }
        if (loading){
            setLoading(false)
        }
    }

    useEffect(()=>{

        if (loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            if(authToken){
                updateToken()
            }
            
        }, fourMinutes);
        return  () => clearInterval(interval)
    }, [authToken, loading])


    const HandleError = (error_data) =>{
        setError((prevData)=>{return error_data})
    }

    const [searchData, setSearchData] = useState()
    const [searchHeader, setSearchHeader] = useState({title: 'Men', division:'Shoes', quantity:'1020', description:"Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfty slide. Browse styles for woman and kids here"})
    const [filterData, setFilterData] = useState()
    const [filterHeader, setFilterHeader] = useState({title: 'Men', division:'Shoes', quantity:'1020', description:"Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfty slide. Browse styles for woman and kids here"})

    const handleSearchData = (data, header_data) =>{
        setSearchData((prevData)=>{return data})
        setSearchHeader((prevData)=>{return header_data})
    }

    const handleFilterData = (data, header_data) =>{
        setFilterData((prevData)=>{return data})
        setFilterHeader((prevData)=>{return header_data})
        
    }

    let context_data ={
        user:user,
        authToken:authToken,
        loginUser:loginUser,
        logoutUser: logoutUser,
        error:error,
        HandleError: HandleError,
        handleSearchData: handleSearchData,
        handleFilterData, handleFilterData,
        searchData: searchData,
        filterData: filterData,
        searchHeader:searchHeader,
        filterHeader:filterHeader,
        customerFirstName:customerFirstName,


    }
    return (
        <AuthContext.Provider value ={context_data}>
            {children}
        </AuthContext.Provider>
    )
}