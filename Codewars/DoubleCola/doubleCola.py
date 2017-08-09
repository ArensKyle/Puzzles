def whoIsNext(names, r):
    names2 = names[:]
    base = len(names2)
    if (r < base):
        return names2[r - 1]
    i = 0
    funct = base * (2 ** i)
    r -= funct
    while (r > 0):
        i += 1
        funct = base * (2 ** i)
        r -= funct
    r += (base * (2 ** i))
    return names2[int(r / (2 ** i))]
            
        
