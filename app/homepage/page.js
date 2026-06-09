"use client";
import { useState, useEffect } from "react";

import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";

export default function InformationPage(){
    
    return(
        <div>
            <div className={styles.whole}>
                <div className={styles.twentythree} >
                    <div>
                    <h1>Hi, I am Pokuri Revanth Kumar</h1>
                    <h4>About Me:</h4>
                    <p>I am passionate in both math, science and computing</p>
                    <p>&nbsp;</p>
                    <p>The two buttons below are linked to my portfolio.</p>
                    </div>
                    <div>
                <img src="/images/face.jpeg" alt="photoinvietnam" width={640} height={320}></img>
                </div>
                </div>
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent:'center', gap:'20px', padding:'0 2rem 2rem' }}>
                    <Link href="/computing" style={{ display:"flex", flex:1, maxWidth:'500px', textDecoration: 'none', color:'yellow'}}>
                        <div className={styles.twentythree} style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent:'center', width:'100%', margin:0}}>
                            <h3>Computing</h3>
                            <img src="/images/codeicon.png" alt="computing icon" width={64} height={64}></img>
                        </div>
                    </Link>
                    <Link href="/math&sci" style={{ display:"flex", flex:1, maxWidth:'500px', textDecoration: 'none', color:'yellow'}}>
                        <div className={styles.twentythree} style={{flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent:'center', width:'100%', margin:0}}>
                            <h3>Mathematics & Science</h3>
                            <img src="/images/mathscienceicon.png" alt="math science icon" width={64} height={64}></img>
                        </div>
                    </Link>
                </div>
                <div className={styles.hi}>
                    <h2>My Leadership Positions</h2>
                </div>
 
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Robotics Club — Vice-President</h3>
                            <span className={styles.timelineYear}>2025</span>
                            <p className={styles.timelineDesc}>Led the club's Open House planning and coordinated members. Managed logistics and represented the club in school activities.</p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Chess Club — President</h3>
                            <span className={styles.timelineYear}>2025  </span>
                            <p className={styles.timelineDesc}>Participated actively in STEM workshops and helped facilitate learning sessions for junior members.</p>
                        </div>
                    </div>
 
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Science Club — Member</h3>
                            <span className={styles.timelineYear}>2024 – 2025</span>
                            <p className={styles.timelineDesc}>Logistics & Leadership: Served as Overall IC for one year, managing logistics for various school workshops and events.
<p>&nbsp;</p>
Soft Skills: Developed leadership-driven skills in time management and confident communication.
<p>&nbsp;</p>
STEM Enrichment: Explored STEM projects outside the school curriculum to broaden my scientific horizon.</p>
                        </div>
                    </div>
 
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Math Club — Member</h3>
                            <span className={styles.timelineYear}>2024  </span>
                            <p className={styles.timelineDesc}>Participated actively in STEM workshops and helped facilitate learning sessions for junior members.</p>
                        </div>
                    </div>

                    
                </div>
 
                {/* ── My Hobbies Section ── */}
                <div className={styles.hi}>
                    <h2>My Hobbies</h2>
                </div>
 
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Artificial Intelligence & Machine Learning</h3>
                            <span className={styles.timelineYear}>Passion</span>
                            <p className={styles.timelineDesc}>I enjoy learning about AI models, deep learning architectures, and how AI is transforming the world. I regularly read research papers and experiment with small AI projects.</p>
                        </div>
                    </div>
 
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Coding & Building Projects</h3>
                            <span className={styles.timelineYear}>Hobby</span>
                            <p className={styles.timelineDesc}>I enjoy building web applications and experimenting with Arduino hardware projects. Creating something functional from scratch is deeply satisfying.</p>
                        </div>
                    </div>
 
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineCard}>
                            <h3 className={styles.timelineTitle}>Playing Chess</h3>
                            <span className={styles.timelineYear}>Hobby</span>
                            <p className={styles.timelineDesc}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}