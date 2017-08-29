def check(array, max_e):
    for i in array:
        if (array.count(i) > max_e):
            array.remove(i)
            array = check(array, max_e)
            break
    return array

def delete_nth(order,max_e):
    arr = order[::-1]
    result = check(arr, max_e)
    return result[::-1]
