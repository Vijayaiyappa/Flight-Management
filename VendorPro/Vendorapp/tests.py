def rotateArray(arr: list, k: int) -> list:
    new_arr=[]
    for i in range(k):
        first_index=arr[0]

        arr=arr[0:(len(arr))+1]+[first_index]
    return arr
