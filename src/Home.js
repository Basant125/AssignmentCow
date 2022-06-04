import { Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'
import heroImg from './asset/heroimg.png'
import img1 from './asset/img1.png'
import img2 from './asset/img2.png'
import img3 from './asset/img3.png'
import img4 from './asset/img4.png'
import img5 from './asset/img5.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import './Home.scss'
import { Box } from "@mui/system";
const Home = () => {
    return <div className="home">
        <div className="home-left">
            <div className="video-container">
                <img src={heroImg} />
                <Button variant="contained" className="preview-btn">Preview</Button>
            </div>
            <div className="home-left-description">
                <p>Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages
                </p>
                <Button variant="contained" className="lister-btn">Listen</Button>
            </div>
        </div>
        <div className="home-right">

            <div className="home-right-links">
                <ul>
                    <li>
                        <a href="">Actor</a>
                    </li>
                    <li>
                        <a href="">Voice</a>
                    </li>
                    <li>
                        <a href="">Aligment</a>
                    </li>
                    <li>
                        <a href="" className="active">Backround</a>
                    </li>
                </ul>
            </div>
            <div className="accordion">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ color: "#3860AD", fontFamily: '"Poppins", sans-serif' }}>Images</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box container className="contain-images">
                            <div className="upload file">
                                <div className="img file-img">
                                    <label
                                        className="formImage_label"
                                        htmlFor="filePicker"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <CloudUploadIcon className="uplad-icon" />
                                    </label>
                                    <input
                                        type="file"
                                        id="filePicker"
                                        style={{ display: "none" }}
                                    // onChange={onFileChangePic}
                                    />
                                </div>
                                <span className="img-text">Upload</span>
                            </div>
                            <div className="upload imgOne">
                                <div className="img">
                                    <img src={img1} />
                                </div>
                                <span className="img-text">Office</span>
                            </div>
                            <div className="upload imgTwo">
                                <div className="img">
                                    <img src={img2} />
                                </div>
                                <span className="img-text">Space</span>
                            </div>
                            <div className="upload imgThree">
                                <div className="img">
                                    <img src={img3} />
                                </div>
                                <span className="img-text">Noise</span>
                            </div>
                            <div className="upload imgFour">
                                <div className="img">
                                    <img src={img4} />
                                </div>
                                <span className="img-text">Metting Room</span>
                            </div>
                            <div className="upload imgFive">
                                <div className="img">
                                    <img src={img5} />
                                </div>
                                <span className="img-text">Books</span>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Solid Colors</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Videos</Typography>
                    </AccordionSummary>
                </Accordion>
            </div>
        </div>
    </div>;
};

export default Home;
