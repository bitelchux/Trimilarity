function trimilarity(a, b)
{
    sim = 0
    for (A=0; A<a.length-2; A++) {
        for (B=0; B<b.length-2; B++) {
            if (a[A]+a[A+1]+a[A+2] == b[B]+b[B+1]+b[B+2])
            {
                sim++;
            }
        }
    }
    return sim;
}
function pTrimilarity(a, b)
{
    sim = 0
    for (A=0; A<a.length-2; A++) {
        for (B=0; B<b.length-2; B++) {
            if (a[A]+a[A+1]+a[A+2] == b[B]+b[B+1]+b[B+2])
            {
                sim++;
            }
        }
    }
    return sim/((a.length+b.length)/2-2);
}
function duoSplit(target)
{
	spl = []
	for (i=0; i<target.length-1; i++)
  {
		spl.push(`${target[i]}${target[i+1]}`)
  }
	return spl
}
function duolarity(a, b)
{
  const aSplit = duoSplit(a)
  const bSplit = duoSplit(b)
  var k = 0
  for (duolabA of aSplit)
  {
    for (duolabB of bSplit)
    {
      k += (duolabA==duolabB)
    }
  }
  return k
}
function pDuolarity(a, b)
{
  const aSplit = duoSplit(a)
  const bSplit = duoSplit(b)
  var k = 0
  for (duolabA of aSplit)
  {
    for (duolabB of bSplit)
    {
      k += (duolabA==duolabB)
    }
  }
  return k/(bSplit.length+aSplit.length)*2;
}
function averagelarity(a, b)
{
  const kTrim = trimilarity(a,b)*pTrimilarity(a,b)
  const kDuo = duolarity(a,b)*pDuolarity(a,b)
  return (kTrim+kDuo)/(trimilarity(a,b)+duolarity(a,b))
}
function bestMatch(algorithm, string, targets)
{
  var bestMatchValue = 0
  var bestMatchT = null
  for (comparator of Object.keys(targets))
  {
    if (algorithm(string, comparator) > bestMatchValue)
    {
      bestMatchValue = algorithm(string, targets[comparator])
      bestMatchT = targets[comparator]
    }
  }
  return {match:bestMatchT, value:bestMatchValue}
}
