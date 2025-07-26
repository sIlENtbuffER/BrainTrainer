import React, {uerState, useEffect, useState} from 'react';
import Grid from "./Grid";
import Controller from "./Controller";
import {generateStimulus, checkMatch} from './logic';

const N = 2;

const DualNBack = () => {
    const [visualHistory, setVisualHistory] = useState([]);
    const [audioHistory, setAudioHistory] = useState([]);
    const [currentVisual, setCurrentVisual] = useState(null);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [score, setScore] = useState({visual: 0, audio: 0});
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const {visualIndex, audioLetter} = generateStimulus();
            setCurrentVisual(visualIndex);
            setCurrentAudio(audioLetter);
            setVisualHistory((prev => [...prev, visualIndex]));
            setAudioHistory((prev => [...prev, audioLetter]));
            setTick((prev => prev + 1));
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const handleResponse = (type) => {
        const history = type === 'visual' ? visualHistory : audioHistory;
        if (checkMatch(history, N)) {
            setScore((prev) => ({...prev, [type]: prev[type] + 1}));
        }
    }

    return (
        <div className='flex flex-col items-center gap-6'>
            <Grid activeIndex={currentVisual} />
            <div className='text-xl font-mono'>{currentAudio}</div>
            <Controller onMatch={handleResponse} />
            <div className='text-sm text-gray-400'>
                Visual Score: {score.visual} | Audio Score: {score.audio}
            </div>
        </div>
    )
};

export default DualNBack;