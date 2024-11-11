import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { userContext } from "../contexts/UserContextProvider";

export default function HomePage() {

    const [refresh, setRefresh] = useState(false)
    const [meetings, setMeetings] = useState([])

    const fetchAllMeetings = async() => {
        try {
            const response = await axios.get("https://buddy-finder-api.vercel.app/meetings")
            return response.data
        } catch (err) {
            console.error(err)
        }
    }

    const chooseCurrentId = (usedNumbers, id) => {
        for ( const number of usedNumbers) {
            if (number != id ) {
                return number
            }
        }
        return -1 //used
    }

    const createNamesArray = (meetings, currentId) => {
        let namesArray = []
        for ( const meeting of meetings) {
            if (meeting.id == currentId) {
                namesArray.push(meeting.name)
            }
        }
        return namesArray
    }

    const createFinalMeetingsArray = (meetings) => {
        const finalMeetings = []
        // create name array
        // check if the names are different for index
        const usedNumbers = new Set()

        for (let i = 0 ; i < meetings.length; i++) {
            if (!usedNumbers.has(meetings[i].id)) {
                usedNumbers.add(meetings[i].id)
                const namesArray = createNamesArray(meetings, meetings[i].id)
                const {id, date, time, title, address} = meetings[i]
                const finalObj = {id, date, time, title, name: namesArray, address}
                finalMeetings.push(finalObj)
            }
        }
        // create new object with name array
        // add to meetings array
        console.log(finalMeetings)
        return finalMeetings
    }

    useEffect(() => {
        fetchAllMeetings()
            .then((data) => {setMeetings(createFinalMeetingsArray(data))})
    }, [refresh])
    
    const { currentUser } = useContext(userContext)
    const uid = currentUser ? currentUser.uid : null

    const join = async(meeting_id) => {
        try {
            console.log("gay"+ meeting_id)
            const response = await axios.post(`https://buddy-finder-api.vercel.app/join/${uid}`, {
                id: meeting_id
            })
            setRefresh(!refresh)
        } catch (err) {
            console.error(err)
        }
    }
    
  return (
    <Container>
        <Row>
            <Col xs={12} sm={3}>
                <Form.Group controlId="search">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="search"
                    />
                </Form.Group>
            </Col>
            <Col xs={12} sm={9}>
                <Row>
                    {meetings.length > 0 ? 
                        meetings.map((meeting) => <PostCard meeting={meeting} join={(meeting_id) => join(meeting_id)} key={meeting.id}/>)
                        : <p>No meetings available</p>                    
                    }
                </Row>
            </Col>

        </Row>
    </Container>
  )
}
