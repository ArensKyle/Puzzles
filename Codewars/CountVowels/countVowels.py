def getCount(inputStr):
    a = inputStr.count("a")
    e = inputStr.count("e")
    i = inputStr.count("i")
    o = inputStr.count("o")
    u = inputStr.count("u")
    
    num_vowels = a + e + i + o + u
    return num_vowels
