def top3(votes):
    an = []
    ans = []
    ke = votes.keys()
    for i in ke:
        an.append([votes[i], i])
    an.sort()
    ans.append(an[len(an)-1][1])
    ans.append(an[len(an)-2][1])
    ans.append(an[len(an)-3][1])
    return ans


v = {"A": 9, "X": 9, "C": 9, "F": 9, "Z": 9, "B": 9, "Q": 9}
print(top3(v))
