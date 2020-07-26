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
                    urlImage : 'https://i.ibb.co/WGLy2jN/history.jpg',
                    linkUrl: 'history'
                },
                {
                    title : 'POLITICS',
                    id : 2,
                    urlImage : "https://i.ibb.co/3yvs7Kz/politics.jpg",
                    linkUrl: 'politics'
                },
                {
                    title : 'CLASSICS',
                    id : 3,
                    urlImage : "https://i.ibb.co/1vN27qv/Book-in-library-with-old-open-textbook-stack-piles-of-literature-text-archive-on-reading-desk-and-ai.jpg",
                    linkUrl: 'classics'
                },
                {
                    title : 'CHILDEREN',
                    id : 4,
                    urlImage : 'https://i.ibb.co/GsSLgNW/childeren.jpg',
                    linkUrl: 'childeren'
                },
                {
                    title : 'EDUCATION',
                    id : 5,
                    urlImage: 'https://i.ibb.co/RHdPh06/Education.jpg',
                    linkUrl: 'education'
                },
                {
                    title : 'BIOGRAPHY',
                    id : 6,
                    urlImage: 'https://i.ibb.co/zXJG0dn/biogr.jpg',
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