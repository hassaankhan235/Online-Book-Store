import React from 'react'
import './category.css'
import {withRouter} from 'react-router-dom'

const Category = ({title,urlImage,history,linkUrl,match}) => (
    <div style={{
        backgroundImage: 'url(' + `${urlImage}` + ')'
     }} 
     className= 'card'>
    <div className="category" onClick={()=> history.push(`${match.url}${linkUrl}`,
        {search: `?q=${linkUrl}`}
        )}>
    <h1 className="title">{title}</h1>
    <span className="subtitle"> SHOP NOW</span>
    </div>
    </div>
)
export default withRouter(Category);