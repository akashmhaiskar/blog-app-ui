import { Link, useParams } from "react-router-dom"
import Base from "../components/Base"
import { Card, CardBody, CardText, Col, Container, Row } from "reactstrap"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { loadPost } from "../services/post-service"
import { BASE_URL } from "../services/Helper"

const PostPage=()=>{

    const {postId}=useParams()
    const [post,setPost]=useState(null)
    useEffect(()=>{
        //load post of postId
        loadPost(postId).then(data=>{
            console.log(data);
            setPost(data)
        }).catch(error=>{
            console.log(error)
            toast.error("Error in loading post")
        })
    },[])

    const printDate=(numbers)=>{
        return new Date(numbers).toLocaleDateString()
    }

    return (
        <Base>
        <Container className="mt-4">
            <Link to="/">Home</Link> / {
                post && (<Link to="">{post.title} </Link>)
            }
            <Row>
                <Col md={{
                    size:12
                }}>
                <Card className="mt-3 ps-2 border-0 shadow">
                    {
                        (post) && (
                            <CardBody>
                            <CardText>Posted By <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b></CardText>
                            <CardText>
                                <span className="text-muted">{post.category.categoryTitle}</span>
                            </CardText>
                            <div className="divider" style={{
                                width:'100%',
                                height:'1px',
                                background:'#e2e2e2'
                            }}>

                            </div>
                            <CardText><h1>{post.title}</h1></CardText>
                            <div className="image-container mt-3" style={{maxWidth:'50%'}}> 
                                <img src={BASE_URL+ '/post/image/' + post.imageName}></img>

                            </div>
                            <CardText className="mt-5" dangerouslySetInnerHTML={{__html:post.content}}></CardText>
                            </CardBody>
                        )
                    }
                </Card>

                </Col>
            </Row>
        </Container>
        </Base>
    )
}


export default PostPage