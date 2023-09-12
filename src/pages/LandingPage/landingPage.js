// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Landingpage() {
//   return (
//     <div className='App'>
//       <div className='landingPge_logo'>
//         <img src='/assets/images/logo.png' alt='logo' />
//       </div>

//       <div className='landingPge_heading'>Let's Get Started</div>

//       <div className='landingPge_hero'>
//         <div className='landingPge_img'>
//           <img
//             src='/assets/images/landing.png'
//             alt='landingPage'
//             style={{ margin: '1rem 0' }}
//           />
//         </div>
//         <div className='landingPge_mainText'>
//           <div>
//             <h5>Choose</h5>
//             <p>
//               Browse over 40 professional resume templates ─ or create your own
//               with a blank template.
//             </p>
//           </div>
//           <div>
//             <h5>Create Your Resume</h5>
//             <p>
//               No more writer's block! Get inspired with 55,000+ examples,
//               profile summaries, bullet points, hard/soft skills, and expert
//               tips.
//             </p>
//           </div>
//           <div>
//             <h5>Download ─ Print</h5>
//             <p>Download your resume as a .txt or PDF file or print it.</p>
//           </div>
//           <div>
//             <h5>The Final Touch!</h5>
//             <p>
//               Want the best resume ever? Our Premium Resume Editing team can
//               proofread, edit, and improve your resume.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className='landingPge_divider'>
//         <div></div>
//       </div>

//       <div className='landingPge_btn'>
//         <Link to='/builderChooseBlankOrExample'>
//           <button>Get Started on Resume Builder</button>
//         </Link>
//       </div>
//       <div className='landingPge_terms'>
//         <p>
//           By clicking 'Get Started', you agree to our{' '}
//           <a
//             target='_blank'
//             rel='noreferrer'
//             href='https://cvjury.com/terms-and-conditions/'
//           >
//             Terms and Conditions{' '}
//           </a>{' '}
//           and{' '}
//           <a
//             target='_blank'
//             rel='noreferrer'
//             href='https://cvjury.com/privacy-policy/'
//           >
//             Privacy Policy
//           </a>
//           .{' '}
//         </p>
//       </div>
//     </div>
//   );
// }




import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import profile from '../../Assets/profile.png';
import group from '../../Assets/Group 8.png';
import template from '../../Assets/template.png';
import file_document from '../../Assets/file-document.png';
import prints from '../../Assets/print.png';
import searchs from '../../Assets/search-found.png';
import arrows from '../../Assets/arrow.png';


function LandingPage() {

    const containerStyle = {
        width: '90%',
        margin: '0 auto', // Center the container horizontally
        display: 'flex',
        flexWrap: 'wrap',
      };
      const customBoxStyles = {
        alignItems: 'center', // Additional custom style
        justifyContent:"center",
        display:"flex"
      };
      const boxStyle = {
        flex: '1',
        minWidth: '30%', // Each box takes up 30% of the container's width
        padding: '20px', // Add spacing and content to the boxes
        boxSizing: 'border-box', // Include padding in the box's width
        margin: '10px', // Add margin between boxes
      };

  return (
   <>
   {/* Header Section  */}
   {/* <div style={{width:'100%', height:'120px',  display:'flex',alignItems:'center', backgroundColor:'red', flexWrap:'wrap'}}>
    <div style={{width:'20%', height:"100%", alignItems:'center', justifyContent:'center', display:'flex'}}>
        <img style={{width:119, cursor:'pointer'}} src={logo}/>
    </div>
    <div style={{width:'60%', height:"100%", alignItems:'center', justifyContent:'center', textTransform:'uppercase', display:'flex',fontSize:35,fontWeight:'medium', fontFamily:'sans-serif'}}>
        <h3>Let's get started</h3>
    </div>
    <div style={{width:'20%', height:"100%",  display:'none'}}></div>

   </div> */}


<div style={containerStyle}>
      <div style={boxStyle}>
      <div style={{width:'20%', height:"100%", alignItems:'center', justifyContent:'center'}}>
        <img style={{width:119, cursor:'pointer'}} src={logo}/>
    </div>
      </div>
      <div style={{ ...boxStyle, ...customBoxStyles }}>
      <h3>Let's get started</h3>
      </div>
      <div style={boxStyle}>Box 3</div>
    </div>
   
   {/* body section */}

   <div style={{width:"100%",display:'flex', justifyContent:'center',height:'auto',alignItems:'center'}}>
    <div style={{width:'75%',backgroundColor:'white', borderRadius:17, boxShadow: '2px 14px 10px rgba(0, 0, 0.2, 0.2)',alignItems:'center'}}>
        
        {/* top div */}

        <div style={{width:'100%',padding:'30px', gap:'15px' ,display:"flex", justifyContent:'center',flexWrap:'wrap'}}>
            
            {/* left div */}

            <div style={{width:'160px',borderRadius:'8px', alignItems:'center', display:'flex', justifyContent:'center'}}>
            <img style={{width:103, height:62,}} src={group}/>
            </div>

            {/* center div */}

            <div style={{width:'460px',padding:'0px', backgroundColor:'#F06335', gap:'8px', borderRadius:'8px', display:'flex',justifyContent:'center'}}>
                <div style={{width:'60%',backgroundColor:'transparent',color:'white', padding:'7px'}}>
                    <h3 style={{fontWeight:'bold', fontSize:18, backgroundColor:'transparent',marginBottom:'3px', fontFamily:'sans-serif'}}>Profile Info:</h3>
                    
                    <p style={{fontSize:11, backgroundColor:'transparent', fontFamily:'sans-serif',margin:0}}>Berkeley, CA</p>
                    
                    <p style={{fontSize:11, backgroundColor:'transparent', fontFamily:'sans-serif'}}>ella-brown@gmail.com</p>
                </div>
                <div style={{padding:'20px', fontSize:12,  backgroundColor:'#F06335', color:'white', width:'40%', borderTopRightRadius:10, borderBottomRightRadius:10}}>
                    <p style={{backgroundColor:'transparent', fontFamily:'sans-serif',margin:0}}>123-456-7890</p>
                    <p style={{backgroundColor:'transparent', fontSize:11, fontFamily:'sans-serif'}}>linkedin.com/in/ella-brown/product-designer/</p>
                </div>
            </div>

            {/* right div */}

            <div style={{width:'250px',backgroundColor:'#A4D1FB', padding:'14px', borderRadius:'8px', justifyContent:'center', color:'black'}}>
                <h3 style={{fontWeight:'bold', fontSize:18, backgroundColor:'#A4D1FB', fontFamily:'sans-serif'}}>Foreign Languages:</h3>
                <div style={{display:'flex', backgroundColor:'transparent', gap:'9px'}}>
                <div style={{backgroundColor:'transparent'}}>
                <p style={{fontSize:'12', backgroundColor:'transparent', fontFamily:'sans-serif'}}>French</p>
                <p style={{fontSize:'12', backgroundColor:'transparent', fontFamily:'sans-serif'}}>Madarin</p>
                </div>
                <div style={{backgroundColor:'transparent', marginTop:'8px'}}>
                    <div style={{width:139, height:5, backgroundColor:'#E0E0E0', borderRadius:'10px', marginBottom:'6px'}}>
                        <div style={{width:'50%', height:'100%', backgroundColor:'#158BF6', borderRadius:"10px"}}></div>
                    </div>
                    <div style={{width:139, height:5, backgroundColor:'#E0E0E0', borderRadius:'10px', marginTop:'12px'}}>
                    <div style={{width:'90%', height:'100%', backgroundColor:'#29AB82', borderRadius:"10px"}}></div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* body bottom div */}
        {/* body bottom main div */}

        <div style={{padding:'40px', gap:'15px', display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

            {/* left div */}

            <div style={{width:168,}} className='profile_left'>
                <div>
                    <p style={{ fontSize:18, fontWeight:'bold', margin:'0px 0 7px 0', fontFamily:'sans-serif'}}>Place your profile</p>
                </div>
                <div style={{width:168,paddingTop:12}}>
                    <div style={{height:52, backgroundColor:'#6A6A6A', borderRadius:'6px', alignItems:'center', justifyContent:'center', display:'flex'}}>
                    <img style={{width:84, height:84, borderRadius:99, marginTop:52}} src={profile}/></div>
                    <div style={{height:179, backgroundColor:'#FFE7DF', borderRadius:'10px', alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                    <div style={{backgroundColor:'transparent',marginTop:'45px',textAlign:'center'}}>
                        <p style={{backgroundColor:'transparent', fontSize:18, fontWeight:'bold', fontFamily:'sans-serif'}}>Ella Brown</p>
                        <p style={{backgroundColor:'transparent', fontSize:14, fontFamily:'sans-serif'}}>Product Designer at Shmyandex</p>
                    </div>
                  
                    </div>
                </div>
            </div>

            {/* center div */}
            
            <div style={{width:445,borderRadius:'10px', backgroundColor:'#FFE7DF',padding:'12px'}}>
                <div style={{display:'flex', backgroundColor:'transparent',alignSelf:'center',justifyContent:'space-between'}}>
                    <div style={{backgroundColor:'transparent'}}>
                        <p style={{backgroundColor:'transparent', fontSize:18, fontWeight:'bold', fontFamily:'sans-serif',margin:0}}>Education:</p>
                        <p style={{backgroundColor:'transparent', fontSize:12, fontWeight:'bold', fontFamily:'sans-serif',margin:0}}>BSc in Marketing</p>
                        <p style={{backgroundColor:'transparent', fontSize:11, fontFamily:'sans-serif',margin:0}}>University of Virginia, Charlottesville, VA</p>
                    </div>
                    <div style={{backgroundColor:'transparent', fontSize:12, alignItems:'center',display:'flex',justifyContent:"flex-end",}}>
                        <p style={{backgroundColor:'transparent', fontSize:12, color:'#00000', fontFamily:'sans-serif'}}>Jun 20XX - Sep 20XX</p>
                    </div>
                </div>
                <div style={{backgroundColor:'transparent',alignSelf:'center'}}>
                    <p style={{backgroundColor:'transparent', fontSize:18, fontWeight:'bold', fontFamily:'sans-serif',margin:0,paddingTop:8}}>Achievements</p>
                    <ul style={{width:434, backgroundColor:'transparent', fontSize:11, width:'80%'}}>
                        <li style={{backgroundColor:'transparent', fontSize:11, fontFamily:'sans-serif'}}>Boosted product sales by 20% by implementing user-centered design principles, leading to improved customer engagement and satisfaction.</li>
                        <li style={{backgroundColor:'transparent', fontSize:11, fontFamily:'sans-serif'}}>Reduced user complaints by 30% by conducting thorough usability testing and incorporating feedback into the design process, resulting in an improved overall user experience.</li>
                    </ul>
                </div>
                <div style={{backgroundColor:'transparent', alignItems:'center', justifyContent:'center', display:'flex'}}>
                    <input readonly='readonly' placeholder='Type here...' style={{width:'100%', color:'gray', padding:'15px', height:60, border:0, borderRadius:8, cursor:'po'}}></input>
                </div>
            </div>

            {/* right div */}

            <div>
                <div>
                    <p style={{fontFamily:'sans-serif', fontSize:18, fontWeight:'bold'}}>Rate your Skills</p>
                </div>
                <div style={{width:'250px',display:'flex', alignItems:'center', justifyContent:'center', gap:12}}>
                    <div style={{width:'12.7%', height:234, alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>5.0 <span> <img style={{width:12, height:12}} src={require("../../Assets/star.png")}/> </span></p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>4.0 <span> <img style={{width:12, height:12}} src={require("../../Assets/star.png")}/> </span></p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>4.0 <span> <img style={{width:12, height:12}} src={require("../../Assets/star.png")}/> </span></p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>2.0 <span> <img style={{width:12, height:12}} src={require("../../Assets/star.png")}/> </span></p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>1.0 <span> <img style={{width:12, height:12}} src={require("../../Assets/star.png")}/> </span></p>
                        </div>
                    </div>
                    <div style={{width:'64%', height:234, alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                        <div style={{width:'100%', borderRadius:5, height:20, backgroundColor:'#E0E0E0'}}>
                            <div style={{width:'74.2%', height:'100%', backgroundColor:'#29AB82'}}></div>
                        </div>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                        <div style={{width:'100%', borderRadius:5, height:20, backgroundColor:'#E0E0E0'}}>
                            <div style={{width:'10.3%', height:'100%', backgroundColor:'#158BF6'}}></div>
                        </div>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                        <div style={{width:'100%', borderRadius:5, height:20, backgroundColor:'#E0E0E0'}}>
                            <div style={{width:'4.6%', height:'100%', backgroundColor:'#158BF6'}}></div>
                        </div>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                        <div style={{width:'100%', borderRadius:5, height:20, backgroundColor:'#E0E0E0'}}>
                            <div style={{width:'0.7%', height:'100%', backgroundColor:'#158BF6'}}></div>
                        </div>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                        <div style={{width:'100%', borderRadius:5, height:20, backgroundColor:'#E0E0E0'}}>
                            <div style={{width:'0.0%', height:'100%', backgroundColor:'#158BF6'}}></div>
                        </div>
                        </div>
                    </div>
                    <div style={{width:'12.7%', height:234, alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>74.2% </p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>10.3% </p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>4.6% </p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>0.7 </p>
                        </div>
                        <div style={{width:'100%', height:46, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <p style={{fontFamily:'sans-serif', fontSize:11, fontWeight:'bold', color:'gray', backgroundColor:'transparent'}}>0.0% </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>

   {/* footer section */}
   {/* footer main div */}

   <div style={{width:'80%',marginLeft:'auto',marginRight:'auto',paddingTop:20}}>
    <div style={{gap:'15px', display:'flex', alignItems:'center', justifyContent:'center', boxShadow: '2px 14px 10px rgba(0, 0, 0.2, 0.2)',flexWrap:'wrap',borderRadius:10,padding:'25px 0px'}}>
        <div style={{width:237, height:67, display:'flex', alignItems:'center', gap:25}}>
            <div style={{width:67, height:67, borderRadius:50, backgroundColor:'#FFE7DF', alignItems:'center', justifyContent:'center', display:'flex'}}>
                <img style={{width:18, height:18, backgroundColor:'transparent'}} src={template}/>
            </div>
            <div>
                <p style={{ fontSize:14, fontWeight:'bold', fontFamily:'sans-serif'}}>Select A Template</p>
            </div>
        </div>
        <div style={{width:237, height:67, display:'flex', alignItems:'center', gap:25}}>
            <div style={{width:67, height:67, borderRadius:50, backgroundColor:'#CBEEE3', alignItems:'center', justifyContent:'center', display:'flex'}}>
                <img style={{width:18, height:18, backgroundColor:'transparent'}} src={file_document}/>
            </div>
            <div>
                <p style={{ fontSize:14, fontWeight:'bold', fontFamily:'sans-serif'}}>Create Your Resume</p>
            </div>
        </div>
        <div style={{width:237, height:67, display:'flex', alignItems:'center', gap:25}}>
            <div style={{width:67, height:67, borderRadius:50, backgroundColor:'#E1ECF6', alignItems:'center', justifyContent:'center', display:'flex'}}>
                <img style={{width:18, height:18, backgroundColor:"transparent"}} src={prints}/>
            </div>
            <div>
                <p style={{ fontSize:14, fontWeight:'bold', fontFamily:'sans-serif'}}>Download-Share-Print</p>
            </div>
        </div>
        <div style={{width:237, height:67, display:'flex', alignItems:'center', gap:25}}>
            <div style={{width:67, height:67, borderRadius:50, backgroundColor:'#E1ECF6', alignItems:'center', justifyContent:'center', display:'flex'}}>
                <img style={{width:18, height:18, backgroundColor:'transparent'}} src={searchs}/>
            </div>
            <div>
                <p style={{ fontSize:14, fontWeight:'bold', fontFamily:'sans-serif'}}>The Final Touch!</p>
            </div>
        </div>
    </div>
   </div>
   

   {/* footer text section */}

   <div style={{width:'100%', height:230, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
    <div style={{justifyContent:'center', display:'flex',alignItems:'center',gap:12}}>
        <Link  to='/builderChooseBlankOrExample' style={{color:'#F06335', fontSize:30, border:'0px', fontWeight:'bold', cursor:'pointer', fontFamily:'sans-serif'}}>Continue
       
        </Link>
        <Link to='/builderChooseBlankOrExample'>
         <span>
            <img style={{width:22, height:22}} src={arrows}/>
        </span>
        </Link>
    </div>
    <div style={{paddingTop:12, width:'80%',  alignItems:'center', justifyContent:"center", display:'flex'}}>
        <p style={{fontSize:12, fontFamily:'sans-serif'}}> By clicking <Link to='/builderChooseBlankOrExample' style={{color:'#F06335', fontFamily:'sans-serif'}}> ‘Continue’,</Link> you agree to our <a style={{color:'#F06335', fontFamily:'sans-serif'}} href='https://cvjury.com/terms-and-conditions/'>Terms and Conditions</a> and <span > <a style={{color:'#F06335'}} href='https://cvjury.com/privacy-policy/' > Privacy Policy</a></span></p>
    </div>
   </div>
   </>
  )
}

export default LandingPage

