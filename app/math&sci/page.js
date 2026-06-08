"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MathSciPage() {
    return (
        <div className={styles.whole}>
            <p>&nbsp;</p>

            
            <div className={styles.container}>
                <h1>My Mathematics &amp; Science Portfolio</h1>
            </div>

            <div className={styles.rows}>
                <div className={styles.left}>
                    <div className={styles.skills}>
                        <h3>My STEM Subjects:</h3>
                        <ul>
                            <li>Mathematics
                                <ul>
                                    <li>Elementary Mathematics</li>
                                    <li>Additional Mathematics</li>
                                    
                                </ul>
                            </li>
                            <li>Science
                                <ul>
                                    <li>Pure Physics</li>
                                    <li>Pure Chemistry</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.colortable}>
                        <table className={styles.bordertable}>
                            <tr>
                                <th>Subject</th>
                                <th>Workshops &amp; Programmes</th>
                                <th>What I Learnt</th>
                            </tr>
                            <tr>
                                <th>Mathematics</th>
                                <th>Mathematics Problem-Solving Workshop by NYJC Mathematics Club 2026</th>
                                <th>I learnt how to use a graphing calculator</th>
                            </tr>
                            <tr>
                                <th rowSpan={2}>Science</th>
                                <th>NUS Learning Journey 2024</th>
                                <th>I learnt about the fundamental concepts of polarisation.</th>
                            </tr>
                            <tr>
                                <th>NUS Learning Journey 2025</th>
                                <th>I learnt the basics of Physics concepts such as resonance, electron diffraction, and acceleration.</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            {/* ── Competitions / Awards table ── */}
            <div className={styles.newtable}>
                <table className={styles.bordertable}>
                    <tr>
                        <th>Subject</th>
                        <th>Competition / Award</th>
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
                        <th>Secondary 2 EXP Mathematics Award</th>
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
                        <th>Secondary 3 EXP Additional Mathematics Award</th>
                    </tr>
                    <tr>
                        <th rowSpan={9}>Science</th>
                        <th>Breakthrough Junior Challenge 2024</th>
                        <th>Participation</th>
                    </tr>
                    <tr>
                        <th>Greendale Subject Award 2024</th>
                        <th>Secondary 2 EXP Science</th>
                    </tr>
                    <tr>
                        <th>Singapore Junior Chemistry Olympiad Secondary 3 2025 (SJChO 2025)</th>
                        <th>Participation</th>
                    </tr>
                    <tr>
                        <th>National STEM Championship 2025</th>
                        <th>Participation</th>
                    </tr>
                    <tr>
                        <th>Science Busker 2025</th>
                        <th>Grand Finalists</th>
                    </tr>
                    <tr>
                        <th>Singapore Physics League Secondary 3 2025 (SPhL 2025)</th>
                        <th>Participation</th>
                    </tr>
                    <tr>
                        <th>Greendale Subject Award 2025</th>
                        <th>Secondary 3 EXP Physics Award</th>
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

            <div>
                <div className={styles.hi}>
                    <h2>My Mathematics &amp; Science Journey!</h2>
                </div>
                <p>&nbsp;</p>
                <div className={styles.twentythree}>
                    <div>
                        <h1>Mathematics</h1>

                        <h3>2024</h3>
                        <p>&nbsp;</p>

                        <h4>January</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I joined the Young Mathematicians Club in my school</p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>March</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I promoted Pi Day at my school</p>
                            </li>
                            <li>
                                <p>I achieved Silver in Singapore and Asian Schools Math Olympiad Grade 8 2024 (SASMO 2024)</p>
                                <p>&nbsp;</p>
                                    
                                    
                                    <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/sasmocert24.jpg" width={500} height={160} style={{objectFit:'contain'}} alt="SASMO 2024 Certificate"  />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/sasmomedal.jpeg" width={176} height={160} style={{objectFit:'contain'}} alt="SASMO 2024 Medal"  />
                                    </div>
                                    </div>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>May</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I coached Primary 4 students in Greendale Primary School on multiplication and division</p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>August</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I achieved Credit in Australian Mathematics Competition Grade 8 2024 (AMC 2024)</p>
                                <p>&nbsp;</p>
                                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/amccert.jpeg" alt="AMC 2024 Certificate" width={350} height={320} style={{objectFit:'contain'}}   />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/amccert2.jpeg" alt="AMC 2024 Certificate 2" width={340} height={320} style={{objectFit:'contain'}}   />
                                    </div>
                                    </div>

                                    
                                
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>October</h4>
                        <p>&nbsp;</p>
                        <ul>
                            
                            <li>
                                
                                <p>I received Greendale Subject Award 2024 for Secondary 2 EXP Mathematics</p>
                                <p>&nbsp;</p>
                                <img src="/images/sec2math.jpg" alt="Sec 2 Math Award" width={340} height={320} />
                                
                            </li>
                            
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h3>2025</h3>
                        <p>&nbsp;</p>

                        <h4>March</h4>
                        <p>&nbsp;</p>
                        <ul>
                            
                            <li>
                                <p>I participated in Singapore and Asian Schools Math Olympiad Grade 9 2025 (SASMO 2025)</p>
                                <p>&nbsp;</p>
                                <img src="/images/sasmocert25.jpg" alt="SASMO 2025 Certificate" width={500} height={320} />
                            </li>
                            
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>October</h4>
                        <p>&nbsp;</p>
                        <ul>
                            
                            <li>
                                <p>I achieved Outstanding Award for Singapore Math Challenge Grade 9 2025 (SMC 2025)</p>
                                <p>&nbsp;</p>
                                <img src="/images/smccert.jpeg" alt="SMC 2025 Certificate" width={500}/>
                            </li>
                            <p>&nbsp;</p>
                            <li>
                                <p>I received Greendale Subject Award 2025 for Secondary 3 EXP Additional Mathematics</p>
                                <p>&nbsp;</p>
                                <img src="/images/sec3math.jpg" alt="Sec 3 Math Award" width={340} height={320}/>
                            </li>
                            
                        </ul>

                        <p>&nbsp;</p>

                        <h3>2026</h3>
                        <p>&nbsp;</p>
                        <h4>March</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I participated in Mathematics Problem-Solving Workshop by NYJC Mathematics Club 2026. I learnt how to use a Graphing calculator and basic h2 Mathematics concepts.  </p>
                                <p>&nbsp;</p>
                                <img src="/images/nyjccert.jpeg" alt="NYJC Cert" width={340} height={320}/>
                            </li>
                        </ul>
                    </div>
                </div>

                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <div className={styles.twentythree}>
                    <div>
                        <h1>Science</h1>

                        <h3>2024</h3>
                        <p>&nbsp;</p>

                        <h4>February</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I was selected as one of the 5 Science Ambassadors per batch.</p>
                                <p>&nbsp;</p>
                                <img src="/images/science3.jpeg" alt="Science Ambassador" width={400} height={320} />
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>May</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>We developed different experiments and showcased them at booths. We also conducted a chlorophyll painting workshop using natural plant pigments and dyes such as turmeric. In addition, we organised a fingerprinting workshop where iron powder was used to attach to the moisture and oil found in fingerprints.</p>
                                <p>&nbsp;</p>
                                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/science7.jpeg" alt="Science exhibit 1" width={340} height={320}/>
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/science8.jpeg" alt="Science exhibit 2" width={340} height={320}/>
                                    </div>
                                </div>
                            </li>
                            <p>&nbsp;</p>
                            <li>
                                <p>I participated in the Breakthrough Junior Challenge 2024</p>
                                <p>&nbsp;</p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/eiG_SVBnhJg" title="What is the Fourth Dimension? - 2024 Breakthrough Junior Challenge" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>August</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I went on a learning journey to NUS and learnt about the fundamental concepts of polarisation.</p>
                                <p>&nbsp;</p>
                                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/science5.jpeg" alt="NUS learning journey 1" width={340} height={320} />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/science6.jpeg" alt="NUS learning journey 2" width={340} height={320} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>October</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I received Greendale Subject Award 2024 for Secondary 2 EXP Science</p>
                                <p>&nbsp;</p>
                                <img src="/images/sec2science.jpg" alt="Sec 2 Science Award" width={340} height={320}/>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h3>2025</h3>
                        <p>&nbsp;</p>

                        <h4>April</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I participated in the National STEM Championship 2025</p>
                                <p>&nbsp;</p>
                                <img src="/images/science10.jpeg" alt="National STEM Championship" width={340} height={320}/>
                                <p>&nbsp;</p>
                                <img src="/images/nstemccert.jpeg" alt="National STEM Certificate" width={340} height={320}/>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>May</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I promoted Science Day. We showcased the science behind paper helicopters</p>
                                <p>&nbsp;</p>
                                <img src="/images/science2.jpeg" alt="Science Day" width={500} height={320}/>
                                <p>&nbsp;</p>
                                <img src="/images/torque.png" alt="Torque diagram" width={500} height={320} />
                                <p>&nbsp;</p>
                            </li>
                            <li>
                                <p>I participated in the Singapore Junior Chemistry Olympiad 2025</p>
                                <p>&nbsp;</p>
                                <img src="/images/CamScanner 06-01-2026 02.02_08.jpg" alt="SJChO 2025 Certificate" width={500} height={320}/>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>July</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I participated in Singapore Physics League 2025</p>
                                <p>&nbsp;</p>
                                <img src="/images/CamScanner 06-01-2026 02.02_09.jpg" alt="SPhL 2025 Certificate" width={500} height={320}/>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>August</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I went on a learning journey to NUS and learnt the basics of Physics concepts such as resonance, electron diffraction, and acceleration.</p>
                                <p>&nbsp;</p>
                                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/science4.jpeg" alt="NUS 2025 journey 1" width={500} height={320}/>
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <img src="/images/science9.jpeg" alt="NUS 2025 journey 2" width={500} height={320}/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>September</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I participated in Science Buskers 2025</p>
                                <p>&nbsp;</p>
                                <img src="/images/sciencebuskers.jpg" alt="Science Buskers 2025" width={500} height={320}/>
                                <p>&nbsp;</p>
                                <p>My project was about phosphorescence in zinc sulfide</p>
                                <p>&nbsp;</p>
                                <img src="/images/science1.jpeg" alt="Phosphorescence project" width={500} height={320}/>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>

                        <h4>October</h4>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I received Greendale Subject Award 2025 for Secondary 3 EXP Physics Award</p>
                                <p>&nbsp;</p>
                                <img src="/images/sec3science.jpg" alt="Sec 3 Science Award" width={340} height={320} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Back to Homepage ── */}
            <Link href="/homepage" style={{ textDecoration: 'none' }}>
                <div className={styles.twentythree}>
                    <p>Go Back To Homepage</p>
                </div>
            </Link>

            <p>&nbsp;</p>
        </div>
    );
}