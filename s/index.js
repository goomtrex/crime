import {AudioContext}
from 'standardized-audio-context'

const audioContext = new AudioContext
const oscillatorNode = audioContext.createOscillator ()

oscillatorNode.connect (audioContext.destination)

oscillatorNode.start ()
