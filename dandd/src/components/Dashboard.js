import React,{useState} from 'react'
import {Card,Alert,Button} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser,logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError("")

        try{
            await logout()
            history.pushState('/login')

        }catch {
            setError("Failed to log out")
        }
    }

    return (
    <>
        <Card> 
            <Card.Body>
            <h2 className="text-center mb-4">Dashboard</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <strong>Email:</strong> */}
            {/* <Link to="/" className="btn btn-primary w-100 mt-3">Get Started</Link> */}
            </Card.Body>


        </Card>
        <div className="2-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
    </>
    )
}
