export default function bubble_sort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length - 1 - i; j ++){
            if(arr[j] > arr[j+1]) {
                // swap
                const temp = arr[j];
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

// n(n^2 + 1)/ 2 -> n^2