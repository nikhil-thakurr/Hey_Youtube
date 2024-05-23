import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'

const data=[
    {
        name:"Nikhil Thakur",
        text: "This is Amazing",
        replies:[
            {
                name:"Ankit Sharma",
                text: "I think you are over exaggarating",
                replies:[
                    {
                        name:"Silvi Mittal",
                        text: "I dont think so , its indeed great .",
                        replies:[
                            {
                                name:"Zack Thakur",
                                text: "Yes even i like this content alot . It is very peacefull to listen at times and calms me down",
                                replies:[{
                                    name:"Nikhil Thakur",
                                    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                    replies:[
                                        {
                                            name:"Priyanshu Verma",
                                            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                            replies:[
                                    
                                            ]
                                        },
                                        {
                                            name:"Sunil Thakur",
                                            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                            replies:[
                                    
                                            ]
                                        },
                                        {
                                            name:"Ankita Kapoor",
                                            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                            replies:[
                                    
                                            ]
                                        },
                                    ]
                                },
                        
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },{
        name:"Nidhi Thakur",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies:[
            {
                name:"Nikhil Thakur",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                replies:[
                    {
                        name:"Neha Verma",
                        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        replies:[
                
                        ]
                    },
                ]
            },
        ]
    },{
        name:"Anu Malik",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies:[
            {
                name:"Ms Dhoni ",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                replies:[
        
                ]
            },

        ]
    },{
        name:"Meena Kumari",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies:[

        ]
    },{
        name:"Mangal Singh",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        replies:[
            {
                name:"Jatin Shah",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                replies:[
                    {
                        name:"Panjit Singh",
                        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        replies:[   {
                            name:"Aahan Pulastya",
                            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                            replies:[
                                {
                                    name:"Jyoti Pandey",
                                    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                    replies:[{
                                        name:"Deepak Sharma",
                                        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                        replies:[
                                
                                        ]
                                    },
                            
                                    ]
                                },
                            ]
                        },
                
                        ]
                    },
                ]
            },
        ]
    },
]

const Comments = () => {
  return (
    <div className='m-2 p-2 '>
         <h1 className='font-bold'>Comments : </h1>
        { <CommentsList commentData={data} />}
        
    </div>
  )
}

export default Comments