def next_bigger(n):
    new_n = map(int, str(n))
    sentinel = -1
    #find first instanve where digit is smaller than digit to it's right
    for i in range(len(new_n) - 1, 0, -1):
        if (new_n[i] > new_n[i-1]):
            sentinel = 1
            break
    if (sentinel == -1):
        return -1
    
    #find smallest number to the right of above digit, but still bigger
    num = new_n[i-1]
    curSmall = i
    for j in range(i + 1, len(new_n)):
        if (new_n[j] > num and  new_n[j] < new_n[curSmall]):
            curSmall = j

    #swap numbers
    new_n[curSmall],new_n[i-1] = new_n[i-1], new_n[curSmall]
    
    #add together right half of number, split at i
    nextNum = 0
    for k in range(i):
        nextNum = nextNum * 10 + new_n[k]

    #sort into ascending order, and then add back together the left half of the number
    sortFront = sorted(new_n[i:])

    for m in range(len(new_n)-i):
        nextNum = nextNum * 10 + sortFront[m]

    return nextNum
