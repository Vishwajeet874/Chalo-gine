import React from 'react'



export default function About(props) {
    // let mystyle={
    //     color:'white',
    //     backgroundColor:'black'
    // }
    // const[mystyle,setmystyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    let mystyle={
        color: props.mode==='dark'?'black':'white',
        backgroundColor: props.mode==='dark'?'white':'blueviolet',
        border:'1px solid',
        borerColor:'dark'?'black':'white'
    }
    
    let h1={
        color:'red',
        margin:'10px'
    }
    return (
        <div className="conatiner" style={mystyle}>
            <h1 style={h1}>About Us</h1>
            <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item mx-2" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About the Maker</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    The maker's name is <strong>Vishwajeet Singh</strong>
                    <p>He is the student of heritage institute of technology.</p>

                </div>
                </div>
            </div>
            <div className="accordion-item mx-2" >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    About the App
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <p>This app is all about reading character and wordcount.</p>
                    <p>You can also convert UpperCase and lowerCase of your written paragraph. Furthermore, you can also check the avreage reading time of your sentence/paragraph.
                    </p>
                </div>
                </div>
            </div>
            <div className="accordion-item mx-2" >
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    About Sponsors
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>
                        <p>Hp</p>
                        <p>DEll</p>
                        <p>IBM</p>
                    </strong>
                </div>
                </div>
            </div>
            </div>
            {/* <button className="btn btn-outline-dark mx-2 my-4" onClick={togglestyle} style={mystyle}>{btntext}</button> */}
        </div>
    )
}
