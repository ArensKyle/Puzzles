def main():
    sum = 0
    for nums in range(1,1000):
        if (nums % 3 == 0):
            sum = sum + nums
        elif (nums % 5 == 0):
            sum = sum + nums
    print(sum)


if __name__ == '__main__':
    main()
