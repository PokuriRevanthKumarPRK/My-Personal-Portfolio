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
        <div >
                    <div className={styles.container}>
                        <h1>My Computing Portfolio</h1>
                    </div>
            <div className={styles.rows}>
                <div className={styles.left}>
                    
                    <div className={styles.skills}>
                        <h3>My Skills:</h3>
                        <ul>
                            <li>Artificial Intelligence</li>
                                <ul> 
                                    <li>Metrics & Loss function</li>
                                        <ul> 
                                            <li>Sum of Squared Residuals (Metrics)</li>
                                            <li>Mean Squared of Error (Metrics and Loss Function)</li>
                                            <li>R<sub>2</sub> (Metrics)</li>
                                        </ul>
                                    <li>Supervised Machine Learning</li>
                                        <ul>
                                            <li>Linear Regression & Multi Linear regressiom</li>
                                            <li>Logisitc Regression </li>
                                            <li>Decision Trees</li>
                                            <li>Support Vector Machine</li>
                                            <li></li>
                                        </ul>
                                    <li>Neural Networks</li>
                                        <ul>
                                            <li>Artificial Neural Network</li>
                                            <li>Convoluation Neural Network</li>
                                            <li>Recurrent Neural Network</li>
                                            <li>LSTM</li>
                                            <li>Embeddings</li>
                                            <li>Tansformers</li>
                                            <li>Backprogration Via Gradient Descent</li>
                                        </ul>
                                </ul>
                            <li>Web Development</li>
                                <ul>
                                    <li>HTML & CSS</li>
                                    <li>Javascript</li>
                                    <li>NextJS</li>
                                    <li>Basic of Anime.js and Tailwind CSS</li>
                                    
                                </ul>
                            
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.colortable}>
                        <table className={styles.bordertable}>
                            <tr>
                                <th>Workshops & Programmes</th>
                                <th>What I learnt</th>
                            </tr>
                            <tr>
                                <th>Arduino Training Programme (In School 2023)</th>
                                <th>Learnt The Basics of Arduino and the basics components such as the LED, Buzzer, LCD, Buttons</th>
                            </tr>
                            <tr>
                                <th>AI Training Programme (In School 2024)</th>
                                <th>
                                    <ul>
                                        <li>Gained my first exposure to Machine Learning and Deep Learning, sparking my passion for AI.</li>
                                        
                                    </ul>
                                </th>
                            </tr>
                            <tr>
                                <th>AI Illuminator Workshops by Goldman Sachs (2024)</th>
                                <th>
                                    <ul>
                                        <li>Learned to use Raspberry PI</li>
                                        <li>Introduced With Machone Learning with Tensorflow</li>
                                    </ul>
                                </th>
                            </tr>
                            <tr>
                                <th>PyCon SG (2025)</th>
                                <th>
                                    <ul>
                                        <li>Understood the basics of recommender systems</li>
                                        <li>Explored supervised and unsupervised learning</li>
                                    </ul>
                                </th>
                            </tr>
                            <tr>
                                <th>Live It Up! (2025)</th>
                                <th>
                                    <ul>
                                        <li>Applied supervised and unsupervised learning</li>
                                        <li>Worked with EMG sensors on Arduino</li>
                                    </ul>
                                </th>
                            </tr>
                            <tr>
                                <th>BuildingBloCS December Conference (2025)</th>
                                <th>
                                    <ul>
                                        <li>Developed skills in UI/UX design using Figma</li>
                                        <li>Learned Git & GitHub workflow</li>
                                        <li>Built websites with HTML, CSS, and JavaScript</li>
                                        <li>Learnt the basics of Postgress SQL Dataases</li>
                                        <li>Learnt the basics of Tailwind CSS and Anime.JS</li>
                                        <li>Explored React & Next.js frameworks</li>
                                    </ul>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className={styles.newtable}>
                <table className={styles.bordertable}>
                    <tr>
                        <th>Awards</th>
                        <th>Competitions</th>

                    </tr>
                    <tr>
                        <th>Achievements</th>
                        <th>
                            <ul> 
                                <li>Junior Achievement  AI FOR GOOD Social Innovation Challenge 2025 (1st Runner-Up)</li>
                                <li>DSTA-DSTO-VJC VEX 2025 (Top 6 Finalists in Secondary-Heavy Category)</li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th>Partcipation</th>
                        <th>
                            <ul>
                                <li>IDE Maker 2024</li>
                                <li>National Youth Tech Championship 2024</li>
                                <li>SIT Community Challenge 2024</li>
                                <li>Devpost Amplicode Hackathon 2025</li>
                                <li>BuildingBloCS December Conference 2025</li>
                                <li>National Olympiad Of Artificial Intelligence </li>
                                <li>TP X VJC Data Science Hackathon</li>
                            </ul>
                        </th>
                    </tr>
                </table>
            </div>
            <div>
                <div className={styles.hi}>
                    <h2> My Computing Journey!!</h2>
                </div>
                <div className={styles.twentythree}>
                    


                    <div>
                        <h1>2023</h1>
                        
                        <h3>Novemeber</h3>
                        <p>&nbsp;</p>
                        <p>I took part in my school's Arduino training</p>
                    </div>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                
                
                <div className={styles.twentythree}>
                    

                    
                    <div>
                        <h1>2024</h1>
                        <h3>March</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I took part in the IDE Maker Challenge 2024.</p>
                                <p>&nbsp;</p>
                                <h4>Challenge Statement</h4>
                                <p>
                                “In 2024 teams will learn more about how we humans affect nature and how nature and natural events can affect us. How can your project solution help us live in harmony with nature? Can your project solution help us live in places where nature is dangerous or harsh, and can they assist us in living a more environmentally friendly lifestyle?”
                                </p>
                                <p>&nbsp;</p>
                                <h4>Identified Problem:</h4>
                                <p>The birds clustering around the trash bins or places where they can find food or open areas. They leave behind droppings afterwards which causes damage to property</p>
                                <p>&nbsp;</p>
                                <h4>Solution</h4>
                                <p> We used high pitch frequency from the speaker which deters birds away by the vibrations and disruption of communication between birds. The vibrations by high pitch sound will cause the birds to feel irritated and will leave the area where the sound is produced.</p>
                                <p>&nbsp;</p>
                                <h4>Tools Used:</h4>
                                <p>Arduino, Anikken Andee, LED, Buzzer</p>
                                <p>&nbsp;</p>
                                <h4> What I learnt from this competition:</h4>
                                <ul>
                                    <li>Improved my presentation skills</li>
                                    <li>Improved my knowledge on Anikken Andee</li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>Prototype</p>
                                <Image src="/images/idemakernew.png" alt="IDE Maker Challenge" width={400} height={250}/>
                                
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>July</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <p>I took part in the National Youth Tech Championship</p>
                                <p>&nbsp;</p>
                                <h4>What I learnt</h4>
                                <p>I learnt how to use Vertex AI and fly tello drone using python and Artificial Intelligence </p>
                                <p>&nbsp;</p>
                            </li>
                        </ul>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>Novemeber</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        
                            
                            <p>I took part in the SIT Community Challenge 2024</p>
                            <p>&nbsp;</p>
                            <h4>Challenge Statement</h4>
                            <p>“Use of assistive technology to help commuters with disabilities take public transport”</p>
                            <p>&nbsp;</p>
                            <h4>Identified Problem</h4>
                            <ul>
                                <li>Current bus ramp require the bus captain manually unfold the ramp</li>
                                <li>The disabled person using the wheelchair may feel like a burden to others</li>
                                <li>There may be obstacles that prevent the ramp from being deployed</li>
                            </ul>
                            <p>&nbsp;</p>
                            <h4>Solution</h4>
                            <p>An automated ramp with handles, equipped with a sensor beneath the ramp</p>
                            <ul>
                                <li>Automated ramp which slides down </li>
                                <li>Comes with an in-built sensor which detects for obstacles which obstructs its path</li>
                            
                            </ul>
                            <p>&nbsp;</p>
                            <p>Tools Used: ST Mars Rovers</p>
                            <p>&nbsp;</p>
                            <h4>What I learnt</h4>
                            <ul>
                                <li>Improved my presentation skills</li>
                                <li>Improved my knowledge on MARS Rovers</li>
                            
                            </ul>
                            <p>&nbsp;</p>
                            <Image src="/images/sitchall.png" alt="IDE Maker Challenge" width={400} height={250}/>
                            <p>&nbsp;</p>
                            </li>  
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <li>
                            <p>I helped with organising Robotics Open House</p>
                            </li>
                                                  
                        </ul>

                    </div>
                                 
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                
                <div className={styles.twentythree}>
                    


                    <div>
                        <h1>2025:</h1>
                        <h3>January</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I helped organising the Robotics CCA Fair</p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>February</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I became the Vice President of Robotics Club</p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>May</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I particpated in the DEVPOST Amplicode Hackathon 2025</p>
                        <p>&nbsp;</p>
                        <h4>Problem Identified</h4>
                        <p>In many parts of the world, people hesitate to seek medical advice due to the expensive and time-consuming process of disease diagnosis.</p>
                        <p>&nbsp;</p>
                        <h4>Solution</h4>
                        <p> DiseasePred Insights allows users to: Select their symptoms using a simple, user-friendly interface. Predict the most likely disease using a pre-trained machine learning model. Instantly get a summarized explanation of the disease from Wikipedia. Search for nearby hospitals or clinics for the predicted condition using DuckDuckGo, with links to book appointments.</p>
                        <p>&nbsp;</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MWBg_MhMBUI?si=_KnaormS2dEmm560&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                        <a href="https://diseasepredinsights.streamlit.app/">Link to the website</a>
                        <p>&nbsp;</p>
                        <table>
                            <tr>
                                <th>Tools</th>
                                <th>Purpose</th>
                            </tr>
                            <tr>
                                <th>Streamlit</th>
                                <th>Web UI</th>

                            </tr>
                            <tr>
                                <th>Disease Prediction Model by [AWeirdDev/human-disease-prediction] </th>
                                <th>The Model to Predict the Disease</th>

                            </tr>
                            <tr>
                                <th>Wikipedia API</th>
                                <th>Provide Information on the predicted disease</th>
                                
                            </tr>
                            <tr>
                                <th>DuckDuckGo API</th>
                                <th>Search nearest hospital that helps with the disease</th>
                            </tr>
                            <tr>
                                <th>Streamlit Communtiy Cloud</th>
                                <th>Deploying The Website</th>
                            </tr>
                        </table>
                        <p>&nbsp;</p>
                        <h4>What I learnt</h4>
                        <p>I learnt how to integrate APIs into my applications </p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>June</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I attended the PyCon SG 2025 Conference</p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>July</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I took part in the DSTA-DSTO VJC VEX Challenge (Exploration Challenge) and my team was in the Top 6 Finalists</p>
                        <p>&nbsp;</p>
                        <p>Back View:</p>
                        <Image src="/images/robot1.png" alt="VEX Robot Side View" width={400} height={250}/>
                        <p>&nbsp;</p>
                        <p>Side View:</p>
                        <Image src="/images/robot2.png" alt="VEX Robot Front View" width={400} height={250}/>
                        <p>&nbsp;</p>
                        <p>My Team's VEX Run</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/McSjFSlioH8?si=sbYM0ao2Fnn36g4W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <h4>What I learnt</h4>
                        <p>I learnt about gear ratios and how to code in the VEX Programming Application.</p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>August</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I partcipated in Junior Achievement Singapore AI for GOOD Competition and achieved 2nd Runner Up</p>
                        <p>&nbsp;</p>
                        <h4>Competition Statement:</h4>
                        <p>"Singapore is facing a rapidly aging population, with 1 in 4 citizens expected to be over 65 by 2030. While the government has implemented initiatives like the Action Plan for Successful Aging, there are still gaps in ensuring a high quality of life for seniors, both at the personal and city-wide levels. How can AI step in to bridge these gaps and make active aging smoother for our seniors?  Reimagine aging with AI and help Singapore lead the way in creating a future where aging is not just longer, but better."</p>
                        <p>&nbsp;</p>
                        <h4>Identified Problem</h4>
                        <p>Elderly individuals, especially those living alone or with limited digital literacy, struggle with a lack of social connection.</p>
                        <p>&nbsp;</p>
                        <h4>Solution</h4>
                        <p>Free App for seniors to connect via AI-powered interest-based video matching</p>
                        <p>&nbsp;</p>
                        <iframe src="https://sgmoe-my.sharepoint.com/personal/pokuri_revanth_kumar_students_edu_sg/_layouts/15/Doc.aspx?sourcedoc={34bdb50f-08a1-4ee3-b10e-cda51c3b13fc}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="800px" height="450px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                        <p>&nbsp;</p>
                        <h4>What I learnt</h4>
                        <p>I learnt the different types of AI and I learnt some presentation skills.</p>
                        <p>&nbsp;</p>
                        <Image src="/images/japhoto.png" alt="JA Image" width={640} height={320}/>
                        <p>&nbsp;</p>
                        <Image src="/images/japhoto2.png" alt="JA Image" width={640} height={320}/>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>December</h3>
                        
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I particpated in the BuildingBloCS December Conference 2025 Workshop and Hackathon </p>
                        <p>&nbsp;</p>
                        <h4>Challenge Statement</h4>
                        <p>"If you made a website that could save the world, what would it look like?"</p>
                        <p>&nbsp;</p>
                        <h4>Idea</h4>
                        <p>WaterSaver is a web application built with Next.js that helps users monitor, track, and reduce their water usage. The app includes authentication, OCR-based water bill scanning, point rewards, and educational content about global water usage.</p>
                        <p>&nbsp;</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ATM5C4EZ6bw?si=1Ja9AWK6Z1FVvXvC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p>&nbsp;</p>
                        <h4>What I learnt</h4>
                        
                        <p>I learnt how to push and pull code from GitHub using Git. Additionally, I learnt how to code using Next.JS and use Postgress Databases using Neon Databases</p>
                            </li>
                        </ul>
                        <p>Certificates</p>
                        <Image src="/images/Cert_BuildingBloCS.png" alt="Cert_BuildingBloCS" width="640" height="540"/>
                    </div>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div className={styles.twentythree}>



                    <div>
                        <h1>2026:</h1>
                        <h3>Feburary</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I participated in NOAI Prelimary Round </p>
                        </li>
                        </ul> 
                        
                        <p>&nbsp;</p>
                        <hr></hr>
                        <p>&nbsp;</p>
                        <h3>March</h3>
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                        <p>I participated in TP X VJC Data Science Hackathon</p>
                        <p>&nbsp;</p>
                        <h4>Problem Statement</h4>
                        <p>In this hackathon, you are provided with a dataset containing anonymised information about students’ academic background, lifestyle habits, and study-related variables. Which groups of students are at the highest risk of underperforming at O-Levels, and what advice can we give them?</p>
                        <h4>Task</h4>
                        <ul>
                            <li>
                            Data Preparation
                            <ul>
                                <li>
                                Check for missing values, duplicate entries, outliers or any other data issues 
                                </li>
                            </ul>
                            </li>
                            
                            <li>
                            Data Exploration
                            <ul>
                                <li>
                                Perform exploratory data analysis (EDA) on the dataset provided to analyse the various relationships and variables, and identify potential correlations between variables.
                                </li>
                                <li>
                                Explore whether certain trends show signs of higher risk. 
                                </li>
                            </ul>
                            </li>
                            <li>
                            Data Visualisation
                            <ul>
                                <li>
                                Create meaningful visualisations (e.g. histogram, bar chart, etc.) to understand the relationship between variables.
                                </li>
                            </ul>
                            </li>
                            <li>
                            Linear Regression
                            <ul>
                                <li>
                                Build a linear regression model to predict student performance. 
                                </li>
                                <li>
                                Identify statistically significant predictors. 
                                </li>
                            </ul>
                            </li>
                            <li>
                                
                            Model Evaluation
                            <ul>
                                <li>
                                Evaluate the model’s performance using RMSE, MAE, and R2. 
                                </li>
                                <li>
                                Interpret model accuracy and limitations, as well as the impacts of each predictor. 
                                </li>
                            </ul>
                            </li>
                        </ul>
                        <p>This is the poster my teammates and I did for the competition</p> 
                        <p>&nbsp;</p>
                        <Image src="/images/tpxvjc_hackathon.png" alt="JA Image" width={640} height={320}/>
                        <p>&nbsp;</p>
                        <p>Certificate:</p>
                        <Image src="/images/Cert_TPXVJC_hackathon.png" alt="Cert" width={640} height={320}/>
                        </li>
                   </ul> 
                   
                   </div>
                    

                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <hr></hr>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            <div>
                <div className={styles.hi}>
                    <h2>My Projects</h2>
                    
                </div>

                <div className={styles.twentythree}>
                    <div>
                        <h3>These three projects are projects that i am very fond of</h3>
                        <ul>
                        <li>
                            <p>Strokes Detections</p>
                        </li>
                        <li>
                            <p>Thumbnail Generator</p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                    </ul>
                    </div>
                    
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div className={styles.twentythree}>
                    <div>
                    <h1>Strokes Detection</h1>
                    <h3>Why I built this?</h3>
                    <ul>
                        <ul>
                    <p>I builtthis project for early strokes prediction using audio processing and facial images. </p>
                        </ul>
                    </ul>
                        
                            <h3>Features:</h3>
                            <ul>
                            <ul>
                                <li>
                                    <h4>Models</h4>
                                    <ul>
                                        <li>A CNN-based image model for facial analysis</li>
                                        <li>A CNN-based audio model using spectrogram inputs</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Real-Time Audio Processing</h4>
                                    <ul>
                                        <li>
                                            <p>Records user speech directly</p>
                                        </li>
                                        <li>
                                            <p>Converts audio into a spectrogram using Short-Time Fourier Transform (STFT)</p>
                                        </li>
                                        <li>
                                            <p>Transforms the spectrogram into an image-like format for model input</p>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <h4>Face Capture & Processing</h4>
                                    <ul>
                                        <li>
                                            <p>Captures live images using the device camera</p>
                                        </li>
                                        <li>
                                            <p>Resizes and normalises images before prediction</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Live Prediction System</h4>
                                    <ul>
                                        <li>
                                            <p>Generates predictions from both models in real time</p>
                                        </li>
                                        <li>
                                            <p>Displays individual model outputs and a combined prediction score</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Prediction Fusion Mechanism</h4>
                                    <ul>
                                        <li>
                                            <p>Combines outputs from both models using the average</p>
                                        </li>
                                        <li>
                                            <p>Produces a final classification based on combined confidence</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        
                    </ul>
                    <h3>Accuracy of the Model</h3>
                    <ul>
                        <div>
                    <ul>
                        
                        <p>Validation Accuracy for The Models</p>
                        <ul>
                        
                        <li>
                            <p>Audio (Spectrogram) Model: 86.7% validation accuracy</p>
                        </li>
                        <li>
                            <p>Image (Face) Model: 91.4% validation accuracy</p>
                        </li>
                        </ul>
                        <p>Despite strong validation performance, real-world testing revealed prediction bias and generalization issues:</p>
                        <ul>
                        <li>
                            <p>The audio model consistently predicts “Have Stroke” (Class 1)</p>
                        </li>
                        <li>
                            <p>The image model consistently predicts “No Stroke” (Class 0)</p>
                        </li>
                    </ul>
                        <p>This indicates that:</p>
                        <ul>
                            <li>
                                <p>The models may be overfitting to training data patterns</p>
                            </li>
                            <li>
                                <p>There may be data imbalance or insufficient real-world variability</p>
                            </li>
                        </ul>
                    
                    </ul>
                    </div>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <p>These are some Improvements I can apply to this project in the future</p>
                    <ul>
                        <li>
                            <h4>Fix Class Prediction Bias</h4>
                            <ul>
                                <li>
                                    <p>Apply class weighting or resampling techniques</p>
                                </li>
                                <li>
                                    <p>Use more balanced datasets</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>Improve Audio Pipeline</h4>
                            <ul>
                                <li>
                                    <p>Normalise spectrogram values properly instead of simply dividing by 255</p>
                                </li>
                                <li>
                                    <p>Use better feature extraction (e.g., MFCCs, Mel spectrograms)</p>
                                </li>
                                <li>
                                    <p>Ensure consistent audio length and noise handling</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>Model Architecture Upgrades</h4>
                            <ul>
                                <li>
                                    <p>Replace simple 2-layer CNNs with deeper architectures</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>Demo:</h3>
                    <div>



                   {/* GitHub Card */}
<div
  id="card"
  className="pointer-cursor"
  onClick={() => window.open('https://github.com/PokuriRevanthKumarPRK/StrokesDetection')}
  style={{
    backgroundColor: 'white',
    border: 'solid black 2px',
    borderRadius: '10px',
    padding: '10px',
    width: '500px',
    textAlign: 'center',
    fontFamily: "'Gill Sans', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: '15px',
    color: 'black',
    cursor: 'pointer',
    margin: '1rem 0'
  }}
>
  <div style={{ display: 'inline-block', verticalAlign: 'middle', margin: '5px' }}>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40px">
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </div>

  <div
    onClick={(e) => { window.open('https://github.com/PokuriRevanthKumarPRK'); e.stopPropagation(); }}
    style={{ backgroundColor: '#F6F8FA', borderRadius: '10px', display: 'inline-block', margin: '0 auto', paddingRight: '10px', textAlign: 'center', verticalAlign: 'middle', cursor: 'pointer' }}
  >
    <img width="40px" style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '10px', margin: '5px' }} src="https://avatars.githubusercontent.com/u/174114414?v=4" alt="avatar" />
    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>PokuriRevanthKumarPRK</div>
  </div>

  <div style={{ display: 'inline-block', verticalAlign: 'middle', paddingLeft: '10px', fontSize: '20px', fontWeight: 600 }}>StrokesDetection</div>
  <p>Predicting Strokes using Audio and Image</p>

  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: '5px', color: 'gray' }}>
    <span onClick={(e) => { window.open('https://github.com/PokuriRevanthKumarPRK/StrokesDetection/stargazers'); e.stopPropagation(); }} style={{ cursor: 'pointer' }}><b>0</b> stargazers</span>
    <span onClick={(e) => { window.open('https://github.com/PokuriRevanthKumarPRK/StrokesDetection/watchers'); e.stopPropagation(); }} style={{ cursor: 'pointer' }}><b>0</b> watchers</span>
    <span onClick={(e) => { window.open('https://github.com/PokuriRevanthKumarPRK/StrokesDetection/network/members'); e.stopPropagation(); }} style={{ cursor: 'pointer' }}><b>0</b> forks</span>
  </div>
</div>



                    </div>
                    <img src="![GitHub Repo Card](https://githubcard.com/PokuriRevanthKumarPRK/StrokesDetection.svg)" alt="GitHub Project"></img>
                    </div>
                </div>
                <div className={styles.twentythree}>
                    <div>
                        <h3>Thumbnail Generator</h3>
                        <h4>Why I built this?</h4>
                        <p>I built this project because nowadays many content creators want to produce a large amount of short-form content. As a result, they may not have enough time to design high-quality thumbnails. This often leads them to hire designers to create thumbnails for them. However, hiring designers can be expensive, especially for creators who are just starting out and may not be earning much profit. This project helps creators generate visually appealing thumbnails for their short-form videos (2–3 minutes) quickly and for free.</p>
                    </div>
                </div>
            </div>
        </div>    
    )}