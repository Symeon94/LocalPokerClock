import BlindSystem from "./BlindSystem.js";
import Clock from "./Clock.js";
import ClockDisplay from "./ClockDisplay.js";
import ClockState from "./ClockState.js";

// Change the below to change blinds
const blindsDurationMinutes = 30;
const blinds = new BlindSystem([10, 20, 30, 40, 50, 75, 100, 125, 150, 200])

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
