type multAnswers = 'Strongly Disagree' | 'Disagree' | 'Neutral' | 'Agree' | 'Strongly Agree'|''

export function setQuery(presses: multAnswers[]): string {
    return `Question: I prefer working in a group rather than alone.
    Answer: ${presses[0]}
    Question: I'd rather create something new than learn what's already out there.
    Answer: ${presses[1]}
    Question: I value enjoyment over a high salary.
    Answer: ${presses[2]}
    Question: I prefer a quiet, distraction free environment over a busy, noisy one.
    Answer: ${presses[3]}
    Question: I'm crafty and good with my hands.
    Answer: ${presses[4]}
    Question: I like working through decisions instead of going with my gut.
    Answer: ${presses[5]}
    Question: I enjoy keeping up with current events.
    Answer: ${presses[6]}`
}

export {};