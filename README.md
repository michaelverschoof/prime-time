[![MIT License][license-image]][license-url]
[![Coverage Status][coverall-image]][coverall-url]


# Prime Time

A lightweight JavaScript date library for parsing, manipulating and formatting dates. 

## Installing
The library is available as a [npm package][npm]. To install the package simply run:
```bash
npm install prime-time
```

## Calling the functionality
Basically all you need to create the object is call `primetime()`. This will result in a PrimeTime object containing the current time.
You can also provide a timestamp, a string representation or a Date to the function call. This will return a PrimeTime object specified to that date.
For example: `primetime(519998462003)` equals the date *1986-6-24 12:01:02.003 GMT*.

### Formatting dates

| Code                                                                                                    | Description                                                                      | Returns                                                      |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `primetime().localise()`                                                                                | Format the date to the user's locale (en-US for example)                         | `6/24/1986`                                                  |
| `primetime().localise('weekday, month, day, hour, minute, second, timezone')`                           | Format the date to the provided date parts and user's locale (en-US for example) | `Tuesday, 6/24/1986, 12:01:02 PM Coordinated Universal Time` |
| `primetime().localise('WDD, MMMM, DD, HH, mm, ss, TZZ', 'nl-nl')`                                       | Format the date to the provided date parts and locale                            | `dinsdag 24-6-1986 12:01:02 Gecoördineerde wereldtijd`       |
| `primetime().customise('{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second} {timezone-short}')` | Format the date to the provided format and user's locale (en-US for example)     | `Tuesday, June 24, 1986 @ 12:01:02 UTC`                      |
| `primetime().customise('{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss} {TZ}', 'nl-nl')`                      | Format the date to the provided format and user's locale                         | `dinsdag, juni 24, 1986 @ 12:01:02 UTC`                      |
| `primetime().format()`                                                                                  | Format the date to the user's locale (en-US for example)                         | `6/24/1986`                                                  |
| `primetime().format('weekday, month, day, hour, minute, second, timezone')`                             | Format the date to the provided date parts and user's locale (en-US for example) | `Tuesday, 6/24/1986, 12:01:02 PM Coordinated Universal Time` |
| `primetime().format('WDD, MMMM, DD, HH, mm, ss, TZZ', 'nl-nl')`                                         | Format the date to the provided date parts and locale                            | `dinsdag 24-6-1986 12:01:02 Gecoördineerde wereldtijd`       |
| `primetime().format('{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second} {timezone-short}')`    | Format the date to the provided format and user's locale (en-US for example)     | `Tuesday, June 24, 1986 @ 12:01:02 UTC`                      |
| `primetime().format('{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss} {TZ}', 'nl-nl')`                         | Format the date to the provided format and user's locale                         | `dinsdag, juni 24, 1986 @ 12:01:02 UTC`                      |

### Comparing dates
If the date()

| Code                                                                                          | Description                                                          | Returns |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| `primetime().difference(primetime().add(1, 'year'), 'days')`                                  | Compares the difference in days                                      | `365`   |
| `primetime().difference(primetime().subtract(1, 'day'), 'hour')`                              | Compares the difference in hours                                     | `-24`   |
| `primetime().after(primetime().subtract(1, 'month'))`                                         | Checks if the date is after the given date                           | `true`  |
| `primetime().after(primetime().subtract(5, 'days'), 'months')`                                | Checks if the date is after the given date in months                 | `false` |
| `primetime().after(primetime().subtract(1, 'days'), 'day', true)`                             | Checks if the date is equal or after the given date in days          | `true`  |
| `primetime().before(primetime().add(1, 'month'))`                                             | Checks if the date is before the given date                          | `true`  |
| `primetime().before(primetime().add(5, 'days'), 'months')`                                    | Checks if the date is before the given date in months                | `false` |
| `primetime().before(primetime().add(1, 'days'), 'day', true)`                                 | Checks if the date is before or equal to the given date in days      | `true`  |
| `primetime().between(primetime().subtract(1, 'day'), primetime().add(1, 'day'))`              | Checks if the date is between the given dates                        | `true`  |
| `primetime().between(primetime().subtract(1, 'day'), primetime().add(1, 'day'), 'months')`    | Checks if the date is between the given dates in months              | `false` |
| `primetime().between(primetime().subtract(1, 'day'), primetime().add(1, 'day'), 'day', true)` | Returns if the date is between the given dates in days with equality | `true`  |
| `primetime(519998462003).equals(primetime(519998462003)`                                      | Checks if the date equals the given date                             | `true`  |
| `primetime().equals(primetime().add(1, 'month'))`                                             | Checks if the date equals the given date in months                   | `false` |

### Modifying dates
These methods return the updated PrimeTime object, enabling method chaining. 

| Code                                 | Description                                                               | Returns     |
| ------------------------------------ | ------------------------------------------------------------------------- | ----------- |
| `primetime().add(6, 'days')`         | Adds six days to the current date                                         | `PrimeTime` |
| `primetime().add(5, 'second')`       | Adds five seconds to the current date                                     | `PrimeTime` |
| `primetime().subtract(5, 'minutes')` | Subtracts 5 minutes from the current date                                 | `PrimeTime` |
| `primetime().subtract(1, 'year')`    | Subtracts one year from the current date                                  | `PrimeTime` |
| `primetime().scale('hours')`         | Removes the minutes, seconds and milliseconds                             | `PrimeTime` |
| `primetime().scale('month')`         | Removes the days, minutes, seconds and milliseconds from the current date | `PrimeTime` |
| `primetime().clone()`                | Creates a duplicate PrimeTime object                                      | `PrimeTime` |
| `primetime().clone('day')`           | Creates a duplicate PrimeTime object with the year, month and day set     | `PrimeTime` |
| `primetime().update(519998462003)`   | Sets a new timestamp for the object                                       | `PrimeTime` |

### Changing time zones

| Code                                                                                                                                | Description                                                                                                                     | Returns                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `primetime().timezone('Europe/Amsterdam')`                                                                                          | Sets the object as if it is in that timezone                                                                                    | `PrimeTime`                                                  |
| `primetime().timezone('Europe/Amsterdam').format('WDD, MMMM, DD, HH, mm, ss, TZZ')`                                                 | Format the date (in the chosen time zone) to the provided date parts and user's locale (en-US for example)                      | `Tuesday, 6/24/1986, 10:01:02 PM Coordinated Universal Time` |
| `primetime().timezone('America/New_York').localise('DD, MM, YY, HH, mm, ss', 'nl-nl', 'Europe/Amsterdam')`                          | Format the date (in the chosen time zone) to the provided date parts and user's locale (en-US for example) in another time zone | `24-06-1986 18:01:02`                                        |
| `primetime().timezone('Europe/London').after(primetime().timezone('Europe/Amsterdam'))`                                             | Check if the first date is after the second date, using their respective time zones                                             | `true`                                                       |
| `primetime().timezone('Europe/London').before(primetime().timezone('Europe/Amsterdam'))`                                            | Check if the first date is before the second date, using their respective time zones                                            | `false`                                                      |
| `primetime().timezone('Europe/London').between(primetime().timezone('Europe/Amsterdam'), primetime().timezone('America/New_York'))` | Check if the first date is between the other dates, using their respective time zones                                           | `true`                                                       |
| `primetime().timezone('Europe/London').equal(primetime().timezone('Europe/Amsterdam'))`                                             | Check if the first date equals the second date, using their respective time zones                                               | `false`                                                      |


## Why Prime Time?
Named after the [Alan Parsons Project][alan-parsons-project] song [Prime Time][youtube-video] from the album [Ammonia Avenue][ammonia-avenue]. 
This song is one of my personal favorites and its name fits this project quite well.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=P6NNJq0FZN4" title="Watch on YouTube" target="_blank">
    <img src="http://img.youtube.com/vi/P6NNJq0FZN4/0.jpg" alt="The Alan Parsons Project - Prime Time - YouTube" width="50%" />
</a>

[npm]: https://www.npmjs.com/package/prime-time
[alan-parsons-project]: https://www.the-alan-parsons-project.com/
[ammonia-avenue]: https://www.the-alan-parsons-project.com/ammonia-avenue
[youtube-video]: https://www.youtube.com/watch?v=P6NNJq0FZN4

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[coverall-image]: https://coveralls.io/repos/github/michaelverschoof/prime-time/badge.svg?branch=master
[coverall-url]: https://coveralls.io/github/michaelverschoof/prime-time?branch=master
