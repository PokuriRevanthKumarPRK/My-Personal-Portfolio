"use client";
import { useState, useEffect } from "react";

import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";

export default function InformationPage(){
    const [firstclick, setName] = useState("")
    const handlefirstclick = () =>{
        setName("2024");
    }
    const [secondclick, setsecondname] = useState("")
    const handlesecondclick = () =>{
        setsecondname("^&^&6767 Robotics Club. I am extremely curious and willing to learn more about new things. I take interest in my learning on AI seriously as it is my passion. My first ever Involvement in computing is the IDE MAKEr 2024. My team and I researched for an problem that fits the challenge topic. Then we had to use Arduino and Anniken Andee. Next, I competed in the SIT community challenge. I learnt how to design thinking ");
    }
    return(
        <div className={styles.whole}>
            <p>&nbsp;</p>
            <div className={styles.container}>
                <h1>My Mathematics & Science Portfolio</h1>
                </div>
                <div >
                    

                <div className={styles.left}>
                    <div className={styles.colortable}>
                    <table className={styles.bordertable}>
                        <tr>
                            <th>Subject</th>
                            <th>Workshops & Programmes</th>
                            <th>What I learnt</th>
                        </tr>
                        <tr>
                            <th rowSpan={1}>Mathematics</th>
                            <th>Mathematics Problem-Solving Workshop By NYJC Mathematics Club 2026</th>
                            <th>I leanrt how to Use graphing caluclaor</th>
                        </tr>
                        
                        <tr>
                            <th rowSpan={6}>Science</th>
                            <th>NUS Leanering Journey 2024</th>
                            <th>I learnt about the fundamental concepts of polarisation.</th>
                        </tr>
                        <tr>
                            <th>NUS Leanering Journey 2025</th>
                            <th>I learnt the basics of some Physics concepts such as resonance, electron diffraction, and acceleration.</th>
                        </tr>
                       
                    </table>
                </div>


                    <div className={styles.right}>
    <div className={styles.colortable}>
    <table className={styles.bordertable}>
        <tr>
            <th>Subject</th>
            <th>Competition</th>
            <th>Level of Attainment</th>
        </tr>
        <tr>
            <th rowSpan={6}>Mathematics</th>
            <th>Singapore and Asian Schools Math Olympiad Grade 8 2024 (SASMO 2024)</th>
            <th>Silver Award</th>
        </tr>
        <tr>
            <th>Australian Mathematics Competition Grade 8 2024 (AMC 2024)</th>
            <th>Credit</th>
        </tr>
        <tr>
            <th>Greendale Subject Award 2024</th>
            <th>Secoardy 2 EXP Mathematics Award</th>
        </tr>
        <tr>
            <th>Singapore and Asian Schools Math Olympiad Grade 9 2025 (SASMO 2025)</th>
            <th>Participation</th>
        </tr>
        <tr>
            <th>Singapore Math Challenge Grade 9 2025 (SMC 2025)</th>
            <th>Outstanding Award</th>
        </tr>
        <tr>
            <th>Greendale Subject Award 2025</th>
            <th>Secoardy 3 EXP Additional Mathematics Award</th>
        </tr>
        <tr>
            <th rowSpan={9}>Science</th>
            <th>Breakthrough Junior Challenge 2024</th>
            <th>Participation</th>
        </tr>
        <tr>
            <th>Greendale Subject Award 2024</th>
            <th>Secoardy 2 EXP Science</th>
        </tr>
        <tr>
            <th>Singapore Junior Chemistry Olympiad Secondary 3 2025 (SJChO 2025)</th>
            <th>Partipation</th>
        </tr>
        <tr>
            <th>National STEM Championship 2025</th>
            <th>Particpation</th>
        </tr>
        <tr>
            <th>Science Busker 2025</th>
            <th>Grand Finalists</th>
        </tr>
        <tr>
            <th>Singapore Physics League Secondary 3 2025 (SPhL 2025)</th>
            <th>Partcipation</th>
        </tr>
        <tr>
            <th>Greendale Subject Award 2025</th>
            <th>Secoardy 3 EXP Physics Award</th>
        </tr>
        <tr>
            <th>Singapore Junior Chemistry Olympiad Secondary 4 2026 (SJChO 2026)</th>
            <th>Upcoming</th>
        </tr>
        <tr>
            <th>Singapore Junior Physics Olympiad Secondary 4 2026 (SJPO 2026)</th>
            <th>Upcoming</th>
        </tr>
    </table>
</div>
</div>


            </div>
            <div>
    <div className={styles.twentythree}>
        <h1>Mathematics</h1>
        <div>
            <ul>
                <div>
                    <h3>2024</h3>
                    <ul>
                        <div>
                            <h4>January</h4>
                            <ul>
                                <li>
                                    <p>I joined the Young Mathematians Club In my school</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>March</h4>
                            <ul>
                                <li>
                                    <p>I promoted PI day in my school</p>

                                </li>
                                <li>
                                    <p>I acheived Silver in Singapore and Asian Schools Math Olympiad Grade 8 2024 (SASMO 2024)</p>
                                    <div className={styles.imagerow}>
                                    <img src="/images/sasmocert24.jpg" width={220} height={160} style={{objectFit:'contain'}}></img>
                                    
                                    <img src="/images/sasmomedal.jpeg" width={220} height={160} style={{objectFit:'contain'}}></img>
                                    <div style={{display:"flex", flexDirection:"row"} }>
                                <div style={{display:"flex", flexDirection:"column", width:'500', height:'1000'} }>
                                    <img src="/images/sasmocert24.jpg" width={220} height={160} style={{objectFit:'contain'}}></img>
                                </div>
                                <div style={{display:"flex", flexDirection:"column" , width:'500', height:'500'} }> 
                                    <img src="/images/sasmomedal.jpeg" width={220} height={160} style={{objectFit:'contain'}}></img>
                                </div>
                                </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>May</h4>
                            <ul>
                                <li>
                                    I coached Primary 4 students on multiplication and division
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>August</h4>
                            <ul>
                                <li>
                                    <p>I achieved Credit in Australian Mathematics Competition Grade 8 2024 (AMC 2024)</p>
                                    <img src="/images/amccert.jpeg"></img>
                                    <img src="/images/amccert2.jpeg"></img>
                                    <div style={{display:"flex", flexDirection:"row"} }>
                                <div style={{display:"flex", flexDirection:"column", width:'5000', height:'10000'} }>
                                    <img src="/images/sasmocert24.jpg"></img>
                                </div>
                                <div style={{display:"flex", flexDirection:"column" , width:'500', height:'250'} }> 
                                    <img src="/images/sasmomedal.jpeg"></img>
                                </div>
                                </div>
                                    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>October</h4>
                            <ul>
                                <li>
                                    <p>I received Greendale Subject Award 2025 for Secoardy 2 EXP Mathematics</p>
                                    <img src="/images/sec2math.jpg"></img>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div>
                    <h3>2025</h3>
                    <ul>
                        <div>
                            <h4>March</h4>
                            <ul>
                                <li>
                                    <p>I participated Singapore and Asian Schools Math Olympiad Grade 9 2025 (SASMO 2025)</p>
                                    <img src="/images/sasmocert25.jpg"></img>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>October</h4>
                            <ul>
                                <li>
                                    I achieved Outstanding Award for Singapore Math Challenge Grade 9 2025 (SMC 2025)
                                    <img src="/images/smccert.jpeg"></img>
                                </li>
                                <li>
                                    <p>I received Greendale Subject Award 2025 for Secoardy 3 EXP Additional Mathematics</p>
                                    <img src="/images/sec3math.jpg"></img>
                                </li>
                                
                            </ul>
                        </div>
                    </ul>
                </div>
            </ul>
        </div>
    </div>
    
    <div className={styles.twentythree}>
        <h1>Science</h1>
        <ul>
            
        <div>
            <h3>2024</h3>
            <ul>
            
                <div>
                    <h4>February</h4>
                    <ul>
                    <li>
                    <p>I was selected as one of the 5 Science Ambassador per batch. </p>
                    <img src="/images/science3.jpeg" alt="photoinvietnam" width={640} height={320}></img>
                    </li>
                    </ul>
                </div>
            
            
                <div>
                <h4>May</h4>
                <ul>
                    <li>
                        <p>We developed different experiments and showcased them at booths. We also conducted a chlorophyll painting workshop using natural plant pigments and dyes such as turmeric. In addition, we organised a fingerprinting workshop where iron powder was used to attach to the moisture and oil found in fingerprints.</p>
                        <div style={{display:"flex", flexDirection:"row"} }>
                                <div style={{display:"flex", flexDirection:"column", width:'500', height:'1000'} }>
                                    <img src="/images/science7.jpeg"></img>
                                </div>
                                <div style={{display:"flex", flexDirection:"column" , width:'500', height:'500'} }> 
                                    <img src="/images/science8.jpeg"></img>
                                </div>
                                </div>
                    </li>
                    <li>
                        <p>I participated in the Breakthrough Junior Challenge 2024</p>
                        <iframe width="1029" height="579" src="https://www.youtube.com/embed/eiG_SVBnhJg" title="What is the Fourth Dimension? - 2024 Breakthrough Junior Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </li>
                </ul>
                </div>
            
            
                <div>
                    <h4>August</h4>
                    <ul>
                        <li>
                            <p>I went to a learning journey to NUS and learnt about the fundamental concepts of polarisation.</p>
                            <div style={{display:"flex", flexDirection:"row"} }>
                                <div style={{display:"flex", flexDirection:"column", width:'500', height:'1000'} }>
                                    <img src="/images/science5.jpeg"></img>
                                </div>
                                <div style={{display:"flex", flexDirection:"column" , width:'500', height:'500'} }> 
                                    <img src="/images/science6.jpeg"></img>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                
            
            
                <div>
                    <h4>October</h4>
                    <ul>
                        <li>
                    <p>I received Greendale Subject Award 2025 for Secoardy 2 EXP Science</p>
                            <img src="/images/sec2science.jpg"></img>
                        </li>
                    </ul>
                </div>
            

            
            </ul>
            
        </div>
        
        <li>
            <div>
                <h3>2025</h3>
                <ul>
                    <div>
                        <h4>April</h4>
                        <ul>
                            <li>
                                <p>I participated in the National STEM Championship 2025</p>
                                <img src="/images/science10.jpeg"></img>
                                <img src="/images/nstemccert.jpeg"></img>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>May</h4>
                        <ul>
                            <li>
                                <p>I promoted science day. We shocased the science behind paper helicopter</p>
                                <img src="/images/science2.jpeg"></img>
                                <img src="/images/torque.png"></img>
                            </li>
                            <li>
                                <p>I participated in the Singapore Junior Chemistry Olympiad 2025</p>
                                <img src="/images/CamScanner 06-01-2026 02.02_08.jpg"></img>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>July</h4>
                        <ul>
                            <li>
                                <p>I participated in Singapore Physics League 2025</p>
                                <img src="/images/CamScanner 06-01-2026 02.02_09.jpg"></img>
                                
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>August</h4>
                        <ul>
                            <li>
                                <p>I went to a learning journey to NUS and I learnt the basics of some Physics concepts such as resonance, electron diffraction, and acceleration.</p>
                                <div style={{display:"flex", flexDirection:"row"} }>
                                <div style={{display:"flex", flexDirection:"column", width:'500', height:'1000'} }>
                                    <img src="/images/science4.jpeg"></img>
                                </div>
                                <div style={{display:"flex", flexDirection:"column" , width:'500', height:'500'} }> 
                                    <img src="/images/science9.jpeg"></img>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>September</h4>
                        <ul>
                            <li>
                                <p>I participated in Science Buskers 2025</p>
                                <img src="/images/sciencebuskers.jpg"></img>
                                <p>My project was about Phosphorescence in zinc sulfide</p>
                                <img src="/images/science1.jpeg"></img>

                            </li>
                        </ul>
                    </div>
                    <div>
                        
                    <h4>October</h4>
                    <p>I received Greendale Subject Award 2025 for Secondary 3 EXP Physics Award</p>
                            <img src="/images/sec3science.jpg"></img>
                
                    </div>
                    
                </ul>
            </div>
        </li>
        </ul>
        
    </div>
</div>
            <Link href="/homepage"  style={{ width:"200px" ,height:"200px", textDecoration: 'none',  }}>
            <div className={styles.twentythree}>
                 <p>Go Back To Homepage</p>
            </div>
            </Link>
        </div>
        <p>&nbsp;</p>
        </div>
    
    
    
    )
}