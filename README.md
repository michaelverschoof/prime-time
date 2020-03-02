[![Coverage Status](https://coveralls.io/repos/github/michaelverschoof/prime-time/badge.svg?branch=master)](https://coveralls.io/github/michaelverschoof/prime-time?branch=master)

# Prime Time

A lightweight JavaScript date library for parsing, manipulating and formatting dates. 

## Installing
The library is available as a [npm package][npm]. To install the package simply run:
```bash
npm install prime-time --save
```
or with yarn:
```
yarn add prime-time
```

### Calling the functionality
Basically all you need to create the object is call `primetime()`. This will result in a PrimeTime object containing the current time.
You can also provide a timestamp, a string representation or a Date to the function call. This will return a PrimeTime object specified to that date.
For example: `primetime(519998462003)` equals the date *1986-6-24 12:01:02.003 GMT*.

### Why Prime Time?
Named after the [Alan Parsons Project][alan-parsons-project] song [Prime Time][youtube-video] from the album [Ammonia Avenue][ammonia-avenue].

<a href="http://www.youtube.com/watch?feature=player_embedded&v=P6NNJq0FZN4" title="Watch on YouTube" target="_blank">
    <img src="http://img.youtube.com/vi/P6NNJq0FZN4/0.jpg" alt="The Alan Parsons Project - Prime Time - YouTube" width="33%" />
</a>


[npm]: https://www.npmjs.com/package/prime-time
[alan-parsons-project]: https://www.the-alan-parsons-project.com/
[ammonia-avenue]: https://www.the-alan-parsons-project.com/
[youtube-video]: https://www.youtube.com/watch?v=P6NNJq0FZN4