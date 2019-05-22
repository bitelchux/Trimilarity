# Trimilarity
Simple javascript algorithm for calculating similarity

View demo here: [DEMO](https://kipkat.github.io/Trimilarity/demo/)

### Download / Installation
Downloading using [git](https://git-scm.com/)

``
git clone https://github.com/kipkat/Trimilarity
``

Using it in browser projects with the script tag

```html
<script src="https://kipkat.github.io/Trimilarity/trimilarity.js"></script>
```

### Usage
__trimilarity(a, b)__
```js
> trimilarity('she is very beautiful', 'she is ugly')
5
> trimilarity('she is very beautiful', 'i am so beautiful')
8
```
__duolarity(a, b)__

Just a different algorithm. It is similar to [Sørensen–Dice coefficient](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient)
```js
> duolarity('what are you doing in my swamp', 'how are you doing')
14
> duolarity('what are you doing in my swamp', 'are you in my swamp?')
19
```
__pTrimilarity(a, b)__ and __pDuolarity(a, b)__

The number of common groups (the similarity value) but based on the length of the strings given.
```js
> pTrimilarity('test','taste')
0
> pTrimilarity('test','test')
1
> pTrimilarity('mmmmm','hmmmm')
2
> pDuolarity("what's up?", "what is that?")
0.5714285714285714
```
__averagelarity(a, b)__ will return the average value between pTrimilarity and pDuolarity
```js
> averagelarity('javascript', 'something different')
NaN
> averagelarity("12367890",'123')
0.39153439153439146
```
__bestMatch(algorithm, string, targets)__

Compares of the string with the keys in the _targets_ object and returns the value of the best match. You must specify a function (as algorithm) with two parameters.
* useful at creating chatbots, check the demo page
```js
replies = { 
  'hi there' : 'Obi-Wan Kenobi',
  "hello, it's me": 'You are Adele or Lionel Richie'
}
bestMatch(duolarity, "hi", replies)
// will return {match: "Obi-Wan Kenobi", value: 0}
bestMatch(duolarity, "hello", replies)
// wil return {match: "You are Adele or Lionel Richie", value: 2}
```
