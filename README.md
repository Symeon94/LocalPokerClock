# LocalPokerClock
This is a local poker clock which can freely be used in any of your games.

## How to use?
### Configure
Before beginning your game, access the `config.js` file and adjust the timing and duration of the blinds accordingly.

#### Blind Progression

Upon reaching the maximum blind level, the clock will use the last blind interval as a reference and continue applying the same pattern.

For example, if your final two blind levels were:

- **10/20**
- **20/40**

The system will recognize the 10-unit difference and replicate it for all subsequent levels.

### Start
Open the `poker.html` with your browser and click start.

## Advice on blinds

To estimate the duration of your game, consider the following guideline: whenever the **average chip count per player** drops below **20 big blinds**, a player will likely be eliminated during that blind level.

### Example Calculation

- **Starting conditions:** 5 players, **5,000 chips total** (**1,000 chips per player**).
- **Big blind reaches 50:** Since each player has an average of **20 big blinds**, a player will likely be eliminated.
- **Next phase:** 4 players remaining, **1,250 chips per player**.
- **Big blind must exceed 62.5** for the next elimination to occur.

### Sample 4-Hour Game Structure

For a game lasting **4 hours** with **6 players** and **1,000 chips per player**, you can use this principle to structure blind levels and anticipate eliminations.

By adjusting blind increments accordingly, you can control game duration while maintaining a competitive and engaging pace.

| Player count | Chips per player |   SB |  BB | BB per player | Elapsed |
|-------------:|-----------------:|-----:|----:|--------------:|:-------:|
|            6 |            1.000 |   10 |  20 |            50 | 0:00:00 |
|            6 |            1.000 |   20 |  40 |            25 | 0:30:00 |
|            6 |            1.000 |   30 |  60 |          16.7 | 1:00:00 |
|            5 |            1.200 |   40 |  80 |            15 | 1:30:00 |
|            4 |            1.500 |   50 | 100 |            15 | 2:00:00 |
|            3 |            2.000 |   60 | 120 |          16.7 | 2:30:00 |
|            2 |            3.000 |   75 | 150 |            20 | 3:00:00 |
|            2 |            3.000 |  100 | 200 |            15 | 3:30:00 |
|            1 |            6.000 |  125 | 250 |            24 | 4:00:00 |
|            1 |            6.000 |  150 | 300 |            20 | 4:30:00 |