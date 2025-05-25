import BlindSystem from "./BlindSystem.js";
import Clock from "./Clock.js";
import ClockDisplay from "./ClockDisplay.js";
import ClockState from "./ClockState.js";
import {blindsDurationMinutes, blindsValues} from "./config.js";

// Change the below to change blinds
const blinds = new BlindSystem(blindsValues);

// State
const clock = new Clock(blindsDurationMinutes * 60);
const display = new ClockDisplay(blinds)
const stateManager = new ClockState(clock);
clock.observedBy(display);
clock.observedBy(stateManager);

window.startClock = function() { clock.start(); }
window.pauseClock = function() { clock.pause(); }
window.resetClock = function() { clock.reset(); }

//window.addEventListener('beforeunload', saveState);
stateManager.load();
