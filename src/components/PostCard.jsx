import React from 'react'
import service from '../appwrite/database'
import {Link} from 'react-router-dom'


function PostCard({$id, title, featureImage}) {

  
  
  return (
    <Link to={`/post/${$id}`}>
        <div >
            <div >
                <img src={service.getFilePreview(featureImage)} alt={title}
               className='w-72 h-60'/>

            </div>
            <h2
            
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard