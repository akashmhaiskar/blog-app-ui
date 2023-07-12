import React from 'react'
import Base from '../components/Base'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Col, Container, Row } from "reactstrap";
import CategorySideMenu from "../components/CategorySideMenu";
import { loadPostCategoryWise } from '../services/post-service';
import { useState } from 'react';
import {toast} from 'react-toastify'
import Post from '../components/Post';


function Categories() {
    const[posts,setPosts]=useState([])
  const {categoryId} = useParams()
  useEffect(()=>{
    console.log(categoryId);
    loadPostCategoryWise(categoryId).then(data=>{

        setPosts([...data])
    }).catch(error=>{
        console.log(error);
        toast.error("error in loading posts")
    })
  },[categoryId])
    return (
    <Base>
    <div>
        <Container className="mt-3">
          <Row>
            <Col md={2} className="pt-5">
              <CategorySideMenu />
            </Col>
            <Col md={10}>
                <h1>Blogs Count({posts.length})</h1>
                {
                    posts && posts.map((post,index)=>{
                        return (
                            <Post key={index} post={post}/>
                        )
                    })
                }
                {
                    posts.length<=0?<h1>No postin this category</h1>:''
                }
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  )
}

export default Categories