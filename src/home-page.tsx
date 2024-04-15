//import React, { useState } from "react";
//import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import './home-page.css';

export function HomePage(): JSX.Element {

    return (
        <div>
            <Container className="Descriptions">
                <Row>
                    <Col>
                        <h2>Basic Career Quiz</h2>
                        <p>If you feel unsure about your future career but don't want to think about it too much, look no further. In a few short minutes, you can get a basic idea as to what career suit you. All you have to do is answer the questions below!</p>
                    </Col>
                    <Col>
                        <h2>Detailed Career Quiz</h2>
                        <p>The Career Helpi's Detailed Career Assessment allows users to fill out a more personal quiz that reflects their specific interest and goals. Here, users' results will be more personalized to who you are. Providing extra detail allows the Career Helpi to better match a potential career.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}