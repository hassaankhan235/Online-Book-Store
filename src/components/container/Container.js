import React, { Component } from 'react'
import Category from '../category/Category'
import "./container.css"

class Container extends Component{
    constructor(){
        super()
        this.state = {
            section: [
                {
                    title : 'HISTORY',
                    id : 1,
                    urlImage : 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                    linkUrl: 'history'
                },
                {
                    title : 'POLITICS',
                    id : 2,
                    urlImage : "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                    linkUrl: 'politics'
                },
                {
                    title : 'FICTION',
                    id : 3,
                    urlImage : "https://i.ibb.co/WGLy2jN/history.jpg",
                    linkUrl: 'classics'
                },
                {
                    title : 'CHILDEREN',
                    id : 4,
                    urlImage : '../../history.jpg',
                    linkUrl: 'childeren'
                },
                {
                    title : 'EDUCATION',
                    id : 5,
                    urlImage: '../../history.jpg',
                    linkUrl: 'education'
                },
                {
                    title : 'BIOGRAPHY',
                    id : 6,
                    urlImagel: '../../history.jpg',
                    linkUrl: 'biography'
                }
            ]
        }
    }
    render(){
        return(
            <div className="container">
            {
                this.state.section.map(({id, ...SectionProps}) => (
                    <Category key={id} {...SectionProps} />
                ))
            } 
            </div>
        )
    }
}
export default Container