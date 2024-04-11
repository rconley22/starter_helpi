
//import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./basic-question-page.css";
import { useState } from "react";
import React from "react";




//import { Button } from "react-bootstrap";
export function BasicQuestionPage(): JSX.Element {
    type WrapperProps = {
        marks?: boolean;
      };
      
      const Wrapper = styled.div<WrapperProps>`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
      `;
      
      
      interface DotStyledProps {
        readonly position?: number;
        readonly backgroundColor?: string;
      }
      
      const DotStyled = styled.button.attrs((props: DotStyledProps) => ({
        style: {
          left: `${props.position}%`,
        },
      }))<DotStyledProps>`
        all: unset;
        z-index: 100;
        position: absolute;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: ${props => props.backgroundColor};
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      `;
      
      type LineFillProps = {
        position?: number;
        backgroundColor?: string;
      };
      
      const LineFill = styled.div.attrs((props: LineFillProps) => ({
        style: {
          width: `${props.position}%`,
        },
      }))<LineFillProps>`
        height: 100%;
        background-color: ${props => props.backgroundColor};
      `;
      
      type LineStyledProps = {
        backgroundColor?: string;
      };
      
      const LineStyled = styled.div<LineStyledProps>`
        height: 3px;
        background-color: ${props => props.backgroundColor};
      `;
      
      type MarksStyledProps = {
        position?: number;
        backgroundColor?: string;
      };
      
      const MarksStyled = styled.div<MarksStyledProps>`
        z-index: 10;
        position: absolute;
        height: 8px;
        width: 2px;
        background-color: ${props => props.backgroundColor};
        left: ${props => `${props.position}%`};
        top: 50%;
        transform: translate(-50%, -50%);
      `;
      
      const MarksText = styled.div`
        position: absolute;
        bottom: 15px;
        transform: translate(-50%, 0);
      `;
      
      interface Marks {
        min: number;
        max: number;
      }
      
      interface SliderProps {
        unFocusColor?: string;
        focusColor?: string;
        children?: React.ReactNode;
        style?: React.CSSProperties;
        className?: string;
        theme?: any;
        onChange?: (value: number) => void;
        value?: number;
        defaultValue?: number;
        marks?: Marks;
        tooltipVisible?: boolean;
        step?: number;
        vertical?: boolean;
        min?: number;
        max?: number;
        unit?: string;
      }
      
      const Slider = (props: SliderProps) => {
        const {
          style,
          className,
          theme,
          onChange,
          value,
          marks,
          tooltipVisible,
          step,
          vertical,
          min,
          max,
          unit,
          unFocusColor,
          focusColor,
        } = props;
        
          const [enable, setEnable] = React.useState(false);
        const [positionCursorPercentage, setPositionCursorPercentage] = React.useState(
          value ? ((value - min) / (max - min)) * 100 : 0
        );
        const [positionCursor, setPositionCursor] = React.useState(value ? value : min);
        const slide = React.useRef(null);
        
        React.useEffect(() => {
          const rect = slide.current.getBoundingClientRect();
          const minPosition = 0;
          const maxPosition = rect.width;
          let positionAbsolute = positionCursorPercentage;
          window.onmousemove = (ev: MouseEvent): any => {
            const position = vertical ? rect.y + rect.height - ev.clientY : ev.clientX - rect.x;
            if (enable) {
              window.onmouseup = (evMouseUp: MouseEvent): any => {
                setEnable(false);
              };
              if (position < minPosition) {
                positionAbsolute = min;
              } else if (position > maxPosition) {
                positionAbsolute = max;
              } else {
                positionAbsolute = (position / maxPosition) * (max - min) + min;
              }
      
              if (
                positionAbsolute <= positionCursorPercentage + step &&
                positionAbsolute >= positionCursorPercentage - step
              ) {
                positionAbsolute = positionCursorPercentage;
              }
              positionAbsolute = Math.round(positionAbsolute * (1 / step)) / (1 / step);
              if (onChange) {
                onChange(positionAbsolute);
              } else {
                setPositionCursor(positionAbsolute);
              }
            }
          };
        }, [enable]);
      
        React.useEffect(() => {
          if (value) {
            onChangePositionOfCursor(value);
          } else {
            onChangePositionOfCursor(positionCursor);
          }
        }, [value, positionCursor]);
      
        const onChangePositionOfCursor = (positionAbsolute: number) => {
          setPositionCursorPercentage(((positionAbsolute - min) / (max - min)) * 100);
        };
      
        const valueOfCursor =
          Math.round(((positionCursorPercentage / 100) * (max - min) + min) * step) / step;
        

    return (

        <><div>
            <h2>Basic Questions Page</h2>
            <hr></hr>
            <p>If you feel unsure about your future career but don't want to
                think about it too much, look no further. In a few short minutes,
                you can get a basic idea as to what career suit you. All you have
                to do is answer the questions below!</p>
            <hr></hr>
            <h4>I prefer working in a group rather than alone.</h4>
            <button onClick={handleAnswerQuestion}>Strongly Disagree</button>
            <button onClick={handleAnswerQuestion}>Disagree</button>
            <button onClick={handleAnswerQuestion}>Neutral</button>
            <button onClick={handleAnswerQuestion}>Agree</button>
            <button onClick={handleAnswerQuestion}>Strongly Agree</button>
            <hr></hr>
            <h4>I'd rather create something new than learn what's already out there.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I value enjoyment over a high salary.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I prefer a quiet, distraction-free environment over a busy, noisy one.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I'm crafty and good with my hands.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I like working through decisions instead of going with my gut.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I enjoy keeping up with current events.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            
            {progress === 7 && 
                <div>
                    <hr></hr>
                    <p className="questions">All questions answered!</p>
                    <Button className="submitAns">Submit Answers</Button>
                </div>}
            <hr></hr>
            <button className="submitAns"onClick={resetProgress}>Reset Progress</button>
        </div><div className="progress">
                <div className="progress-bar" style={{ width: `${(progress / 7) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
            </div></>


    );
    
}